// Defines Routes
const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');

router.use('/users', userRoutes);
router.use('/sightings', postRoutes);

module.exports = router;