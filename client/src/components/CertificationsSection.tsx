/**
 * Certifications Section Component
 * Scroll-hijacked carousel: wheel over the section advances badges
 * until the last item, then releases scroll back to the page.
 */

import { useEffect, useRef, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const certifications = [
  {
    image: '/images/rsa-id-plus-certified-associate.1.png',
    alt: 'RSA ID Plus Certified Associate',
    url: 'https://www.credly.com/badges/c7b7940a-588e-4e8d-b167-b034e9f267a8/public_url',
  },
  {
    image: '/images/rsa-id-plus-certified-administrator.png',
    alt: 'RSA ID Plus Certified Administrator',
    url: 'https://www.credly.com/badges/62bbb5e8-a675-4d37-86c6-6384bf330d29/public_url',
  },
  {
    image: '/images/rsa-securid-certified-administrator.png',
    alt: 'RSA SecurID Certified Administrator',
    url: 'https://www.credly.com/badges/8af7b259-1dfe-4c3e-850d-fe23a3883dc1/public_url',
  },
  {
    image: '/images/rsa-governance-lifecycle-certified-associate.png',
    alt: 'RSA Governance & Lifecycle Certified Associate',
    url: 'https://www.credly.com/badges/92a3dc28-e02c-455a-b848-87c24a1cd623/public_url',
  },
  {
    image: '/images/rsa-governance-lifecycle-certified-administrator.png',
    alt: 'RSA Governance & Lifecycle Certified Administrator',
    url: 'https://www.credly.com/badges/702e501d-7f5a-45e3-8294-923bac5449d9/public_url',
  },
  {
    image: '/images/rsa-governance-lifecycle-certified-implementer.1.png',
    alt: 'RSA Governance & Lifecycle Certified Implementer',
    url: 'https://www.credly.com/badges/ca48e012-aca2-484f-bb00-5151ae696681/public_url',
  },
  {
    image: '/images/sailpoint-identity-security-professional-credential.png',
    alt: 'SailPoint Identity Security Professional',
    url: 'https://www.credly.com/badges/9ff7c8e8-fb8c-4be8-8c02-8a40b67941dc/public_url',
  },
];

export function CertificationsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  // Scroll-hijack: accumulates wheel delta so scroll feels organic.
  // Only advances carousel after enough intent, then resets accumulator.
  useEffect(() => {
    if (!emblaApi) return;

    let accumulated = 0;
    let lastDirection = 0;
    let resetTimer: ReturnType<typeof setTimeout>;
    const THRESHOLD = 160;

    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCentered = rect.top <= viewportCenter && rect.bottom >= viewportCenter;

      if (!sectionCentered) return;

      const goingDown = e.deltaY > 0 && emblaApi.canScrollNext();
      const goingUp = e.deltaY < 0 && emblaApi.canScrollPrev();

      if (!goingDown && !goingUp) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      if (direction !== lastDirection) {
        accumulated = 0;
        lastDirection = direction;
      }

      accumulated += e.deltaY;

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { accumulated = 0; lastDirection = 0; }, 300);

      if (accumulated >= THRESHOLD) {
        accumulated = 0;
        emblaApi.scrollNext();
      } else if (accumulated <= -THRESHOLD) {
        accumulated = 0;
        emblaApi.scrollPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(resetTimer);
    };
  }, [emblaApi]);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative py-20 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-10"
        >
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-foreground">
              {t.certifications.title}
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-24">
              {/* w-0 spacer: snap 0 = spacer at left, first badge appears at gap-24 (96px) from left */}
              <div className="shrink-0 w-0" aria-hidden="true" />
              {certifications.map((cert, i) => (
                <div
                  key={cert.url}
                  className={cn('shrink-0 w-36 sm:w-40', i === certifications.length - 1 && 'mr-24')}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    title={cert.alt}
                  >
                    <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-opacity duration-300 group-hover:opacity-85"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Progress dots — skip snap 0 (the w-0 leading spacer) */}
          <div className="flex items-center gap-2">
            {scrollSnaps.slice(1).map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index + 1)}
                className={cn(
                  'h-1 rounded-full transition-all duration-300',
                  Math.max(0, selectedIndex - 1) === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-border hover:bg-muted-foreground'
                )}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
