const mongoose = require('mongoose');

const Post = mongoose.model(
    "projet_immo",
    {
        author: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    "posts"
);

module.exports = {Post: Post};
