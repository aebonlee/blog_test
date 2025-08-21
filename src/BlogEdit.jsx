import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function BlogEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, title, body } : p
    );
    setPosts(updatedPosts);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <h2>글 수정</h2>
      <form onSubmit={handleUpdate}>
        <input type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">저장</button>
        <button type="button" onClick={() => navigate(`/posts/${post.id}`)}>취소</button>
      </form>
    </div>
  );
}
export default BlogEdit;