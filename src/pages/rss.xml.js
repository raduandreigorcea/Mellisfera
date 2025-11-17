import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { title as siteTitle } from '@/utils/title';
import { description as siteDescription } from '@/utils/meta';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: siteTitle || 'Blog',
    description: siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
