import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setPosts(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BlogList;
