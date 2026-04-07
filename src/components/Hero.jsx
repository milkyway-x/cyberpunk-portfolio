import { useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';
import './Hero.css';

// Static particle data (outside component to avoid re-computation)
const PARTICLES = [
  { id: 0,  size: 3, x: 12,  y: 18,  dur: 14, delay: 0   },
  { id: 1,  size: 2, x: 28,  y: 72,  dur: 18, delay: 2   },
  { id: 2,  size: 4, x: 45,  y: 35,  dur: 12, delay: 1   },
  { id: 3,  size: 2, x: 62,  y: 55,  dur: 16, delay: 3.5 },
  { id: 4,  size: 3, x: 78,  y: 20,  dur: 20, delay: 1.5 },
  { id: 5,  size: 2, x: 88,  y: 68,  dur: 15, delay: 0.5 },
  { id: 6,  size: 3, x: 35,  y: 85,  dur: 17, delay: 4   },
  { id: 7,  size: 2, x: 55,  y: 12,  dur: 13, delay: 2.5 },
  { id: 8,  size: 4, x: 70,  y: 40,  dur: 19, delay: 0.8 },
  { id: 9,  size: 2, x: 92,  y: 30,  dur: 11, delay: 3   },
];

// Magnetic button wrapper
function MagneticBtn({ children, className, onClick }) {
  const ref = useRef(null);
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const sx = useSpring(bx, { stiffness: 220, damping: 18 });
  const sy = useSpring(by, { stiffness: 220, damping: 18 });

  const onMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    bx.set((e.clientX - (rect.left + rect.width  / 2)) * 0.3);
    by.set((e.clientY - (rect.top  + rect.height / 2)) * 0.3);
  }, [bx, by]);

  const onLeave = useCallback(() => { bx.set(0); by.set(0); }, [bx, by]);

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

function Hero() {
  const heroRef = useRef(null);

  // Mouse tracking for blob parallax
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const mx   = useSpring(rawX, { stiffness: 35, damping: 20 });
  const my   = useSpring(rawY, { stiffness: 35, damping: 20 });

  // Dot-grid reveal cursor position (CSS var approach)
  const dotGridRef = useRef(null);

  // Blob offsets (blob1 follows, blob2 opposes)
  const blob1X = useTransform(mx, [0, 1], [-55, 55]);
  const blob1Y = useTransform(my, [0, 1], [-45, 45]);
  const blob2X = useTransform(mx, [0, 1], [45, -45]);
  const blob2Y = useTransform(my, [0, 1], [35, -35]);

  // Scroll-based hero parallax
  const { scrollY } = useScroll();
  const contentY       = useTransform(scrollY, [0, 500], [0, -80]);
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top)  / rect.height);

    // Dot-grid CSS vars
    if (dotGridRef.current) {
      const px = ((e.clientX - rect.left) / rect.width)  * 100;
      const py = ((e.clientY - rect.top)  / rect.height) * 100;
      dotGridRef.current.style.setProperty('--gx', `${px}%`);
      dotGridRef.current.style.setProperty('--gy', `${py}%`);
    }
  }, [rawX, rawY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* ── Animated background blobs ── */}
      <div className="hero__bg" aria-hidden="true">
        <motion.div className="hero__blob hero__blob--1" style={{ x: blob1X, y: blob1Y }} />
        <motion.div className="hero__blob hero__blob--2" style={{ x: blob2X, y: blob2Y }} />
      </div>

      {/* ── Dot-grid that reveals on mouse ── */}
      <div className="hero__dot-grid" ref={dotGridRef} aria-hidden="true" />

      {/* ── Floating particles ── */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="hero__particle"
            style={{
              width:  p.size,
              height: p.size,
              left:  `${p.x}%`,
              top:   `${p.y}%`,
              animationDuration: `${p.dur}s`,
              animationDelay:    `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content with scroll parallax ── */}
      <motion.div
        className="hero__content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hero__badge">Available for opportunities</span>
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
        >
          Ronand D. Almazar
        </motion.h1>

        <motion.h2
          className="hero__role"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
        >
          Full-stack developer specializing in cloud architecture,
          security operations, and data-driven solutions.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.65 }}
        >
          <MagneticBtn className="btn btn--primary" onClick={() => scrollTo('projects')}>
            View Projects
          </MagneticBtn>
          <MagneticBtn className="btn btn--secondary" onClick={() => scrollTo('contact')}>
            Contact Me
          </MagneticBtn>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 1.1 }}
          onClick={() => scrollTo('about')}
          role="button"
          tabIndex={0}
        >
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
