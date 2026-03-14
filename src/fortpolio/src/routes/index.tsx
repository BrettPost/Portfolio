import { createFileRoute, Link } from '@tanstack/react-router'
import { FolderGit2, User } from 'lucide-react'
import mountainImage from '../assets/ViewAndMountains.JPG'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero */}
      <section
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, var(--color-accent) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            <span style={{ color: 'var(--color-accent)' }}>"Brett Post"</span>: "Software Engineer";
          </h1>
          <p
            className="text-xl md:text-2xl mb-6 font-light"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Developer & builder of cool things
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-muted)' }}>
            Welcome to my portfolio. Explore my projects, learn more about me, and stay updated with my latest work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-primary)]"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
              }}
            >
              <FolderGit2 size={20} aria-hidden />
              View Projects
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-primary)]"
              style={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
              }}
            >
              <User size={20} aria-hidden />
              About Me
            </Link>
          </div>
        </div>
      </section>
      <figure className="m-0 flex justify-center px-6 py-10 sm:py-12">
        <img
          src={mountainImage}
          alt="Brett backpacking on a grassy cliff with mountains in the background (Yosemite)"
          className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] rounded-2xl border-2 object-cover shadow-xl"
          style={{ borderColor: 'var(--color-border)' }}
          width={420}
          height={420}
          loading="lazy"
        />
      </figure>
    </div>
  )
}
