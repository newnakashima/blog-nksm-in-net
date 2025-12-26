import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const posts = await getCollection("blog");
	const items = posts.map((post) => {
		const filename = post.id.split('/').pop() || '';
		const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
		const pubDate = post.data.pubDate || (dateMatch ? new Date(dateMatch[1]) : new Date());
		const title = post.data.title || filename.replace(/^\d{4}-\d{2}-\d{2}\s*/, '').replace(/\.md$/, '') || filename;
		
		return {
			...post.data,
			title,
			pubDate,
			link: `/blog/${post.id}/`,
		};
	});

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});

}
