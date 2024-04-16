const User = require('../models/User');

async function createUser(req, res) {
  try {
    const { username } = req.body;
    const user = await User.create({ username });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createUser,
};

