const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const postRoutes = require('./src/routes/post');
const userRoutes = require('./src/routes/user');
require('./src/Database');
require('dotenv').config();
const {APP_PORT} = process.env;
const {checkUser, requireAuth} = require('./src/middleware/auth');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

//routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


//serveur
app.listen(APP_PORT, () => {
    console.log(`Le serveur est connecté sur le port ${APP_PORT}...`);
});
