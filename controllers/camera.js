const express = require('express');
//const router = express.Router();
const User = require('../models/user.js');

// router.get('/', async (req, res) => {
//     try {
//         const currentUser = await User.findById(req.session.user._id);
//         res.render(`inventory/index`, {
//             camera: currentUser.camera,
//             lens: currentUser.lens,
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });

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

//New Camera Route
function newCamera(req, res) {
    res.render('camera/new');
}

// Create new Camera
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
        const currentUser = await User.findById(req.session.user);
        const camera = await currentUser.camera.id(req.params.cameraId);
        res.render('camera/show', { camera: camera });
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

module.exports = { index, newCamera, postCamera, showCamera };
