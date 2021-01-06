const mongoose = require('mongoose');
require('dotenv').config();
const {DB_NAME, DB_HOST, DB_PORT} = process.env;

mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
)
    .then(() => console.log(`La base de données est connectée sur le port ${DB_PORT}...`))
    .catch((err) => console.log("Erreur de connection à MongoDB", err)
);
