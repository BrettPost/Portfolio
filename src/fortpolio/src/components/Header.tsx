import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'
import { Home, FolderGit2, User, Newspaper, Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/projects', label: 'Projects', icon: FolderGit2 },
  { to: '/about', label: 'About', icon: User },
  { to: '/updates', label: 'Updates', icon: Newspaper },
] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const routerState = useRouterState()

  // Close menu on route change (e.g. after clicking a link)
  useEffect(() => {
    setIsOpen(false)
  }, [routerState.location.pathname])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <>
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 shadow-lg"
        style={{ backgroundColor: 'var(--color-primary)' }}
        role="banner"
      >
        <div className="flex items-center gap-3 flex-1">
          <button
            type="button"
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg transition-colors hover:bg-[var(--color-primary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] md:hidden"
            aria-expanded={isOpen}
            aria-controls="main-nav"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] rounded"
            style={{ color: 'var(--color-text)' }}
          >
            Brett Post
          </Link>
          <nav className="hidden md:flex items-center gap-1 ml-6" role="navigation" aria-label="Primary">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="px-3 py-2 rounded-lg transition-colors hover:bg-[var(--color-primary-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]"
                activeProps={{
                  className:
                    'px-3 py-2 rounded-lg bg-[var(--color-primary-light)] font-medium',
                  style: { color: 'var(--color-accent)' },
                }}
                style={{ color: 'var(--color-text)' }}
              >
                <span className="flex items-center gap-2">
                  <Icon size={18} aria-hidden />
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <aside
        id="main-nav"
        className={`fixed top-0 left-0 h-full w-72 flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
          <span className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg transition-colors hover:bg-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            aria-label="Close menu"
          >
            <X size={24} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto" role="navigation" aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors w-full text-left hover:bg-[var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset"
                  activeProps={{
                    className:
                      'flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left bg-[var(--color-primary)] font-medium',
                    style: { color: 'var(--color-accent)' },
                  }}
                  style={{
                    color: 'var(--color-text)',
                  }}
                >
                  <Icon size={20} aria-hidden />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay when menu is open - improves focus trap and click-outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          aria-hidden
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
