import express from 'express'
import path from 'path'
import postsRouter from './routes/posts.js'


const app = express();
const port = process.env.PORT || 8000;

//app.use(express.static(path.join(__dirname, "public")));

app.use('/api/posts', postsRouter);

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
