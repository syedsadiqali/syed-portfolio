import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import {getFileBySlug, getFiles} from '../lib/mdx';
import Layout from '../components/layout';
import Head from 'next/dist/shared/lib/head';
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date';

export default function Post({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name='og:title' title={frontMatter.title} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{frontMatter.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={frontMatter.date} />
        </div>
        <Component/>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { ...post } };
}

