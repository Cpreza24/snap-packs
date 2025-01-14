const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render(`inventory/index`, {
            camera: currentUser.camera,
            lens: currentUser.lens,
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
