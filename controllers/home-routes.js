const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Get route for all posts for homepage

router.get('/', (req, res) => {
console.log('working');
Post.findAll({
    attributes: [
       'id',
       'title',
       'created_at',
       'post_content',
     ],
     include: [
       {
         model: Comment,
         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
         include: {
           model: User,
           attributes: ['username', 'gitHub']
         }
       },
       {
         model: User,
         attributes: ['username', 'gitHub']
       }
     ]
   })
     .then(dbPostData => {
       const posts = dbPostData.map(post => post.get({ plain: true }));

       res.render('homepage', {
         posts,
       loggedIn: req.session.loggedIn
       });
    })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
 });

// Get route for single post for homepage
 router.get('/post/:id', (req, res) => {
   Post.findOne({
     where: {
      id: req.params.id
    },
     attributes: [
       'id',
       'title',
       'created_at',
       'post_content',
     ],
     include: [
       {
         model: Comment,
         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
         include: {
           model: User,
           attributes: ['username', 'gitHub']
         }
       },
       {
         model: User,
         attributes: ['username', 'gitHub']
       }
     ]
   })
     .then(dbPostData => {
       if (!dbPostData) {
         res.status(404).json({ message: 'No post found matching this id' });
         return;
       }

       const post = dbPostData.get({ plain: true });

       res.render('single-post', {
         post,
         loggedIn: req.session.loggedIn
       });
     })
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
 });

 // Login
 router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
    res.redirect('/');
    return;
   }

   res.render('login');
 });

 // Signup
 router.get('/signup', (req, res) => {
     if (req.session.loggedIn) {
         res.redirect('/');
         return;
     }

     res.render('signup');
 });

 module.exports = router;


