import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  partners: defineCollection({
    loader: file("src/partners.json"),
    schema: z.object({
      name: z.string(),
      url: z.url(),
      image: z.string(),
      source: z.string().optional(),
    })
  })
};
