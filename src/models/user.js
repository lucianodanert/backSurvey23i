import mongoose, { Schema }   from "mongoose";

const userSchema = new Schema({

    username: { 

        type: String,
        maxlenght: 100,
        require: true,
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
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: 'user_role',
    },
    estate: {
        type: Boolean,
        default: true,
    },

});

const User = mongoose.model('user', userSchema);


export default User;

