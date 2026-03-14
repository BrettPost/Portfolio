import { createFileRoute } from '@tanstack/react-router'
//import { useEffect, useRef } from 'react'

/**
 * Set your X (Twitter) username here to show your timeline on the Updates page.
 * The timeline is loaded via Twitter's official embed script.
 */
const TWITTER_USERNAME = 'Brett_wPost'
// const height = 600;
// const theme = "light";

export const Route = createFileRoute('/updates')({
  component: UpdatesPage,
  head: () => ({ meta: [{ title: 'Updates — Brett Post' }] }),
})

// declare global {
//   interface Window {
//     twttr?: any;
//   }
// }

function UpdatesPage() {
  //const containerRef = useRef<HTMLDivElement>(null)
  //const scriptLoadedRef = useRef(false)

  

  // useEffect(() => {
  //   let cancelled = false;

  //   const render = async () => {
  //     if (!containerRef.current) return;

  //     // Clear previous render (important if username changes)
  //     containerRef.current.innerHTML = "";

  //     // Ensure script is loaded
  //     const existing = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
  //     if (!existing) {
  //       await new Promise<void>((resolve, reject) => {
  //         const s = document.createElement("script");
  //         s.src = "https://platform.twitter.com/widgets.js";
  //         s.async = true;
  //         s.onload = () => resolve();
  //         s.onerror = () => reject(new Error("Failed to load Twitter widgets.js"));
  //         document.body.appendChild(s);
  //       });
  //     }

  //     if (cancelled) return;

  //     // Create embed
  //     const a = document.createElement("a");
  //     a.setAttribute("class", "twitter-timeline");
  //     a.setAttribute("href", `https://twitter.com/${TWITTER_USERNAME}`);
  //     a.setAttribute("data-height", String(height));
  //     a.setAttribute("data-theme", theme);

  //     containerRef.current.appendChild(a);

  //     // Ask widgets.js to parse + render
  //     if (window.twttr?.widgets?.load) {
  //       window.twttr.widgets.load(containerRef.current);
  //     }
  //   };

  //   render();

  //   return () => {
  //     cancelled = true;
  //   };
  // }, [TWITTER_USERNAME, height, theme]);

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
              href={`https://x.com/${TWITTER_USERNAME}`}
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
        <hr/>
        <main>
          <br/>
          <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
            I will eventually add my full feed of posts here.
          </p>
        </main>

        {/* <div
          ref={containerRef}
          className="flex justify-center"
          aria-label={`X (Twitter) timeline for @${TWITTER_USERNAME}`}
        >
          <a
            className="twitter-timeline"
            data-dnt="true"
            data-theme="dark"
            data-chrome="noheader nofooter noborders"
            href={`https://x.com/${TWITTER_USERNAME}`}
          >
            Tweets by @{TWITTER_USERNAME}
          </a>
        </div> */}

      </div>
    </div>
  )
}
