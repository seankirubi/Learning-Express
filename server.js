const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

//setup static folder
//app.use(express.static(path.join(__dirname, "public")));
let posts = [
  {id: 1, title: "Post one"},
  {id: 2, title: "Post two"},
  {id: 3, title: "Post three"},
  {id: 4, title: "Post four"}
]

app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);
  console.log("hello world")
  if(!isNaN(limit) && limit > 0){
    res.json(posts.slice(0, limit));
  }else{
  res.json(posts);
}
})

//get a specific post:
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const post = posts.filter((post) => post.id === id);
  res.json(post)
});

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
