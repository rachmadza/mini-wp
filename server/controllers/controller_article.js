const Article = require('../models/Article')

module.exports = {

  all: (req, res) => {
    Article
      .find({
        user: req.currentUser._id
      })
      .then(articles => {
        if (!articles.length) {
          res.status(404).json({
            msg: 'There is no article, please create a new one'
          })
        } else {
          res.status(200).json({
            Articles: articles
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  create: (req, res) => {
    
    let input = {
      title: req.body.title,
      content: req.body.content,
      created_at: Date.now(),
      author: req.body.author,
      featured_image: req.body.featured_image,
      user: req.currentUser._id
    }

    Article
      .create(input)
      .then(article => {
        res.status(201).json({
          msg: 'New Article has been created',
          Article: article
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  update: (req, res) => {
    let input = {
      title: req.body.title,
      content: req.body.content,
      created_at: Date.now(),
      author: req.body.author,
      featured_image: req.body.featured_image,
      user: req.currentUser._id
    }

    Article
      .findByIdAndUpdate({ _id: req.params.id }, input, { new: true })
      .then(article => {
        res.status(201).json({
          msg: 'Article has been updated',
          Article: article
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  },

  delete: (req, res) => {
    Article
      .findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          msg: 'Article has been deleted',
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Internal Server Error',
          Error: err
        })
      })
  }

}