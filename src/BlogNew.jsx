import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogNew({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input Validation
    if (!title.trim() || !body.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return; // Stop the function if validation fails
    }

    const newPost = { id: Date.now(), title, body };
    setPosts([...posts, newPost]);
    alert("새 글이 성공적으로 작성되었습니다!"); // Success feedback
    navigate("/posts"); // 작성 후 목록으로 이동
  };

  return (
    <div>
      <h2>새 글 작성</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea placeholder="내용 입력"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
export default BlogNew;