import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>404 - Page Not Found</h2>
      <p className={styles.message}>
        죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
      </p>
      <Link to="/posts" className={styles.homeLink}>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default NotFound;