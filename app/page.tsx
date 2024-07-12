import { BlogPosts } from 'app/components/posts';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Point = { x: number; y: number };

export default function Page() {
  const [points, setPoints] = useState<Point[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 텍스트를 점으로 변환
    const textPoints: Point[] = [
      { x: 100, y: 100 },
      { x: 120, y: 100 },
      // 추가 점들
    ];
    setPoints(textPoints);

    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
      <div className="relative h-96 w-full bg-gray-900">
        <svg width="800" height="600">
          {points.map((point, index) => {
            const distance = Math.hypot(point.x - mousePosition.x, point.y - mousePosition.y);
            const isClose = distance < 50;

            return (
              <motion.circle
                key={index}
                cx={point.x}
                cy={point.y}
                r={isClose ? 8 : 5}
                fill="white"
                animate={{
                  x: isClose ? point.x + (point.x - mousePosition.x) * 0.1 : point.x,
                  y: isClose ? point.y + (point.y - mousePosition.y) * 0.1 : point.y,
                }}
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
}
