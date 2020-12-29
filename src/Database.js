const mongoose = require('mongoose');
const {APP_CONFIG, APP_PORT, DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD} = process.env;

mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
);
