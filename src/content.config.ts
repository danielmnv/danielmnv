import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    id: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    technologies: z.array(z.string()),
    url: z.string(),
    roles: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        range: z.string(),
      })
    ),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
  }),
});

export const collections = {
  experience,
  projects,
};
