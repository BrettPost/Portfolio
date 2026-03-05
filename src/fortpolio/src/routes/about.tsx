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
        </header>

        <div className="prose prose-invert max-w-none space-y-6">
        <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              What I do
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              I work as a full stack developer. From C# and SQL on the backend to React and Tailwind on the frontend. I also
              put time into configuring enviornments on-prem or in the cloud on Azure. I have worked on projects involving
              API development, Framework upgrades, Authentication provider replacements, performance improvements to rendering images,
              and many more across tech stacks.  
            </p>
          </section>

          <section aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              My Story
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Growing up in a smaller town limited the technology classes available to me, but the internet opened the doors 
              for me to pick up the basics of coding on my own. Between sports, school, and music, I would spend my time online 
              finding tutorials for different programming languages. I found a lot of satisfaction in completing 100% of the courses. 
              This was a great start to my career, but it was difficult for me to comprehend some of the more specific topics like frameworks, 
              environments, and coding principles. It wasn't until I began attending Michigan Technological University that I was able to dive into 
              these areas.
            </p>
            <br/>
            <p style={{ color: 'var(--color-text-muted)' }}>
              During my time in college, I was able to hone my skills in development through my classes, organizations and internships. I 
              began working on several projects where I could use the languages I had a basic understanding of. I often used Java and C 
              for development in my classes, along with having specific courses dive into Algorithms, AI Development, and Concurrent 
              Programing. In my enterprise organization, I learned to utilize front-end languages like HTML, CSS, and JavaScript, while Python 
              was used for the back-end. In my internships, I gained a bulk of coding experience, picking up skills like REST Services, Git, 
              and C# along with Microsoft's .NET Framework.
            </p>
            <br/>
            <p style={{ color: 'var(--color-text-muted)' }}>
              After Graduating, my developed skills led me into the professional world where I continue to learn and improve upon my 
              ability while finally building real software.
            </p>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
              Get in touch
            </h2>
            <p style={{ color: 'var(--color-text-muted)' }}>
              You can follow my updates on the <Link to="/updates" className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded" style={{ color: 'var(--color-accent)' }}>Updates </Link> 
              page (X/Twitter), or reach out via any platform below. I’m always open to interesting projects and conversations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
