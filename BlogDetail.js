import { useParams, useNavigate, Link } from "react-router-dom";

function BlogDetail({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  const handleDelete = () => {
    setPosts(posts.filter((p) => p.id !== post.id));
    navigate("/posts");
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate(`/posts/edit/${post.id}`)}>수정</button>
      <br />
      <Link to="/posts">← 목록으로 돌아가기</Link>
    </div>
  );
}
export default BlogDetail;
