import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import styles from './NavBar.module.scss';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className={styles.NavBar}>
      <div className={styles.gradient}> </div>
      <div className={styles.mainNav}>
        <Link href="/">
          <a
            className={`${
              router.pathname.startsWith('/') ? styles.active : null
            } ${styles.navItem}`}
          >
            Home
          </a>
        </Link>
        <Link href="https://blog.syedsadiqali.com" className={styles.navItem}>
          <a
            className={`${
              router.pathname.startsWith('/blog') ? styles.active : null
            } ${styles.navItem}`}
          >
            Blog
          </a>
        </Link>
        <Link href="/projects" className={styles.navItem}>
          <a
            className={`${
              router.pathname.startsWith('/projects') ? styles.active : null
            } ${styles.navItem}`}
            color="white"
          >
            Projects
          </a>
        </Link>
      </div>

      {/* {false ? (
        <h1 className={styles.heading2Xl}>
          Hello I am <br /> <strong>{name}</strong>
        </h1>
      ) : (
        <>
          <h2 className={styles.headingLg}>
            <Link href="/">
              <a className={styles.colorInherit}>{'hello'}</a>
            </Link>
          </h2>
        </>
      )} */}
    </nav>
  );
};

export default NavBar;
