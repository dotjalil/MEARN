import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default App;
