const User = require('../models/user.js');

async function index(req, res) {
    try {
        const currentUser = await User.findById(req.session.user);
        res.render('home/index.ejs', { user: currentUser });
    } catch (error) {
        console.error(error);
    }
}

module.exports = { index };
