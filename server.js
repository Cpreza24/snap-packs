const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const port = process.env.PORT ? process.env.PORT : '3000';

const authController = require('./controllers/auth.js');
const inventoriesController = require('./controllers/inventories.js');

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

app.set('view engine', 'ejs');

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
app.use(passUserToView);

app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect(`/users/${req.session.user._id}/inventory`);
    } else {
        res.render('index');
    }
});

app.use('/auth', authController);

app.use(isSignedIn);
app.use('/users/:userId/inventory', inventoriesController);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
