import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({ meta: [{ title: 'About — Brett Post' }] }),
})

function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            About Me
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Developer, problem-solver, and lifelong learner.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6">
          <section aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              Who I am
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              I’m Brett Post — a developer who enjoys building software that makes a difference. I care about clean
              code, accessible design, and user experience. When I’m not coding, I’m often exploring new frameworks
              (like TanStack Start), contributing to open source, or learning something new.
            </p>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              What I do
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              I work across the stack — from React and TypeScript on the front end to APIs and tooling on the back
              end. I’m comfortable with modern tooling (Vite, TanStack, Tailwind) and value type safety, testing, and
              maintainability. I also aim to build interfaces that work for everyone, including users who rely on
              assistive technologies.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              Get in touch
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You can follow my updates on the <Link to="/updates" className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded" style={{ color: 'var(--color-accent)' }}>Updates</Link> page (X/Twitter), or reach out via your preferred channel. I’m always open to interesting projects and conversations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
