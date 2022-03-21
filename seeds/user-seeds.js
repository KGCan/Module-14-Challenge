const { User } = require("../models");

const userData = [
    //add user info here for seeded data
]

const starterUsers = () => User.bulkCreate(userData);

module.exports = starterUsers;