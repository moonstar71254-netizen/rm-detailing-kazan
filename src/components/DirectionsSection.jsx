import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

const EASE_OUT = [0.23, 1, 0.32, 1];

export function DirectionsSection() {
  const { directions, brand } = siteConfig;

  return (
    <section
      id="directions"
      className="relative border-t border-white/[0.06] bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Направления работ
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-white sm:text-5xl">
              Три уровня ухода
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Работаем с лакокрасочным покрытием, защитными составами, салоном и акустическим комфортом автомобиля.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {directions.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="grid items-center gap-8 border-b border-white/[0.06] pb-16 last:border-b-0 last:pb-0 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={`relative overflow-hidden bg-elevated lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      data-parallax-img
                      className="h-[116%] w-full object-cover object-center will-change-transform"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 border border-white/[0.08]" />
                </div>

                <div
                  className={`flex flex-col justify-between lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <span className="font-display text-xs tracking-[0.2em] text-copper">
                        {item.index}
                      </span>
                      <span className="tabular-price text-xs font-medium uppercase tracking-[0.14em] text-steel">
                        {item.startingPrice}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href={brand.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost rounded-sm px-5 py-3 text-xs uppercase tracking-[0.14em]"
                    >
                      <span>Уточнить в Telegram</span>
                      <ArrowUpRight className="h-4 w-4 text-copper" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
