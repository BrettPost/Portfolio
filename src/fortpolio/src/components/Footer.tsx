import { Mail, Linkedin, Github } from 'lucide-react'
import MmmBeer from '../assets/MmmBeer.png'

/** Update these to your actual contact URLs */
const contact = {
  email: 'mailto:post.brettw@gmail.com',
  linkedin: 'https://www.linkedin.com/in/brett-post',
  github: 'https://github.com/BrettPost',
} as const

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-[var(--color-border)]"
      style={{ backgroundColor: 'var(--color-primary-dark)' }}
      role="contentinfo"
      aria-label="Site footer and contact"
    >
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Contact links */}
          <nav
            className="flex flex-wrap items-center justify-center sm:justify-start gap-6"
            aria-label="Contact and social links"
          >
            <a
              href={contact.email}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors rounded-lg py-2 px-3 hover:bg-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary-dark)]"
              style={{ color: 'var(--color-text)' }}
              aria-label="Email Brett"
            >
              <Mail size={20} aria-hidden />
              <span>Email</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors rounded-lg py-2 px-3 hover:bg-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary-dark)]"
              style={{ color: 'var(--color-text)' }}
              aria-label="Brett on LinkedIn (opens in new tab)"
            >
              <Linkedin size={20} aria-hidden />
              <span>LinkedIn</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors rounded-lg py-2 px-3 hover:bg-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary-dark)]"
              style={{ color: 'var(--color-text)' }}
              aria-label="Brett on GitHub (opens in new tab)"
            >
              <Github size={20} aria-hidden />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={MmmBeer}
              alt="Brett holding a glass of beer with a beer mug logo on the glass, in a casual setting"
              className="h-18 w-18 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-[var(--color-border)]"
              width={180}
              height={180}
              loading="lazy"
            />
          </div>
        </div>
        <p
          className="mt-6 text-center text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          © {new Date().getFullYear()} Brett Post. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
