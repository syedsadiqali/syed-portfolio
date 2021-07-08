import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>this page is under development</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
