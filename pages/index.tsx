import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { GET_USER_ARTICLES, gql } from '../lib/graphql';
import Social from '../components/Social/Social';

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I’m a software engineer based in Delhi. I have been working with{' '}
          <strong>Javascript</strong>, <strong>TypeScript</strong>,
          <strong> ReactJS</strong>, <strong>ReduxJS</strong> and{' '}
          <strong> VueJS</strong> for past 5 Years. <br /> I have been part of
          amazing products like <strong>PoolMyRide</strong>,{' '}
          <strong>TravelClan</strong>, <strong>Routier</strong>,{' '}
          <strong>Applause</strong> and lately working as a{' '}
          <strong>Senior Engineer</strong> with <strong>Nagarro</strong>. <br /> I am learning
          DSA and Algorithms for the next part of my Career.
        </p>
      </section>

      <Social />

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Last Few Blog</h2>
        <ul className={utilStyles.list}>
          {posts?.map(({ bried, dateAdded, slug, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`https://blog.syedsadiqali.com/${slug}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={dateAdded} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return gql(GET_USER_ARTICLES, { page: 0 })
    .then((result) => {
      return { props: { posts: result.data.user.publication.posts } };
    })
    .catch((err) => console.log(err));
}
