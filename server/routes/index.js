const express = require("express");
const router = express.Router();
const recipecontroller = require("../controllers/recipecontroller");
const usercontroller = require("../controllers/usercontroller");

router.post("/api/v1/recipe", recipecontroller.postRecipe);
router.get('/api/v1/recipes', recipecontroller.getAllRecipes);
router.get("/api/v1/recipe/:id", recipecontroller.getRecipe);
router.delete("/api/v1/recipe/:id", recipecontroller.deleteRecipe);

router.post("/api/v1/register", usercontroller.registerUser);
router.post("/api/v1/login", usercontroller.loginUser);
router.get("/api/v1/users", usercontroller.getAllUsers);
router.get("/api/v1/user/:id", usercontroller.getUser);

module.exports = router;
