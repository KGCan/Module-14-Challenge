// reviewed

const { Comment } = require("../models");

const commentData= [
    // Add some comment info here to use as starter comments
    {
        user_id: 1,
        post_id: 1,
        comment_text: "I'm so excited to have a great place to communicate with like minded techies!"
    },
]

const starterComments = () => Comment.bulkCreate(commentData);

module.exports = starterComments;