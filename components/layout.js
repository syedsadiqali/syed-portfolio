import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from './NavBar/NavBar';

const name = 'Syed Sadiq ali';
export const siteTitle = 'Portfolio Site | Syed Sadiq ali';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio Site | Syed Sadiq ali</title>
        <meta name="title" content="Portfolio Site | Syed Sadiq ali" />
        <meta name="description" content="Portfolio Website | Syed Sadiq ali" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://syedsadiqali.com/" />
        <meta property="og:title" content="Portfolio Site | Syed Sadiq ali" />
        <meta
          property="og:description"
          content="Portfolio Website | Syed Sadiq ali"
        />
        <meta property="og:image" content={`/images/profile.jpg`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://syedsadiqali.com/" />
        <meta
          property="twitter:title"
          content="Portfolio Site | Syed Sadiq ali"
        />
        <meta
          property="twitter:description"
          content="Portfolio Site | Syed Sadiq ali"
        />
        <meta property="twitter:image" content={`/images/profile.jpg`} />
        <script data-ad-client="ca-pub-9828437605574984" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <NavBar />
      {/* <header className={styles.header}>
        <div className={utilStyles.Navbar}>
          
      </header> */}
      <main className={styles.container}>
        {children}

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
