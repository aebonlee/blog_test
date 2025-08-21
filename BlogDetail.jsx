import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetail() {
  // 1. 필요한 훅(Hook) 선언
  const { id } = useParams(); // URL에서 id 파라미터 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수
  const [post, setPost] = useState(null); // 게시글 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 2. 데이터 가져오기 (useEffect)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data); // 성공 시 post 상태 업데이트
      })
      .catch(err => {
        console.error("데이터 로딩 실패:", err); // 에러 처리
      })
      .finally(() => {
        setLoading(false); // 로딩 상태 종료
      });
  }, [id]); // id가 변경될 때마다 다시 데이터를 가져옴

  // 3. 삭제 처리 함수
  const handleDelete = () => {
    // 사용자에게 삭제 여부 확인
    if (window.confirm("정말 이 게시글을 삭제하시겠습니까?")) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
          alert("게시글이 삭제되었습니다.");
          navigate("/posts"); // 삭제 후 목록 페이지로 이동
        })
        .catch(err => {
          console.error("삭제 실패:", err);
          alert("게시글 삭제에 실패했습니다.");
        });
    }
  };

  // 4. 로딩 및 데이터 없음 처리
  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  // 5. JSX 렌더링
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {/* 수정 및 삭제 버튼 */}
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate(`/posts/edit/${id}`)}>수정</button>
      <br />

      {/* 목록으로 돌아가기 링크 */}
      <Link to="/posts">목록으로 돌아가기</Link>
    </div>
  );
}

export default BlogDetail;