const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
    name: String,
    phot: String,
    content: String
});

module.exports = mongoose.model('recipes', recipeSchema);
