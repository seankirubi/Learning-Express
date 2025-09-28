import express from "express";
const postsRouter = express.Router();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
  { id: 4, title: "Post four" },
];

postsRouter.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

//get a specific post:
postsRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    return res.status(200).json(post);
  }
  res.status(404).json({ message: `post of id ${id} does not exist.` });
});

//Create new posts
postsRouter.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  

  if (!newPost.title) {
    return res.status(400).json({ message: "Please include a title." });
  } else {
    posts.push(newPost);
  }
  res.status(201).json(posts);
});

//update a post
postsRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
 
  const post = posts.find((post) => post.id === id)

  if(!post){
    return res.status(404).json({ message: `post of id ${id} does not exist.` });
  }

  post.title = req.body.title;
  res.status(201).json(posts)
})

export default postsRouter;
