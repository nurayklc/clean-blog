const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const PostShema = new Shema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostShema);

module.exports = Post;
