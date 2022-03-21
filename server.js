const express = require ("express");
const routes = require ("./controllers");
const sequelize = require ("./config/connection");
const path = require ("path");

const helpers = require ("./utils/helpers");

const expHandlebars = require ("express-handlebars");
const hbars = expHandlebars.create ({ helpers });

const session = require ("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require ("connect-session-sequelize")
(session.Store);

const sesh = {
    secret: "ssshhhh",
    cookie: {
        // This session will automatically expire in 10 minutes
        expires: 10 * 60 *1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sesh));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbars.engine);
app.set("view engine", "handlebars");

app.use(routes);

// Turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});