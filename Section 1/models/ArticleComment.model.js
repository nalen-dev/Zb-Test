const mongoose = require("mongoose");

const articleCommentSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  articleId: {
    type: Number,
    ref: "Article",
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article_Comment", articleCommentSchema);
