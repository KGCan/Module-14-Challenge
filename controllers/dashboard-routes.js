// reviewed

const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// // get all posts for dashboard
 router.get('/', withAuth, (req, res) => {
   Post.findAll({
     where: {
       user_id: req.session.user_id
     }
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('all-posts-admin', { 
        layout: "dashboard",
        posts
       });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

 router.get('/new', withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard"
  });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render("edit-post", {
          layout: "dashboard",
          post
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
        
 module.exports = router;




   //  Post.findOne({
  //      where: {
  //          id: req.params.id
  //      },
  //      attributes: [
  //       'id',
  //       'title',
  //       'created_at',
  //       'post_content'
  //      ],         
  //      include: [
  //     {
  //       model: Comment,
  //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
  //       include: {
  //         model: User,
  //         attributes: ['username', 'github']
  //       }
  //     },
  //     {
  //       model: User,
  //       attributes: ['username', 'github']
  //     }
  //   ]


//   .then(dbPostData => {
//     if (!dbPostData) {
//         res.status(404).json({ message: 'There were no posts found matching this id'});
//         return;
//     }

//     const post = dbPostData.get({ plain: true });

//     res.render('edit-post', {
//         post,
//         loggedIn: true
//     });
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   });
// });

// router.get('/create/', withAuth, (req, res) => {
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id
//   },
//   attributes: [
//     'id',
//     'title',
//     'created_at',
//     'post_content'
//   ],
//   include: [
//     {
//       model: Comment,
//       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//       include: {
//         model: User,
//         attributes: ['username', 'github']
//       }
//   },
//   {
//       model: User,
//       attributes: ['username', 'github']
//   }
//  ]
// })
//       .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('create-post', { posts, loggedIn: true });
//      })
//       .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//      });
// });