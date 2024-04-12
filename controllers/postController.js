const Post = require('../models/Post');

async function createPost(req, res) {
  try {
    const { title, content, userId } = req.body;
    const post = await Post.create({ title, content, UserId: userId });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPost,
};