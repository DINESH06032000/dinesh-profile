import React, { useState, useEffect } from 'react';
import '../css/skills3.css';
import { FaBootstrap } from "react-icons/fa6";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
function Skill3() {


  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.toggle-button3');
    const socialIcons = document.querySelector('.social-icons3');
    const toggleIcon = document.querySelector('.toggle-icon3');
    const socialIconElements = document.querySelectorAll('.social-icon3');

    const handleMouseEnter = () => {
      setIsOpen(!isOpen);

      if (!isOpen) {
        toggleIcon.style.transform = 'rotate(360deg)';
        toggleIcon.style.transition = "1.5s";
        toggleIcon.style.color = 'var(--d)';
        socialIcons.style.display = 'block';

        const numIcons = socialIconElements.length;
        const radius = window.innerWidth < 425 ? 60 : 100;

        socialIconElements.forEach((icon, index) => {
          const angle = (index / numIcons) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          setTimeout(() => {
            icon.style.transform = `translate(${x}px, ${y}px)`;
            icon.style.opacity = '1';
          }, index * 100);
        });
      } else {
        toggleIcon.style.transform = 'rotate(0deg)';
        toggleIcon.style.color = 'var(--a)';


        socialIconElements.forEach((icon) => {
          icon.style.transform = `translate(0, 0)`;
          icon.style.opacity = '0';
        });

        setTimeout(() => {
          socialIcons.style.display = 'none';
        }, 300);
      }
    };

    toggleButton.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      toggleButton.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isOpen]);
  return (
    <>
      <div className="toggle-container3">
        <div className="toggle-button3">
          <span className="toggle-icon3 span">Frameworks</span>
        </div>
        <div className="social-icons3">
          <FaBootstrap className="social-icon3" />
          <BiLogoSpringBoot className="social-icon3" />
          <FaReact className="social-icon3" />
          <FaNodeJs className="social-icon3" />
          <SiExpress className="social-icon3" />

        </div>
      </div>

    </>
  )
}

export default Skill3