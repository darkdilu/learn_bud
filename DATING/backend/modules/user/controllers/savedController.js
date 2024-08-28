const SaveProfile = require("../models/Saved.Model");
const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");

const saveProfile = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  console.log("receiver:", receiverId);
  const duplicateSaved = await SaveProfile.findOne({
    $and: [{ savedBy: req.id }, { savedProfile: receiverId }],
  });
  if (duplicateSaved) {
    throw new CustomError("Account already saved!", 400);
  }
  const saved = new SaveProfile({
    savedBy: req.id,
    savedProfile: receiverId,
  });
  await saved.save();
  return res.json({ message: "Profile saved!", status: true, saved });
});

const findSavedProfile = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const profile = await SaveProfile.findOne({
    $and: [{ savedBy: req.id }, { savedProfile: receiverId }],
  });
  if (!profile) {
    throw new CustomError("No saved profile!", 404);
  }
  return res.json({ message: "Saved account!", status: true, profile });
});

const findAllSavedProfiles = AsyncHandler(async (req, res, next) => {
  const profiles = await SaveProfile.find({
    $or: [
      {
        savedBy: req.id,
      },
      {
        savedProfile: req.id,
      },
    ],
  })
    .populate("savedBy")
    .populate("savedProfile");
  const profileObjs = profiles.map((profile) => profile.toObject());
  profileObjs.forEach((each, index) => {
    return (profileObjs[index] = {
      ...each,
      User: each.savedBy._id.toString() === req.id,
    });
  });
  return res.json({
    message: "Saved profiles fetched!",
    status: true,
    profileObjs,
  });
});

module.exports = {
  saveProfile,
  findSavedProfile,
  findAllSavedProfiles,
};
