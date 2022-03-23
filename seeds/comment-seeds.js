// reviewed

const { Comment } = require("../models");

const commentData= [
    // Add some comment info here to use as starter comments
    {
        user_id: 1,
        post_id: 2,
        comment_text: "I'm so excited to have a great place to communicate with like minded techies!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "What a great way to meet new people and have someone to eat with!"
    },
]

const starterComments = () => Comment.bulkCreate(commentData);

module.exports = starterComments;