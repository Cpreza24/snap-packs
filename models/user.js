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
    megapixels: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const lensSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    focalLength: {
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

const userSchema = new mongoose.Schema({
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
