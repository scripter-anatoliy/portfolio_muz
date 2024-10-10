import React, { useState, useEffect } from 'react';
import classes from '../StyledComponents/scrollToTopButton.module.css'

export const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 0);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${classes.scrollToTopButton} ${isVisible ? classes.visible : ''}`} onClick={scrollToTop}>
            ↑
        </div>
    );
};
