const User = require('../models/user.js');

async function index(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('camera/index', {
            camera: currentUser.camera,
            lens: currentUser.lens,
        });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

function newCamera(req, res) {
    res.render('camera/new');
}

async function postCamera(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.camera.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/camera`);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

async function showCamera(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const camera = await currentUser.camera.id(req.params.cameraId);
        res.render('camera/show', { camera: camera });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

async function editCamera(req, res) {
    const currentUser = await User.findById(req.session.user._id);
    const camera = currentUser.camera.id(req.params.cameraId);
    res.render('camera/edit', { camera: camera });
}

async function updateCamera(req, res) {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const camera = currentUser.camera.id(req.params.cameraId);
        camera.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/camera/${camera._id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

async function deleteCamera(req, res) {
    try {
        const currentUser = await User.findById(req.session.user);
        currentUser.camera.id(req.params.cameraId).deleteOne();

        await currentUser.save();

        res.redirect(`/users/${currentUser._id}/camera`);
    } catch (error) {}
}

module.exports = {
    index,
    newCamera,
    postCamera,
    showCamera,
    editCamera,
    updateCamera,
    deleteCamera,
};
