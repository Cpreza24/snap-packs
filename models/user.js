const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    sensor: {
        type: String,
        required: true,
    },
    megaPixels: {
        type: Number,
        required: true,
    },
});

const lensSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    aperture: {
        type: Number,
        required: true,
    },
    sensor: {
        type: String,
        required: true,
    },
    zoom: {
        type: String,
        required: true,
    },
    focus: {
        type: String,
        required: true,
    },
});

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    camera: [cameraSchema],
    lens: [lensSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
