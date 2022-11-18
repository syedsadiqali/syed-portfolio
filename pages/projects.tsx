import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <h2>Resizer Backend</h2>
        <p> resider backend is a project</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
