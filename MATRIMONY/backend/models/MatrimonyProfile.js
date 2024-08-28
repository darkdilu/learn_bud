import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    firstName: { type: String, required: true  },
    lastName: { type: String , required: true },
    age: { type: Number},
    gender: { type: String},
    dateOfBirth: { type: Date},
    state: { type: String },
    district: { type: String },
    city: { type: String },
    height: { type: Number },
    martialStatus: { type: String },
    annualIncome: { type: String },
    familyType: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    fatherOccupation: { type: String },
    motherOccupation: { type: String },
    numberOfSibilings: { type: Number}, 
    motherTongue: { type: String },
    bodyType: { type: String },
    numberOfMarriedSibilings: { type:Number },
    expectationAboutPartner:{ type: String },
    weight: { type: Number },
    diabilities: { type: String },
    religion: { type: String },
    caste: { type: String },
    patnerExpectation:{ type: String },
    hobbies:{type: [String]},
    interest: { type: [String] },
    smoking:{type:Boolean},
    drinking:{type:Boolean},
    qualification: { type: String },
    profession: { type: String },
    profilePic: { type: String },
    photos: [{ type: String }],
    aboutMe: { type: String },
    video: [{ type: String }],
    phoneNumber: { type: String, required: true  },
    email: { type: String , required: true },
    address: { type: String },
    horoscope: { type: String },
    preference: {
        gender: { type: String },
        fromAge: { type: Number },
        toAge: { type: Number },
        district: { type: String },
        interest: { type: [String] },
        caste: { type: String },
    },
    viewedMyProfile: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }], 
    contactedProfile :[{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }]
}, {
    timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
