const express = require("express");
const router = express.Router();

const articleController = require("../controllers/Article.controller");

router.get("/", articleController.findArticles);
router.get("/:id", articleController.findArticleById);
router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
