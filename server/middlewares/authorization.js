const Article = require('../models/Article')

function authorizedUser(req, res, next) {
  Article
    .findById(req.params.id)
    .then(task => {
      if (String(task.user) !== String(req.currentUser._id)) {
        res.status(401).json({
          msg: 'Unauthorized User'
        })
      } else {
        next()
      }
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Internal Server Error',
        Error: err
      })
    })
}

module.exports = authorizedUser