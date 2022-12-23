const { Article_Comment } = require("../models");

const commentController = {
  createComment: async (req, res, next) => {
    const { articleId } = req.params;
    const { comment } = req.body;

    try {
      const oldData = await Article_Comment.findOne().sort({ _id: -1 }).limit(1);
      const _id = oldData ? oldData._id + 1 : 1;

      Article_Comment.create({ _id, articleId, comment });

      return res.status(201).json({ msg: `comment posted with id ${_id}` });
    } catch (error) {
      next(error);
    }
  },

  findComment: async (req, res, next) => {
    const { commentId } = req.params;

    try {
      const comment = await Article_Comment.findOne({ _id: commentId });
      if (comment == null) {
        return res.status(400).json({ msg: "no comment found!" });
      }
      return res.status(200).json({ data: comment });
    } catch (error) {
      next(error);
    }
  },

  updateComment: async (req, res, next) => {
    const { commentId } = req.params;
    const { comment } = req.body;

    try {
      const commentFound = await Article_Comment.findOne({ _id: commentId });

      if (commentFound == null) {
        return res.status(400).json({ msg: "cannot find commentar!" });
      }

      await Article_Comment.updateOne({ _id: commentId }, { comment: comment || commentFound.comment });

      return res.status(201).json({ msg: "commentar updated!" });
    } catch (error) {
      next(error);
    }
  },

  deleteComment: async (req, res, next) => {
    const { commentId } = req.params;

    try {
      const comment = await Article_Comment.findOneAndDelete({ _id: commentId });

      if (comment == null) {
        return res.status(400).json({ msg: "cannot find commentar!" });
      }

      return res.status(201).json({ msg: "success delete commentar!" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = commentController;
