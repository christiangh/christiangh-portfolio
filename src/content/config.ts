import { defineCollection, z } from "astro:content";

const mainSections = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    order: z.number(),
    image: z.string().url().optional(),
  }),
});

export const collections = { "main-sections": mainSections };
