const Recipe = require("../models/recipe");

class RecipeController {
 static async getAllRecipes(req, res) {
     try {
         const info = await Recipe.find({});
         return res.json({
             info: info
         });
    } catch (error) {
         return console.log(error);
     }
 }

 static async getRecipe(req, res) {
     try {
         const {id} = req.params;
         const info = await Recipe.findOne({_id: id});
         return res.json({
             info: info
         });
     } catch (error) {
         return error;
     }
 }

 static async postRecipe(req, res) {
     try {
         if(!req.body.name && !req.body.content) {
             return res.json({
                 message: "Please fill in all fields"
             });
         }
         else {
             const info = await Recipe.create(req.body);
             return res.json({
                 info: info
             });
         }
     } catch (error) {
        console.log(error)
         //return error;
     }
 }

 static async deleteRecipe(req, res) {
     try {
         const {id} = req.params;
         const info = await Recipe.findOneAndDelete({_id: id});
         return res.json({
             info: info
         });
     } catch (error) {
         return error
     }
 }
}

module.exports = RecipeController;
