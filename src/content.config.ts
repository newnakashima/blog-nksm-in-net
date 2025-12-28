import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	loader: glob({ base: "./src/content/diary/posts", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		eyecatch: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };


