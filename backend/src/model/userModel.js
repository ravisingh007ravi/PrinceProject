const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ProfileImage: { type: String, required: false, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ["user", "Shopkeeper", "admin"], required: true },
    UserOtp: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
},
    { timestamps: true }
)

module.exports = mongoose.model('UserDB', userSchema);   
