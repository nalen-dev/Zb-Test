const { Article, Article_Comment } = require("../models");

const articleController = {
  createArticle: async (req, res, next) => {
    const { title, content } = req.body;
    try {
      const oldData = await Article.findOne().sort({ _id: -1 }).limit(1);
      const _id = oldData ? oldData._id + 1 : 1;

      Article.create({ _id, title, content });

      return res.status(201).json({ msg: `article posted with id ${_id}` });
    } catch (error) {
      next(error);
    }
  },

  findArticles: async (req, res, next) => {
    try {
      const Articles = await Article.find();

      if (Articles == null) {
        return res.status(400).json({ msg: "no article yet!" });
      }
      return res.status(200).json({ data: Articles });
    } catch (error) {
      next(error);
    }
  },

  findArticleById: async (req, res, next) => {
    const { id } = req.params;

    try {
      const Articles = await Article.findOne({ _id: id });
      const comments = (await Article_Comment.find({ articleId: id })) || [];

      if (Articles == null) {
        return res.status(400).json({ msg: "cannot find article!" });
      }

      return res.status(200).json({ ...Articles["_doc"], comments });
    } catch (error) {
      next(error);
    }
  },
  updateArticle: async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const article = await Article.findOne({ _id: id });
      if (article == null) {
        return res.status(400).json({ msg: "cannot find article!" });
      }

      await Article.updateOne({ _id: id }, { title: title || article.title, content: content || article.content });
      return res.status(201).json({ msg: "article updated!" });
    } catch (error) {
      next(error);
    }
  },

  deleteArticle: async (req, res, next) => {
    const { id } = req.params;
    try {
      const article = await Article.findOneAndDelete({ _id: id });
      if (article == null) {
        return res.status(400).json({ msg: "cannot find article!" });
      }
      return res.status(201).json({ msg: "success delete article!" });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = articleController;
