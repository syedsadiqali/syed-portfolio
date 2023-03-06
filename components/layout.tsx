import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import NavBar from './NavBar/NavBar';

const name = 'Syed Sadiq ali';
export const siteTitle = 'Portfolio Site | Syed Sadiq ali';

export default function Layout({
  children,
  home
}: {
  children: any;
  home?: any;
}) {
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
        <meta property="twitter:url" content="https://twitter.com/@alisyedsadiq1" />
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
      <NavBar />
      <main className={styles.container}>
        {children}

        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </main>
    </div>
  );
}
