import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import RSS from 'rss';
import matter from 'gray-matter';

async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "alisyed") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
					dateAdded
                }
            }
        }
    }
`;

async function generate() {
  const feed = new RSS({
    title: 'Syed Sadiq ali',
    site_url: 'https://syed.vercel.app',
    feed_url: 'https://syed.vercel.app/feed.xml'
  });

  const posts = gql(GET_USER_ARTICLES, { page: 0 })
    .then((result) => {
      return { props: { posts: result.data.user.publication.posts } };
    })
    .catch((err) => console.log(err));

  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'blog', name));
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: 'https://syedsadiqali.com/blog/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.date,
      description: frontmatter.data.description
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
