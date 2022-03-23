const router = require ("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, (req, res) => {
      Comment.create({ ...req.body, user_id: req.session.user_id })
        .then(dbCommentData => {res.json(dbCommentData); 
          })
        .catch(err => {
          res.status(500).json(err);
        });
  });
  
  module.exports = router;



  // router.get('/', (req, res) => {
//     Comment.findAll({})
//     .then(dbCommentData => res.json(dbCommentData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

  // router.delete('/:id', withAuth, (req, res) => {
  //     Comment.destroy({
  //         where: {
  //           id: req.params.id
  //         }
  //       })
  //         .then(dbCommentData => {
  //           if (!dbCommentData) {
  //             res.status(404).json({ message: 'Unable to locate a comment with this ID' });
  //             return;
  //           }
  //           res.json(dbCommentData);
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           res.status(500).json(err);
  //         });
  // });