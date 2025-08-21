import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">← 목록으로 돌아가기</Link>
    </div>
  );
}
export default BlogDetail;
