const mongoose = require("mongoose");
const headerSchema = new mongoose.Schema({
    logo: String,
    color: String,
    phot: String,
    content: String
});

module.exports = mongoose.model('headers', headerSchema);
