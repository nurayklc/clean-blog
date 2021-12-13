const express = require('express');
const mongoose = require('mongoose')
const Post = require('./models/Post')
const ejs = require('ejs')
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// Connect DB
mongoose.connect('mongodb://localhost/clean-blog')

// MIDDLEWARE 
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ROUTERING
app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index',{
    posts
  })
});
app.get('/about', (req, res) => {
  res.render('about')
});
app.get('/post', (req, res) => {
  res.render('post')
});
app.get('/add_post', (req, res) => {
  res.render('add_post')
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body)
  res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} da çalışıyor...`);
});
