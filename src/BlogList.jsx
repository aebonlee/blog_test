import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 테스트용 하드코딩 데이터
    const testPosts = [
      { id: 1, title: "첫 번째 블로그 포스트" },
      { id: 2, title: "React와 Vite로 블로그 만들기" },
      { id: 3, title: "GitHub Pages 배포하기" },
      { id: 4, title: "CSS 모듈 사용법" },
      { id: 5, title: "React Router 설정하기" }
    ];
    
    // API 호출 시뮬레이션
    setTimeout(() => {
      setPosts(testPosts);
      setLoading(false);
    }, 500);

    // 실제 API 호출 (백업용)
    /*
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        setError(err.message);
        // API 실패시 테스트 데이터 사용
        setPosts(testPosts);
      })
      .finally(() => setLoading(false));
    */
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

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
