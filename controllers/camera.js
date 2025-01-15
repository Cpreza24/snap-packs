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
        console.error(error);
    }
}

//New Camera Route
function newCamera(req, res) {
    res.render('camera/new');
}

//New Lense Route
// function newLens(req, res) {
//     res.render('inventory/lens-inventory/new');
// }

module.exports = { index, newCamera };
