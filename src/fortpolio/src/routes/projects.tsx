import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '@/data/projects'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
  head: () => ({ meta: [{ title: 'Projects — Brett Post' }] }),
})

function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Projects
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Take a gander at some of my projects
          </p>
        </header>

        <ul className="space-y-8" role="list">
          {projects.map((project: Project) => (
            <li key={project.id}>
              <article
                className="p-6 rounded-xl border transition-all hover:border-[var(--color-accent)] focus-within:ring-2 focus-within:ring-[var(--color-accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-surface)]"
                style={{
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                  {project.title}
                </h2>
                <p className="mb-4" style={{ color: 'var(--color-text-muted)' }}>
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-4" role="list">
                    {project.tags.map((tag: string) => (
                      <li key={tag}>
                        <span
                          className="px-2 py-1 text-xs font-medium rounded"
                          style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'var(--color-accent)',
                          }}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-3">
                  {project.siteUrl && (
                    <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-elevated)] rounded"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <ExternalLink size={16} aria-hidden />
                    Visit site
                  </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-elevated)] rounded"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      <Github size={16} aria-hidden />
                      Repository
                    </a>
                  )}
                  {project.note && (
                    <p className='text-sm' style={{ color: 'var(--color-text-muted)' }}>{project.note}</p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
