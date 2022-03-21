const { Post } = require("../models");

const postData = [
    //add starter post data here for seeded data to start
]

const starterPosts = () => Post.bulkCreate(postData);

module.exports =starterPosts;