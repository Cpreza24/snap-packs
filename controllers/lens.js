const User = require('../models/user.js');

//Index
async function index(req, res) {
    const currentUser = await User.findById(req.session.user._id);
    res.render('lens/index', { lens: currentUser.lens });
}

// New
async function newLens(req, res) {
    res.render('lens/new');
}

//Delete

//Update

//Create
async function postCamera(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.lens.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/lens`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

//Edit

//Show
async function showLens(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const lens = currentUser.lens.id(req.params.lensId);
        res.render('lens/show', { lens: lens });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

module.exports = { index, newLens, postCamera, showLens };
