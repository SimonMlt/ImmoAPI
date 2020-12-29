const express = require('express');
const app = express();
require('./src/Database');
const  postsRoutes = require('./routes/posts');

app.listen(8080, () => {
    console.log('Serveur prêt');
});
