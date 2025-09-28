const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

//setup static folder
//app.use(express.static(path.join(__dirname, "public")));
let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
];

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log("hello world");
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

//get a specific post:
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    return res.status(200).json(post);
  }
  res.status(404).json({ message: `post of id ${id} does not exist.` });
});

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
