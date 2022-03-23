// reviewed

const { User } = require("../models");

const userData = [
    //add user info here for seeded data
    {
        username: "KGCan",
        github: "KGCan",
        email: "kirsten@pacificdraftworks.com",
        password: "12345",
    },
    {
        username: "CCan",
        github: "CCan",
        email: "CCan@gmail.com",
        password: "12345",
    },
]

const starterUsers = () => User.bulkCreate(userData);

module.exports = starterUsers;