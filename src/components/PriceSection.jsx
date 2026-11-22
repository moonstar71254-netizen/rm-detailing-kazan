import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

const EASE_OUT = [0.23, 1, 0.32, 1];

export function PriceSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { serviceCategories, services, brand } = siteConfig;

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section
      id="services"
      className="relative min-h-screen border-t border-white/[0.06] bg-obsidian py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Прозрачная стоимость
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-white sm:text-5xl">
              Прайс-лист
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Фильтр услуг по категориям"
          >
            {serviceCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  data-active={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`tab-btn rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] ${
                    isActive
                      ? 'border-copper bg-copper/15 text-white'
                      : 'border-white/[0.1] bg-elevated/60 text-muted'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.1]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
            >
              {filteredServices.map((service, index) => (
                <a
                  key={service.id}
                  href={brand.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="price-row group grid grid-cols-12 items-center gap-3 border-b border-white/[0.07] py-5 sm:py-6"
                >
                  <span className="col-span-2 font-display text-xs tracking-[0.18em] text-muted sm:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="col-span-10 text-base font-medium text-white sm:col-span-6 sm:text-lg">
                    {service.name}
                  </span>

                  <span className="col-span-5 col-start-3 text-xs uppercase tracking-[0.14em] text-muted sm:col-span-2 sm:col-start-auto">
                    {service.categoryLabel}
                  </span>

                  <span className="tabular-price col-span-5 text-right font-display text-sm font-medium text-steel sm:col-span-2 sm:text-base">
                    {service.price}
                  </span>

                  <span className="hidden justify-end sm:col-span-1 sm:flex">
                    <ArrowUpRight
                      className="price-row-arrow h-4 w-4 text-copper"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border border-white/[0.08] bg-surface/80 p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Точный состав работ подбираем после осмотра или по фото в Telegram. Нажмите на любую услугу выше или напишите напрямую.
          </p>
          <a
            href={brand.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 rounded-sm px-6 py-3.5 text-xs uppercase tracking-[0.12em]"
          >
            <span>Записаться в Telegram</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
