const router = require('express').Router();
const { User } = require('../../models');

    // Create (POST) users
    router.post('/', (req, res) => {
        User.create({
          username: req.body.username,
          password: req.body.password,
        })
        .then(dbUserData => {
          req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json(dbUserData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
      });

      // Login (POST)
      router.post('/login', (req, res) => {
        User.findOne({
          where: {
            username: req.body.username
          }
        }).then(dbUserData => {
          if (!dbUserData) {
            res.status(400).json({ message: 'No user found!' });
            return;
          }
      
          const validPassword = dbUserData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
          }

          req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
      
            res.json({ user: dbUserData, message: 'You are now logged in!' });
          });
        });
      });

      // Logout (POST)
      router.post('/logout', (req, res) => {
        if (req.session.loggedIn) {
          req.session.destroy(() => {
            res
            .status(204)
            .json({ message: 'You are now logged out!' })
            .end();
          });
        } else {
          res.status(404).end();
        }
      });

       // DELETE
      router.delete('/:id', (req, res) => {
        User.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found matching that ID' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });
    
    module.exports = router;
    


    // GET all users
// router.get('/', (req, res) => {
//     User.findAll({
//         attributes: { exclude: ['password'] }
//     })
//       .then(dbUserData => res.json(dbUserData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   // GET single user 
//   router.get('/:id', (req, res) => {
//     User.findOne({
//         attributes: { exclude: ['password']},
//         where: {
//           id: req.params.id
//         },
//         include: [
//             {
//               model: Post,
//               attributes: ['id', 'title', 'post_content', 'created_at']
//             },
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_text', 'created_at'],
//                 include: {
//                   model: Post,
//                   attributes: ['title']
//                 }
//             }
//           ]
//         })
//         .then(dbUserData => {
//           if (!dbUserData) {
//             res.status(404).json({ message: 'Unable to locate a user matching this ID' });
//             return;
//           }
//           res.json(dbUserData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     });


      // router.put('/:id', withAuth, (req, res) => {
      //   User.update(req.body, {
      //       individualHooks: true,
      //       where: {
      //           id: req.params.id
      //     }
      //   })
      //     .then(dbUserData => {
      //       if (!dbUserData[0]) {
      //         res.status(404).json({ message: 'No user found matching that ID' });
      //         return;
      //       }
      //       res.json(dbUserData);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       res.status(500).json(err);
      //     });
      // });