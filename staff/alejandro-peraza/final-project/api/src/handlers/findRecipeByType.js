const { verifyTokenAndGetUserId } = require("../helpers");
const { findRecipeByDestilled } = require("logic");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    findRecipeByDestilled(userId)
      .then((recipe) => res.json(recipe))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};