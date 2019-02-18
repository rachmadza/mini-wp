const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  created_at: Date,
  author: String,
  featured_image: String, 
  user:{ type: Schema.Types.ObjectId, ref: 'User' }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article