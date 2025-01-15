const User = require('../models/user.js');

async function index(req, res) {
    const currentUser = await User.findById(req.session.user._id);
    res.render('lens/index', { lens: currentUser.lens });
}

module.exports = { index };
