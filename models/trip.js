const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tripSchema = new Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Trip", tripSchema);