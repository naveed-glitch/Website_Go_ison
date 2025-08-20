// src/components/ParticleTextSection.tsx
import  { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  friction: number;
  isActive: boolean;
}

const ParticleTextSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text] = useState("GoisOn");
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const imageDataRef = useRef<ImageData | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const textWidth = ctx.measureText(text).width;
    const centerX = canvas.clientWidth / 2;
    const centerY = canvas.clientHeight / 2;

    const colors = ["#00FFFF", "#FF00FF", "#FFFF00", "#FFFFFF"];
    ctx.fillText(text, centerX, centerY);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageDataRef.current = imageData;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const newParticles: Particle[] = [];
    let particleId = 0;

    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * textWidth + (centerX - textWidth / 2);
      const y = centerY - 40 + Math.random() * 80;

      const pixelX = Math.floor(x * dpr);
      const pixelY = Math.floor(y * dpr);
      const index = (pixelY * canvas.width + pixelX) * 4;

      if (imageData.data[index + 3] > 0) {
        newParticles.push({
          id: particleId++,
          x,
          y,
          originX: x,
          originY: y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 1,
          vx: 0,
          vy: 0,
          friction: 0.85,
          isActive: false
        });
      }
    }

    setParticles(newParticles);
  }, [text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        if (!particle.isActive && !isHovered) {
          const dx = particle.originX - particle.x;
          const dy = particle.originY - particle.y;

          particle.vx += dx * 0.05;
          particle.vy += dy * 0.05;

          particle.vx *= particle.friction;
          particle.vy *= particle.friction;

          particle.x += particle.vx;
          particle.y += particle.vy;
        } else if (isHovered) {
          particle.vx += (Math.random() - 0.5) * 2;
          particle.vy += (Math.random() - 0.5) * 2;

          particle.vx *= particle.friction;
          particle.vy *= particle.friction;

          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, isHovered]);

  // ✅ Only set hover when mouse is over visible text pixels
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageDataRef.current) return;

    const dpr = window.devicePixelRatio || 1;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) * dpr);
      const y = Math.floor((e.clientY - rect.top) * dpr);
      const index = (y * canvas.width + x) * 4;

      const alpha = imageDataRef.current?.data[index + 3] ?? 0;
      setIsHovered(alpha > 0);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative h-screen bg-[#001f3f] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-300 text-sm">
        Hover **on the text** to see the particles disperse
      </div>
    </div>
  );
};

export default ParticleTextSection;
