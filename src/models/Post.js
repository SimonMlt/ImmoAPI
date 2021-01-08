const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        posterPseudo: {
            type: String,
            required: true,
        },
        posterId: {
            type: String,
            required: true
        },
        message: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        picture: {
            type: String,
        },
        comments: {
            type: [
                {
                    commenterId:String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('post', PostSchema);
