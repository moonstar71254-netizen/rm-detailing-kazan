import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

export function Header() {
  const { brand, navigation } = siteConfig;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-obsidian/80 backdrop-blur-md">
      <div
        data-scroll-progress
        className="h-[2px] w-full origin-left scale-x-0 bg-copper"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2.5 text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-copper"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] sm:text-base">
            {brand.latinName}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.14em] text-muted sm:inline">
            {brand.city}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-xs font-medium uppercase tracking-[0.14em] text-steel"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-sm px-4 py-2 text-xs uppercase tracking-[0.1em]"
        >
          <span>Telegram</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
