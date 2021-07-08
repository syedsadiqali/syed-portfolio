import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Syed Sadiq ali</strong>. I’m a software engineer
          based in Delhi.
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Social</h2>
        <div className={utilStyles.icons}>
          <Link href='https://twitter.com/alisyedsadiq1'>
            <a target='_blank'>
              <Image
                priority
                src='/images/twitter.png'
                className={utilStyles.borderCircle}
                height={40}
                width={40}
              />
            </a>
          </Link>
          <Link href='https://www.youtube.com/channel/UC0w4anyPMuVYVaQUAJrH9Pg'>
            <a target='_blank'>
              <Image
                priority
                src='/images/youtube.png'
                className={utilStyles.borderCircle}
                height={40}
                width={40}
              />
            </a>
          </Link>
          <Link href='https://github.com/syedsadiqali'>
            <a target='_blank'>
              <Image
                priority
                src='/images/github.png'
                className={utilStyles.borderCircle}
                height={40}
                width={40}
              />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/syed-sadiq-ali/'>
            <a target='_blank'>
              <Image
                priority
                src='/images/linkedin.png'
                className={utilStyles.borderCircle}
                height={40}
                width={40}
              />
            </a>
          </Link>
          
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
