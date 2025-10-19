import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  speed?: number;
}

const ParallaxSection = ({ imageSrc, imageAlt, children, speed = 0.5 }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY + window.innerHeight - rect.top;
      const parallax = scrolled * speed;
      
      setOffset(parallax);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, speed]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-32">
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offset * -0.25}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[200%] object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
