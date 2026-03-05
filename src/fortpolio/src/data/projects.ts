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
      'A running application for schools to use for students during recess. Created with a .NET backend and a React frontend.',
    siteUrl: 'https://github.com',
    tags: ['C#', '.NET', 'React', 'PostgreSQL'],
  },
  {
    id: 'lucky-shrub-garden',
    title: 'Lucky Shrub Garden',
    description:
      'A mock restaurant website. It was built for a capstone project completing the final step of the Meta Frontend Developer Professional Certificate.',
    siteUrl: 'https://garden.BrettPost.com',
    repoUrl: 'https://github.com/BrettPost/MetaFrontEndCourse/tree/main/src/LuckyShrubGarden',
    tags: ['React', 'CSS', 'HTML'],
  },
]
