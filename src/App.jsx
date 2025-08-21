import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import BlogList from "./BlogList";
import BlogDetail from './BlogDetail.jsx'; // 💡 .js를 .jsx로 변경
import BlogNew from "./BlogNew";
import BlogEdit from "./BlogEdit";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      {/* 기본 경로를 /posts로 리디렉션 */}
      <Route path="/" element={<Navigate to="/posts" replace />} />
      
      {/* Layout을 사용하는 라우트 그룹 */}
      <Route element={<Layout />}>
        <Route path="/posts" element={<BlogList />} />
        <Route path="/posts/new" element={<BlogNew />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
        <Route path="/posts/edit/:id" element={<BlogEdit />} />

        {/* 일치하는 라우트가 없을 때 표시할 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;