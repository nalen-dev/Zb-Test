const express = require("express");
const router = express.Router();

const commentController = require("../controllers/Comment.controller");

router.post("/:articleId", commentController.createComment);
router.get("/:commentId", commentController.findComment);
router.put("/:commentId", commentController.updateComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
