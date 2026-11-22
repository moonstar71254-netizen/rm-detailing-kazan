import { motion } from 'motion/react';
import { Clock, MapPin, Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

const EASE_OUT = [0.23, 1, 0.32, 1];

export function StudioSection() {
  const { studioFeatures, rating, brand } = siteConfig;

  return (
    <section
      id="studio"
      className="surface-grain relative border-t border-white/[0.06] bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.28, ease: EASE_OUT }}
          className="flex flex-col justify-between lg:col-span-5"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
              Стандарт работы
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Студия без спешки
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              {brand.name} ({brand.latinName}) — детейлинг-центр в Казани с понятными условиями, фиксацией этапов и спокойным ожиданием.
            </p>
          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-semibold text-white">
                {rating.score}
              </span>
              <Star className="h-5 w-5 fill-copper text-copper" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-steel">
              {rating.platform}
            </p>
            <p className="mt-1 text-sm text-muted">{rating.details}</p>

            <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6 text-sm text-steel">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span>
                  {brand.city}, {brand.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                <span>{brand.hours}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={feature.code}
                initial={{ opacity: 0, scale: 0.95, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.26,
                  delay: index * 0.05,
                  ease: EASE_OUT,
                }}
                className="grid gap-4 py-8 sm:grid-cols-12 sm:py-10"
              >
                <span className="font-display text-xs tracking-[0.2em] text-copper sm:col-span-2">
                  {feature.code}
                </span>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-lg font-medium text-white sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
