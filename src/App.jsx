import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
import { MotionConfig, motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig } from './data/siteConfig.js';
import { Header } from './components/Header.jsx';
import { DirectionsSection } from './components/DirectionsSection.jsx';
import { PriceSection } from './components/PriceSection.jsx';
import { StudioSection } from './components/StudioSection.jsx';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE_OUT = [0.23, 1, 0.32, 1];

export default function App() {
  const rootRef = useRef(null);
  const { brand, hero, rating, ctaSection } = siteConfig;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('[data-scroll-progress]', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });

        gsap.to('[data-hero-media]', {
          yPercent: 14,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-hero-section]',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.utils.toArray('[data-parallax-img]').forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: img.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <MotionConfig reducedMotion="user">
      <div ref={rootRef} id="top" className="min-h-screen bg-obsidian text-steel">
        <Header />

        <main>
          <section
            data-hero-section
            className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                data-hero-media
                className="h-full w-full object-cover object-center opacity-70 will-change-transform"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/45 to-obsidian"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/35 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
              <motion.p
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.26, ease: EASE_OUT }}
                className="text-xs font-medium uppercase tracking-[0.26em] text-copper"
              >
                {hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.05, ease: EASE_OUT }}
                className="mt-4 max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
              >
                {hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.1, ease: EASE_OUT }}
                className="mt-6 max-w-xl text-base leading-relaxed text-steel/90 sm:text-lg"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.14, ease: EASE_OUT }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href={brand.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-sm px-7 py-4 text-xs uppercase tracking-[0.14em]"
                >
                  <span>{hero.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#services"
                  className="btn-ghost rounded-sm px-6 py-4 text-xs uppercase tracking-[0.14em]"
                >
                  <span>{hero.secondaryCtaLabel}</span>
                  <ArrowDown className="h-4 w-4 text-copper" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            <div className="relative z-10 border-t border-white/[0.08] bg-obsidian/70 backdrop-blur-sm">
              <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.08] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
                <div className="py-4 sm:pr-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    Адрес в Казани
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {brand.address}
                  </p>
                </div>
                <div className="py-4 sm:px-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    График работы
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {brand.hours}
                  </p>
                </div>
                <div className="py-4 sm:pl-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    {rating.platform}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {rating.score} · {rating.details}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <DirectionsSection />
          <PriceSection />
          <StudioSection />
        </main>

        <footer
          id="contacts"
          className="relative border-t border-white/[0.08] bg-obsidian py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className="grid items-end gap-10 border-b border-white/[0.08] pb-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
                  {ctaSection.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                  {ctaSection.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {ctaSection.text}
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href={brand.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full rounded-sm px-8 py-5 text-xs uppercase tracking-[0.14em] sm:w-auto"
                >
                  <span>{ctaSection.buttonLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center">
              <span>
                {brand.name} ({brand.latinName}) · {brand.city}, {brand.address}
              </span>
              <span>{brand.hours}</span>
              <a
                href={brand.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-steel"
              >
                Telegram {brand.telegramHandle}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
