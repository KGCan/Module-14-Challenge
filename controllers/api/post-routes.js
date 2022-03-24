const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);  
  Post.create({ ...body, userId: req.session.userId })
      .then(nePost => {
        res.json(newPost);
      })
      .catch(err => {
        res.status(500).json(err);
      });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(dbPostData => {
        if (dbPostData >0) {
          res.status(200).end();
        } else {
          res.status(404).end();
      }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (dbPostData >0) {
          res.status(200).end();
        } else {
        res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;



  // Get all users
// router.get('/', (req, res) => {
//     console.log('======================');
//     Post.findAll({
//         attributes: [
//             'id',
//             'title',
//             'created_at',
//             'post_content'
//         ],
//       order: [['created_at', 'DESC']],
//       include: [
//           // attach username to comment
//           {
//             model: Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//               model: User,
//               attributes: ['username', 'github']
//             }
//         },
//         {
//             model: User,
//             attributes: ['username', 'github']
//         },
//     ]
// })
//     .then(dbPostData => res.json(dbPostData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title',
//       'created_at',
//       'post_content'
//     ],
//     include: [
//     {
//       model: User,
//       attributes: ['username', 'github']
//     },
//     {
//       model: Comment,
//       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//       include: {
//       model: User,
//       attributes: ['username', 'github']
//     }
//  }
// ]
// })
// .then(dbPostData => {
//     if (!dbPostData) {
//       res.status(404).json({ message: 'There was no post found matching this ID' });
//       return;
//     }
//     res.json(dbPostData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });