const express = require('express');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const postControllers = require('./controllers/postControllers')
const pageControllers = require('./controllers/pageControllers')
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
app.use(methodOverride('_method',{
  methods: ['POST', 'GET']
}))

// ROUTERING
app.get('/', postControllers.getAllPosts);
app.get('/post/:id', postControllers.getPost); 
app.post('/posts', postControllers.createPost);
app.put('/post/:id', postControllers.updatePost)
app.delete('/post/:id', postControllers.deletePost)


app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPostPage);
app.get('/post/edit/:id', pageControllers.getEditPage)



const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} da çalışıyor...`);
});
