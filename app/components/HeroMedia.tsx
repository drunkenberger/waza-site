import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface HeroMediaProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function HeroMedia({ src, width, height, alt, className }: HeroMediaProps) {
  const isVideo = src.endsWith('.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, [isVideo]);

  if (isVideo) {
    return (
      <div className="w-full h-full relative group">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls
          className={`${className} w-full h-full opacity-100 group-hover:opacity-90 transition-opacity duration-200`}
          style={{
            objectFit: 'cover',
          }}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Image
        src={src}
        fill
        alt={alt}
        className={`${className} object-cover`}
      />
    </div>
  );
} 