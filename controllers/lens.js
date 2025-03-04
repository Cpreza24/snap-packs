const User = require('../models/user.js');

async function index(req, res) {
    const currentUser = await User.findById(req.session.user._id);
    res.render('lens/index', { lens: currentUser.lens });
}

async function newLens(req, res) {
    res.render('lens/new');
}

async function deleteLens(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.lens.id(req.params.lensId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/lens`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

async function updateLens(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const lens = currentUser.lens.id(req.params.lensId);
        lens.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/lens/${lens._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

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

async function editLens(req, res) {
    const currentUser = await User.findById(req.session.user._id);
    const lens = currentUser.lens.id(req.params.lensId);
    res.render('lens/edit', { lens: lens });
}

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

module.exports = {
    index,
    newLens,
    postCamera,
    showLens,
    editLens,
    updateLens,
    deleteLens,
};
