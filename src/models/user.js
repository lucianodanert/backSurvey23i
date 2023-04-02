import mongoose, { Schema }   from "mongoose";

const userSchema = new Schema({
    username: { 
        type: String,
        maxlenght: 100,
        require: true,
        unique: true
    },
    email: {
        type: String,
        maxlenght: 100,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
});

const User = mongoose.model('user', userSchema);

export default User;