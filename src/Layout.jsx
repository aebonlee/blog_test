import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/posts" className={styles.logoLink}>
          <h1>My Awesome Blog</h1>
        </Link>
      </header>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;