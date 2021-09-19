import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {useEffect, useState} from 'react';

const name = 'Syed Sadiq ali';
export const siteTitle = 'Portfolio Site | Syed Sadiq ali';

export default function Layout({ children, home }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio Site | Syed Sadiq ali</title>
        <meta name="title" content="Portfolio Site | Syed Sadiq ali" />
        <meta name="description" content="Portfolio Website | Syed Sadiq ali" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://syed.vercel.app/" />
        <meta property="og:title" content="Portfolio Site | Syed Sadiq ali" />
        <meta
          property="og:description"
          content="Portfolio Website | Syed Sadiq ali"
        />
        <meta property="og:image" content={`/images/profile.jpg`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://syed.vercel.app/" />
        <meta
          property="twitter:title"
          content="Portfolio Site | Syed Sadiq ali"
        />
        <meta
          property="twitter:description"
          content="Portfolio Site | Syed Sadiq ali"
        />
        <meta property="twitter:image" content={`/images/profile.jpg`} />
      </Head>
      <header className={styles.header}>
        <div className={utilStyles.Navbar}>
          <Link href="/">
            <a className={router.pathname === '/' ? utilStyles.active : null}>
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={
                router.pathname.startsWith('/blog') ? utilStyles.active : null
              }
            >
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={
                router.pathname === '/projects' ? utilStyles.active : null
              }
              color="white"
            >
              Projects
            </a>
          </Link>
          <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        </div>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        {home ? (
          <h1 className={utilStyles.heading2Xl}>
            Hello I am <br /> <strong>{name}</strong>
          </h1>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
