import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I’m a software engineer based in Delhi. I have been working with{' '}
          <strong>Javscript</strong> and <strong>Python</strong> for almost 3
          Years. <br />I have been part of amazing products like{' '}
          <strong>PoolMyRide</strong>,<strong>TravelClan</strong>,{' '}
          <strong>Routier</strong> and lately <strong>Applause</strong>. <br />{' '}
          I am learing DSA and Algorithms for the next part of my Career.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Social</h2>
        <div className={utilStyles.icons}>
          <Link href="https://twitter.com/alisyedsadiq1">
            <a target="_blank">
              <Image
                priority
                src="/images/twitter.png"
                className={utilStyles.borderCircle}
                height={40}
                width={40}
                alt="twitter icon"
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC0w4anyPMuVYVaQUAJrH9Pg">
            <a target="_blank">
              <Image
                priority
                src="/images/youtube.png"
                className={utilStyles.borderCircle}
                height={40}
                width={40}
                alt="youtube icon"
              />
            </a>
          </Link>
          <Link href="https://github.com/syedsadiqali">
            <a target="_blank">
              <Image
                priority
                src="/images/github.png"
                className={utilStyles.borderCircle}
                height={40}
                width={40}
                alt="github icon"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/syed-sadiq-ali/">
            <a target="_blank">
              <Image
                priority
                src="/images/linkedin.png"
                className={utilStyles.borderCircle}
                height={40}
                width={40}
                alt="linkedin icon"
              />
            </a>
          </Link>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(
            ({ slug, date, title, draft }) =>
              !draft && (
                <li className={utilStyles.listItem} key={slug}>
                  <Link href={`/blog/${slug}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
