import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBottom.module.css';

const NavBottom = () => {
  const router = useRouter();

  return (
    <nav className={styles.navBottom}>
      <Link href="/" className={router.pathname === '/' ? styles.active : ''}>Home</Link>
      <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>About</Link>
      <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
    </nav>
  );
};

export default NavBottom;
