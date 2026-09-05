import React, { useState, useEffect } from 'react';
import FadeContent from '@/components/FadeContent.jsx';
import { IconArrowDown } from '@tabler/icons-react';

const Introduction = () => {
  const [arrowOpacity, setArrowOpacity] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrowOpacity(0);
        } else {
          setArrowOpacity(1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const target = document.getElementById('mywork');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section id="home" className="h-screen overflow-hidden" style={{ position: "relative" }}>
      <div className="absolute z-20 flex flex-col items-center justify-start pt-70 md:justify-center md:pt-0 w-full h-full gap-3">
        <h1 className="flex flex-col items-center gap-3 text-center">
          <span className="flex flex-row gap-2">
            <FadeContent delay={400}>
              <span className="text-4xl font-serif font-normal text-white">hello,</span>
            </FadeContent>
            <FadeContent delay={1200}>
              <span className="text-4xl font-serif font-normal text-white"> this is ahmed</span>
            </FadeContent>
          </span>

          <FadeContent delay={2200}>
            <span className="text-3xl md:text-4xl font-serif text-center font-normal text-white/90">
              software developer & ui/ux designer
            </span>
          </FadeContent>
        </h1>

        <FadeContent delay={3200}>
          <div style={{ opacity: arrowOpacity, transition: 'opacity 0.5s ease-in-out' }}>
            <IconArrowDown
              className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-85 text-white animate-bounce"
              size={25}
              aria-hidden="true"
            />
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Introduction;
