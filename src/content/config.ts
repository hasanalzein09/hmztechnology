import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('HMZ Technology Team'),
        category: z.enum(['automation', 'ai', 'chatbots', 'business', 'case-study', 'guide']),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        image: z.string().optional(),
    }),
});

const comparisons = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        productA: z.string(),
        productB: z.string(),
        winner: z.enum(['A', 'B', 'tie']),
        category: z.string(),
        featured: z.boolean().default(false),
    }),
});

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        client: z.string(),
        industry: z.string(),
        challenge: z.string(),
        solution: z.string(),
        results: z.array(z.string()),
        roi: z.string(),
        featured: z.boolean().default(false),
        image: z.string().optional(),
    }),
});

export const collections = { blog, comparisons, 'case-studies': caseStudies };
