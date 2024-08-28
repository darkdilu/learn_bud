
import MatrimonyProfileconnection from "../models/ConnectedProfile.js";
import ConversationMembers from "../models/conversation.js";
import Profile from "../models/MatrimonyProfile.js";
import shortListMatrimonyProfile from "../models/shortList.js";
import User from '../models/User.js'

export const createProfile = async (req, res) => {
    const userId = req.params.id;

    try {

        const findUserData = await User.findById(userId);
        console.log("findUserData", findUserData);

        const profileData = {
            userId: findUserData._id,
            firstName: findUserData.firstName,
            lastName: findUserData.lastName,
            phoneNumber: findUserData.phno,
            email: findUserData.email,
            profilePic: req.body.propic,
            photos: req.body.multipleimg,
            video: req.body.reel,
            smoking: req.body.smoking,
            drinking: req.body.drinking,
            gender: req.body.gender,
            hobbies: req.body.hobbies,
            interest: req.body.interest,
            age: req.body.age,
            dateOfBirth: req.body.dateOfBirth
        };

        const newProfile = new Profile(profileData);
        await newProfile.save();

        res.status(201).json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const searchProfiles = async (req, res) => {
    try {
        const { minAge, maxAge, state, district, profession, qualification } = req.query;
        let query = {};
        if (minAge && maxAge) {
            query.age = { $gte: minAge, $lte: maxAge };
        } else if (minAge) {
            query.age = { $gte: minAge };
        } else if (maxAge) {
            query.age = { $lte: maxAge };
        }

        if (state && state.trim() !== "") {
            query.state = state;
        }

        if (district && district.trim() !== "") {
            query.district = district;
        }

        if (profession && profession.trim() !== "") {
            query.profession = profession;
        }

        if (qualification && qualification.trim() !== "") {
            query.qualification = qualification;
        }

        console.log(query);
        const profiles = await Profile.find(query);

        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const viewAUser = async (req, res) => {
    const profileId = req.params.id
    try {
        const fetchAUser = await Profile.findById({
            _id: profileId
        })
        res.status(200).json(fetchAUser)
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (req, res, next) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        //return the updated document
        res.status(200).json(updatedProfile)
    } catch (error) {
        next(error)
    }
}

export const addViewedProfile = async (req, res, next) => {
    try {
        const viewedProfileId = await Profile.findByIdAndUpdate(
            req.body.otherProfileId,
            { $addToSet: { viewedMyProfile: req.params.id } },
            { new: true }
        );

        if (!viewedProfileId) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(viewedProfileId);
    } catch (error) {
        next(error);
    }
};


export const getProfileByUserID = async (req, res) => {
    const userId = req.params.id
    try {
        const fetchUserProfile = await Profile.findOne({
            userId: userId
        })
        res.status(200).json(fetchUserProfile._id)
    } catch (error) {
        console.log(error);
    }
}
export const sendRequest = async (req, res) => {
    const fromUID = req.params.id;
    const { toUID } = req.body;

    if (!fromUID || !toUID) {
        return res.status(404).json({ message: "One or both user IDs are not found" });
    }

    if (fromUID === toUID) {
        return res.status(400).json({ message: "You cannot send a request to yourself" });
    }

    try {
        // Check if there is already a request from toUID to fromUID (to avoid duplicate request)
        const duplicateRequest = await MatrimonyProfileconnection.findOne({
            fromUID: toUID,
            toUID: fromUID
        });

        if (duplicateRequest) {
            return res.status(400).json({ message: "You have already received a request from this user" });
        }

        // Check if there is already a request from fromUID to toUID (to avoid duplicate request)
        const existingRequest = await MatrimonyProfileconnection.findOne({ fromUID, toUID });

        if (existingRequest) {
            return res.status(400).json({ message: "You have already sent a request" });
        }

        // Update the status of any existing shortlist data between the two users (either way) to "requested"
        await shortListMatrimonyProfile.deleteMany(
            {
                $or: [
                    { fromUID: fromUID, toUID: toUID },
                    { fromUID: toUID, toUID: fromUID }
                ]
            }
        );

        // Create a new connection request
        const newRequest = new MatrimonyProfileconnection({ fromUID, toUID });
        await newRequest.save();

        res.status(200).json({ message: "Request sent successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
};



export const cancelSentRequest = async (req, res) => {
    const fromUID = req.params.id;
    const requestToId = req.query.requestToId;  // Retrieve from query string

    console.log("fromUID", fromUID);
    console.log("toUId", requestToId);

    try {
        const findRequest = await MatrimonyProfileconnection.findOne({
            fromUID: fromUID,
            toUID: requestToId,
            status: "pending"
        });

        console.log("findRequest", findRequest);

        if (findRequest) {
            await MatrimonyProfileconnection.findOneAndDelete({ _id: findRequest._id });
            res.status(200).json({ message: "Request cancelled successfully" });
        } else {
            res.status(404).json({ message: "Request not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};





export const acceptRequest = async (req, res) => {
    const requestToId = req.params.id;
    const { requestFromId } = req.body;

    // Validate input
    if (!requestFromId || !requestToId) {
        return res.status(400).json({ message: "Invalid request parameters" });
    }

    try {
        // Find the connection request
        const findConnectionRequest = await MatrimonyProfileconnection.findOne({ fromUID: requestFromId, toUID: requestToId });
        console.log("findConnectionRequest", findConnectionRequest);

        if (!findConnectionRequest) {
            return res.status(404).json({ message: "Connection request not found" });
        }

        if (findConnectionRequest.status === "pending") {
            // Update the request status to accepted
            findConnectionRequest.status = "accepted";
            await findConnectionRequest.save();

            await shortListMatrimonyProfile.deleteMany({
                $or: [
                    { fromUID: requestFromId, toUID: requestToId },
                    { fromUID: requestToId, toUID: requestFromId }
                ]

            });

            // Create a new conversation for the accepted request
            const newConversation = new ConversationMembers({
                members: [findConnectionRequest.fromUID, findConnectionRequest.toUID]
            });
            await newConversation.save();

            return res.status(200).json({ message: "Request accepted successfully" });
        } else {
            return res.status(400).json({ message: "Connection request is already accepted or rejected" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

export const rejectTheRequest = async (req, res) => {
    // const { requestFromId } = req.body;
    // const { requestToId } = req.body;
    const requestToId = req.params.id
    const { requestFromId } = req.body

    try {
        const findConnectionRequest = await MatrimonyProfileconnection.findOne({ fromUID: requestFromId, toUID: requestToId });

        if (!findConnectionRequest) {
            return res.status(404).json({ message: "Connection request not found" });
        }

        if (findConnectionRequest.status === "pending") {

            await shortListMatrimonyProfile.deleteMany({
                $or: [
                    { fromUID: requestFromId, toUID: requestToId },
                    { fromUID: requestToId, toUID: requestFromId }
                ]

            });

            findConnectionRequest.status = "rejected";
            await findConnectionRequest.save();
            return res.status(200).json({ message: "Request rejected successfully" });
        } else {
            return res.status(400).json({ message: "Connection request is already accepted or rejected" });
        }
    } catch (error) {
        console.error("Error rejecting request:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const requestListOfUser = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(`Fetching requests for userId: ${userId}`);

        const profiles = await MatrimonyProfileconnection.find({
            toUID: userId,
            status: 'pending',
        });

        res.status(200).json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const listOfSentRequest = async (req, res) => {
    try {
        const profileId = req.params.id;
        console.log(`Fetching requests for profileId: ${profileId}`);
        const profiles = await MatrimonyProfileconnection.find({
            fromUID: profileId,
            status: 'pending',
        });

        res.status(200).json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const listOfAccepted = async (req, res) => {
    const id = req.params.id;

    try {
        const connections = await MatrimonyProfileconnection.find({
            $or: [
                { fromUID: id, status: 'accepted' },
                { toUID: id, status: 'accepted' }
            ]
        });
        console.log(`Found ${connections.length} connections for user ID: ${id}`);
        res.status(200).json(connections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const listOfRejection = async (req, res) => {
    const id = req.params.id;
    if (id) {
        try {
            const rejections = await MatrimonyProfileconnection.find({
                fromUID: id,
                status: 'rejected',
            })
            console.log(rejections);
            res.status(200).json(rejections)
        } catch (error) {
            console.error(error);
        }
    } else {
        res.status(400).json({ message: 'Invalid request' })
    }

}

export const findConnectionStatus = async (req, res) => {
    const FromId = req.params.id;
    const toId = req.params.otherUser;
    
    try { 
        const connection = await MatrimonyProfileconnection.find({
            $or: [
                { fromUID: FromId, toUID: toId },
                { fromUID: toId, toUID: FromId }
            ]
        });

        if (connection.length > 0) {
            console.log("status connection", connection[0].fromUID);
            res.json({ fromUID: connection[0].fromUID, toUID: connection[0].toUID, status: connection[0].status });
        } else {
            res.json({ status: 'not_found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



export const nearbyProfile = async (req, res) => {
    const profileId = req.params.id;
    try {
        const userProfile = await Profile.findOne({ _id: profileId })
        const nearbyProfiles = await Profile.find(
            {
                district: userProfile.district,
                _id: { $ne: profileId }
            }
        );
        res.status(200).json(nearbyProfiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const qualificationProfile = async (req, res) => {
    const profileId = req.params.id;
    console.log("profileId", profileId);
    try {
        const userProfile = await Profile.findOne({ _id: profileId })
        const nearbyProfiles = await Profile.find(
            {
                qualification: userProfile.qualification,
                _id: { $ne: profileId }
            }
        );
        res.status(200).json(nearbyProfiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const professionProfile = async (req, res) => {
    const profileId = req.params.id;
    console.log("profileId", profileId);
    try {
        const userProfile = await Profile.findOne({ _id: profileId })
        const professionProfiles = await Profile.find(
            {
                profession: userProfile.profession,
                _id: { $ne: profileId }
            }
        );
        res.status(200).json(professionProfiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const shortListTheProfile = async (req, res) => {
    const profileId = req.params.id;
    const otherUserProfileId = req.body.profileId
    try {
        if (!profileId || !otherUserProfileId) {
            return res.status(404).json({ message: "One or both user IDs are not found" });
        }

        if (profileId === otherUserProfileId) {
            return res.status(400).json({ message: "You cannot send a request to yourself" });
        }
        const isProfileConnected = await MatrimonyProfileconnection.find({
            $or: [
                { fromUID: profileId, toUID: otherUserProfileId },
                { fromUID: otherUserProfileId, toUID: profileId }
            ]
        })

        if (isProfileConnected.length > 0) {
            return res.status(400).json({ message: "You have already received a request from this user or you have sent request to this user" })
        }


        const findDuplicate = await shortListMatrimonyProfile.find({
            fromUID: profileId,
            toUID: otherUserProfileId
        })
        if (findDuplicate.length > 0) {
            return res.status(400).json({ message: "You have already shortList the user" })
        }

        const shortListTheProfile = new shortListMatrimonyProfile({
            fromUID: profileId,
            toUID: otherUserProfileId
        })

        const saveshortListTheProfile = await shortListTheProfile.save()
        res.status(200).json(saveshortListTheProfile);
    } catch (err) {
        console.error(err);
    }
}


export const cancelShortListTheProfile = async (req, res) => {
    const profileId = req.params.id;
    const otherUserProfileId = req.params.otherProfile
    try {
        if (!profileId || !otherUserProfileId) {
            return res.status(404).json({ message: "One or both user IDs are not found" });
        }

        if (profileId === otherUserProfileId) {
            return res.status(400).json({ message: "You cannot send a request to yourself" });
        }
       

       await shortListMatrimonyProfile.findOneAndDelete({
            fromUID: profileId,
            toUID: otherUserProfileId
        })
        res.status(200).json({ message: "ShortList The Profile is cancelled" });
    } catch (err) {
        console.error(err);
    }
}
export const shortListedList = async (req, res) => {
    const profileId = req.params.id;
    try {
      const listUserShortListedYourProfile = await shortListMatrimonyProfile.find({
        fromUID: profileId,
        status: "pending"
      });
      console.log(listUserShortListedYourProfile);
      
      
      if (listUserShortListedYourProfile.length>0) {
        return res.status(200).json(listUserShortListedYourProfile);
      }else{
        return res.status(200).json({ message: "No user shortlisted" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

  export const shortListedListOfAUser = async (req, res) => {
    const profileId = req.params.id;
    const otherProfileId = req.params.Otherid
    try {
      const listUserShortListedYourProfile = await shortListMatrimonyProfile.findOne({
        fromUID: profileId,
        toUID:otherProfileId,
      });
      
      if (listUserShortListedYourProfile) {
        return res.status(200).json({ message: "shortlisted is found" });
      }else{
        return res.status(200).json({ message: "shortlisted not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  

export const shortListedListedBy = async (req, res) => {
    const profileId = req.params.id;
    try {
        const listUserShortListedYOurProfile = await shortListMatrimonyProfile.find({
            toUID: profileId,
            status:"pending"
        })
        if (listUserShortListedYOurProfile.length === 0) {
            return res.status(404).json({ message: "No user shortlisted your profile" });
        }
        res.status(200).json(listUserShortListedYOurProfile);
    } catch (error) {

    }
}

export const reRegisterProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProfile = await Profile.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Validate before update
        });

        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}




