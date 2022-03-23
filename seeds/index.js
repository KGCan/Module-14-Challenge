// reviewed

const starterPosts = require("./post-seeds");
const starterUsers = require("./user-seeds");
const starterComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const startAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n---DATABASE SYNCED---\n");

    await starterUsers({ force: true });
    console.log("\n---USERS SYNCED---\n");

    await starterPosts({ force: true });
    console.log("\n---POSTS SYNCED---\n");

    await starterComments({ force: true });
    console.log("\n---COMMENTS SYNCED---\n");

    process.exit(0);
};

startAll();