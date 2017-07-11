const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: String
});

module.exports = mongoose.model("User", userSchema);