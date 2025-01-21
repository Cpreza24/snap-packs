const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');
//const port = process.env.PORT ? process.env.PORT : '3000';

const authController = require('./controllers/auth.js');
const cameraController = require('./routes/camera.js');
const homeController = require('./routes/home.js');
const lensController = require('./routes/lens.js');

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`connected to MongoDB ${mongoose.connection.name}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use('/assets', express.static('assets'));
app.use(passUserToView);

app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect(`/users/${req.session.user._id}/home`);
    } else {
        res.render('index');
    }
});

app.use('/auth', authController);

app.use(isSignedIn);
app.use('/users/:userId/camera', cameraController);
app.use('/users/:userId/home', homeController);
app.use('/users/:userId/lens', lensController);

app.listen(process.env.PORT || 5000, () => {
    console.log(`app listening on port 5000`);
});
