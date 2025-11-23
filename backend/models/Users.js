import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    organisations_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' } // optional
});

const UserModel = mongoose.model('users', userSchema);
export default UserModel;