import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import RSS from 'rss';
import matter from 'gray-matter';

async function generate() {
  const feed = new RSS({
    title: 'Syed Sadiq ali',
    site_url: 'https://syed.vercel.app',
    feed_url: 'https://syed.vercel.app/feed.xml'
  });

  const posts = readdirSync(join(process.cwd(), 'data', 'blog'));
  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), 'data', 'blog', name));
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: 'https://syed.vercel.app/blog/' + name.replace(/\.mdx?/, ''),
      date: frontmatter.data.date,
      description: frontmatter.data.description
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
