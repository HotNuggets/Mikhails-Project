import express from 'express';
import usersRouter from './routes/users/usersRoutes';
const app = express();
import cookieParser from 'cookie-parser';
import followsRouter from './routes/follows/followsRoutes';
import  postsRouter from './routes/post/postRoutes';

const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://HotNuggets:ieoBkUDlsayOqaoT@cluster0.z25jn.mongodb.net/instagram').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter)
app.use('/follows',followsRouter)
app.use('/posts',postsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})