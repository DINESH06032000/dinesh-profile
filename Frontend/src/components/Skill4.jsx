import React, { useState, useEffect } from 'react';
import '../css/skills4.css';
import { VscVscode } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";
import { FaGithub,FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop,SiAdobeillustrator } from "react-icons/si";


function Skill4() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-button4');
        const socialIcons = document.querySelector('.social-icons4');
        const toggleIcon = document.querySelector('.toggle-icon4');
        const socialIconElements = document.querySelectorAll('.social-icon4');

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
            <div className="toggle-container4">
                <div className="toggle-button4">
                    <span className="toggle-icon4 span">Software's</span>
                </div>
                <div className="social-icons4">
                    < VscVscode className="social-icon4" />
                    < SiEclipseide className="social-icon4" />
                    < FaGithub className="social-icon4" />
                    < FaGitAlt className="social-icon4" />
                    < FaFigma className="social-icon4" />
                    < SiAdobephotoshop className="social-icon4" />
                    < SiAdobeillustrator className="social-icon4" />


                </div>
            </div>

        </>
    )
}

export default Skill4