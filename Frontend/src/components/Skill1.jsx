
import React, { useState, useEffect } from 'react';
import '../css/skills1.css';
import { FaC, FaJava, FaPython } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";


function Skill1() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.toggle-button');
    const socialIcons = document.querySelector('.social-icons');
    const toggleIcon = document.querySelector('.toggle-icon');
    const socialIconElements = document.querySelectorAll('.social-icon');

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
      <div className="toggle-container">
        <div className="toggle-button">
          <span className="toggle-icon span">Programming</span>
        </div>
        <div className="social-icons">
          <FaC className='social-icon' />
          <FaJava className='social-icon' />
          <FaPython className='social-icon' />
          <TbSql className='social-icon' />

        </div>
      </div>
    </>
  )
}

export default Skill1