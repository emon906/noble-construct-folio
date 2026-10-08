import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { architectureImages as images } from '@/components/architecture-images';

export function AnimatedGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const forward = useTransform(scrollYProgress, [0, 1], [-95, 95]);
  const reverse = useTransform(scrollYProgress, [0, 1], [95, -95]);
  const columns = [[images.villa, images.interior, images.commercial], [images.tower, images.commercial, images.villa], [images.interior, images.villa, images.tower]];
  return <div ref={ref} className="architecture-gallery" aria-label="Curated architectural inspiration gallery">
    <div className="gallery-perspective">{columns.map((column, index) => <motion.div className="gallery-column" key={index} style={reduced ? undefined : { y: index === 1 ? reverse : forward }}>
      {column.map((src, imageIndex) => <img key={imageIndex} src={src} alt={['Contemporary architecture and refined spaces', 'Modern high-rise architecture', 'Luxury interior details'][index]} width={1024} height={1200} loading="lazy" />)}
    </motion.div>)}</div>
  </div>;
}