import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Syed Sadiq ali';
export const siteTitle = 'Portfolio Site | Syed Sadiq ali';

export default function Layout({ children, home }) {
  const router = useRouter();

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
              className={router.pathname === '/blog' ? utilStyles.active : null}
            >
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={router.pathname === '/projects' ? utilStyles.active : null}
            >
              Projects
            </a>
          </Link>
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
          <h1 className={utilStyles.heading2Xl}>Hello I am  <br/> <strong>{name}</strong></h1>
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
