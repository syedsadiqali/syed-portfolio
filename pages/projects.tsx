import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Project } from '../components/Project/Project';
import utilStyles from '../styles/utils.module.css';

export default function Projects() {
  const projectsData: { name: string; description: string; link: string }[] = [
    {
      name: 'SpaceX App',
      description:
        'An App that I made from public spaceX Api to show their launches',
      link: 'https://spacex-app1.vercel.app/'
    },
    {
      name: 'Pomodoro Clock',
      description: 'An App I built at very start of my Career',
      link: 'https://pomodoro3.vercel.app/'
    },
    {
      name: 'Simpl Clone',
      description:
        'this is something i did in an interview, creating a design for simpl app',
      link: 'https://simpl-clone.vercel.app/'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className="grid grid-cols-2 gap-4">
          {projectsData?.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
