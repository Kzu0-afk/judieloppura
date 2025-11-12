import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        transition: 'opacity 0.3s ease',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

