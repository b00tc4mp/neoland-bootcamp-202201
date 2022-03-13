const { verifyTokenAndGetUserId } = require("../helpers");
const { findRecipeByTitle } = require("logic");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    findRecipeByTitle(userId)
      .then((recipe) => res.json(recipe))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};