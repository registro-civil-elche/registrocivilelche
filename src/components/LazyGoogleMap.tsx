import { useState, useEffect, useRef } from "react";

interface LazyGoogleMapProps {
  src: string;
  title: string;
  className?: string;
}

const LazyGoogleMap = ({ src, title, className = "" }: LazyGoogleMapProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`aspect-video w-full rounded-lg overflow-hidden bg-muted ${className}`}>
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          onLoad={() => setHasLoaded(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground">
            <div className="animate-pulse">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-muted-foreground/20" />
              <p className="text-sm">Cargando mapa...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyGoogleMap;
