/**
 * Portfolio projects. Edit this file to add or update your projects.
 */
export interface Project {
  id: string
  title: string
  description: string
  siteUrl?: string
  repoUrl?: string
  tags?: string[]
  note?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'This portfolio site — built with TanStack Start, React, and Tailwind. A static site showcasing projects and updates with an accessible, modern design.',
    tags: ['React', 'TanStack Start', 'TypeScript', 'Tailwind'],
    siteUrl: '/',
    repoUrl: 'https://github.com/BrettPost/Portfolio',
  },
  {
    id: 'student-run',
    title: 'StudentRun',
    description:
      'A running application for schools to use for students during recess. Created with a .NET backend and a React frontend.',
    tags: ['TypeScript', 'Cursor'],
    note: "In Progress - Repo is private",
  },
  {
    id: 'envoy-hackathon',
    title: 'Envoy Hackathon',
    description:
      'A hackathon project for Envoy. This app was a trivia application used for company TVs and other devices.',
    tags: ['C#', '.NET', 'React', 'PostgreSQL'],
    siteUrl: 'https://trivia.brettpost.com',
    repoUrl: 'https://github.com/BrettPost/hack-night-2025',
  },
  {
    id: 'lucky-shrub-garden',
    title: 'Lucky Shrub Garden',
    description:
      'A mock restaurant website. It was built for a capstone project completing the final step of the Meta Frontend Developer Professional Certificate.',
    tags: ['React', 'CSS', 'HTML'],
    siteUrl: 'https://little-lemon.brettpost.com/',
    repoUrl: 'https://github.com/BrettPost/MetaFrontEndCourse/tree/main/src/LuckyShrubGarden',
  },
]
