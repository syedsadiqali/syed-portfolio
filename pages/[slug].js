import MDX from '@mdx-js/runtime'
import Layout from '../components/layout'
import { getPostBySlug, getPostSlugs } from '../lib/posts'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name='og:title' title={postData.title} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <MDX>{postData.content}</MDX>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'coverImageAlt',
    'coverImageHeight',
    'coverImageWidth',
    'draft',
  ])

  return {
    props: { postData },
  }
}

export async function getStaticPaths() {
  const posts = getPostSlugs()

  return {
    paths: posts.map((post) => {
      return {
        params: { slug: post.replace(/\.mdx$/, '') },
      }
    }),
    fallback: false,
  }
}
