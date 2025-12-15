import FadeContent from '@/components/FadeContent.jsx';
import { IconArrowDown } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react'

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
        threshold: 0.1, // Trigger when 10% of the target is visible
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
    <div id="home" className="h-screen overflow-hidden" style={{ position: "relative" }}>
      <div className="absolute z-20 flex flex-col items-center justify-start pt-70 md:justify-center md:pt-0 w-full h-full gap-3">
        <div className="flex flex-row gap-2">
          <FadeContent delay={400}>
            <p className="text-4xl font-serif font-regular text-white">hello,</p>
          </FadeContent>
          <FadeContent delay={1200}>
            <p className="text-4xl font-serif font-regular text-white"> this is ahmed</p>
          </FadeContent>
        </div>

        <FadeContent delay={2200}>
          <p className="text-4xl font-serif text-center font-regular text-white">software developer & ui/ux designer</p>
        </FadeContent>
        <FadeContent delay={3200}>
          <div style={{ opacity: arrowOpacity, transition: 'opacity 0.5s ease-in-out' }}>
            <IconArrowDown className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-85" size={25} />
          </div>
        </FadeContent>
      </div >
    </div >
  )
}

export default Introduction
