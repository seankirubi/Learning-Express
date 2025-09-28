import express from "express";
import postsRouter from "./routes/posts.js";
import path from "path";
const port = process.env.PORT || 8000;

const app = express();

//Body parser middlware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});



//app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", postsRouter);

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
