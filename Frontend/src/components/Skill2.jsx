import React, { useState, useEffect } from 'react';
import '../css/skills2.css';
import { FaHtml5,FaCss3Alt ,FaJs } from "react-icons/fa6";
import { BsFiletypeJson } from "react-icons/bs";
import { SiJquery } from "react-icons/si";
import { FaSass } from "react-icons/fa6";



function Skill2() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   
    const toggleButton = document.querySelector('.toggle-button2');
    const socialIcons = document.querySelector('.social-icons2');
    const toggleIcon = document.querySelector('.toggle-icon2');
    const socialIconElements = document.querySelectorAll('.social-icon2');

    const handleMouseEnter = () => {
      setIsOpen(!isOpen);

      if (!isOpen) {
        toggleIcon.style.transform = 'rotate(360deg)';
        toggleIcon.style.color = 'var(--d)';
        toggleIcon.style.transition = "1.5s";
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
      <div className="toggle-container2">
        <div className="toggle-button2">
          <span className="toggle-icon2 span">Scripting</span>
        </div>
        <div className="social-icons2">
          <FaHtml5 className="social-icon2" />
          <FaCss3Alt className="social-icon2" />
          <FaJs className="social-icon2" />
          <BsFiletypeJson className="social-icon2" />
          <SiJquery className="social-icon2" />
          <FaSass className="social-icon2" />
          

        </div>
      </div> 

    </>
  )
}

export default Skill2;