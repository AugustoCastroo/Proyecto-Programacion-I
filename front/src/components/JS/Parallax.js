import React, { useEffect } from 'react';
import '../CSS/Parallax.css';

const Parallax = () => {
  useEffect(() => {
    const parallax = () => {
      const container = document.querySelector('.parallax-container');
      const background = document.querySelector('.parallax-background');

      container.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 10) / 100;
        const y = (window.innerHeight - e.pageY * 10) / 100;

        background.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    parallax();
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="parallax-content">
      </div>
    </div>
  );
};

export default Parallax;

