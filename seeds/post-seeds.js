const { Post } = require("../models");

const postData = [
    //add starter post data here for seeded data to start
    {
        title: "Nosh-Up goes live!",
        post_content: "A site to search events to meet-up with new people who like the same foods as you. The user will have the ability to sign up and create a user profile that will be visible to other users. A logged in user can create an event, view the events they are hosting as well as any other events they have joined. Users can join existing events from other users, view all events and click on a specific event for more details. Once a specific event has been selected the user can click on the host's profile to view their information and/or click to join the event.",
        user_id: 1
    }
]

const starterPosts = () => Post.bulkCreate(postData);

module.exports =starterPosts;