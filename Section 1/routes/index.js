const express = require("express");
const router = express.Router();

const articleRoutes = require("./Article.route");
const commentRoutes = require("./Comment.route");

router.use("/articles", articleRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
