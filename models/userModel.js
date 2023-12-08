const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectID,
    //     required: true,
    //     ref: "User"
    // },
    username: {
        type: String,
        required: [true, "Please add the username"],
    },
    email: {
        type: String,
        required: [true, "Please add the user email ID"],
        unique: [true, "Email ID exists "]
    },
    password: {
        type: String,
        required: [true, "Please add user password"]
    }
},{
    timestamps: true
});


module.exports = mongoose.model("User", userSchema);