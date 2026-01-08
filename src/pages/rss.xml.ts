import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {

  const post = await getCollection("blog");

  return rss({

    title: 'Paulinas Blog',

    description: 'A collection of posts exploring front-end development, web design, personal projects, and practical insights from building real digital products.',

    site: "https://www.google.com",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: post.map((post)=>(post.data)),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}