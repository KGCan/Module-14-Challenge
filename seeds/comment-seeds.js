const { Comment } = require("../models");

const commentData= [
    // Add some comment info here to use as starter comments
]

const starterComments = () => Comment.bulkCreate(commentData);

module.exports = starterComments;