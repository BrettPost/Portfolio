/**
 * Portfolio projects. Edit this file to add or update your projects.
 */
export interface Project {
  id: string
  title: string
  description: string
  siteUrl: string
  repoUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'This portfolio site — built with TanStack Start, React, and Tailwind. A static site showcasing projects and updates with an accessible, modern design.',
    siteUrl: '/',
    repoUrl: 'https://github.com/BrettPost/Portfolio',
    tags: ['React', 'TanStack Start', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'student-run',
    title: 'StudentRun',
    description:
      'A command-line utility for automating repetitive tasks. Fast, scriptable, and well-documented for team use.',
    siteUrl: 'https://github.com',
    repoUrl: 'https://github.com/BrettPost/student-run',
    tags: ['C#', '.NET', 'React'],
  },
  {
    id: 'lucky-shrub-garden',
    title: 'Lucky Shrub Garden',
    description:
      'A sample full-stack application demonstrating authentication, CRUD operations, and responsive UI. Built to learn modern web patterns.',
    siteUrl: 'https://example.com',
    repoUrl: 'https://github.com/BrettPost/MetaFrontEndCourse/tree/main/src/LuckyShrubGarden',
    tags: ['React', 'CSS'],
  },
]
