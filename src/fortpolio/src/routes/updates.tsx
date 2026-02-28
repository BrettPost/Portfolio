import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

/**
 * Set your X (Twitter) username here to show your timeline on the Updates page.
 * The timeline is loaded via Twitter's official embed script.
 */
const TWITTER_USERNAME = 'BrettPost'

export const Route = createFileRoute('/updates')({
  component: UpdatesPage,
  head: () => ({ meta: [{ title: 'Updates — Brett Post' }] }),
})

function UpdatesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return

    const loadScript = () => {
      const existing = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existing) {
        scriptLoadedRef.current = true
        if (typeof (window as unknown as { twttr?: { widgets?: { load?: () => void } } }).twttr?.widgets?.load === 'function') {
          ;(window as unknown as { twttr: { widgets: { load: () => void } } }).twttr.widgets.load()
        }
        return
      }

      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.charset = 'utf-8'
      script.async = true
      script.onload = () => {
        scriptLoadedRef.current = true
        if (typeof (window as unknown as { twttr?: { widgets?: { load?: () => void } } }).twttr?.widgets?.load === 'function') {
          ;(window as unknown as { twttr: { widgets: { load: () => void } } }).twttr.widgets.load()
        }
      }
      document.body.appendChild(script)
    }

    //loadScript()
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Updates
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            Latest posts from X (Twitter). Follow{' '}
            <a
              href={`https://twitter.com/${TWITTER_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] rounded"
              style={{ color: 'var(--color-accent)' }}
            >
              @{TWITTER_USERNAME}
            </a>{' '}
            for more.
          </p>
        </header>

        <div
          ref={containerRef}
          className="flex justify-center"
          aria-label={`X (Twitter) timeline for @${TWITTER_USERNAME}`}
        >
          <a
            className="twitter-timeline"
            data-dnt="true"
            data-theme="dark"
            data-chrome="noheader nofooter noborders"
            href={`https://twitter.com/${TWITTER_USERNAME}?ref_src=twsrc%5Etfw`}
          >
            Tweets by @{TWITTER_USERNAME}
          </a>
        </div>

        <p className="mt-6 text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
          Timeline content is provided by X. If it doesn’t load, check that the username is correct or that X embed is allowed in your browser.
        </p>
      </div>
    </div>
  )
}
