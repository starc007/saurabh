'use client'

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { damping: 40, stiffness: 450 });
    const cursorY = useSpring(0, { damping: 40, stiffness: 450 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'hover'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleHoverStart);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleHoverStart);
        };
    }, []);

    useEffect(() => {
        cursorX.set(mousePos.x);
        cursorY.set(mousePos.y);
    }, [mousePos, cursorX, cursorY]);

    return (
        <motion.div
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference shadow-[0_0_10px_#a3e635]"
            animate={{
                scale: isHovering ? 4 : 1,
                opacity: isHovering ? 0.3 : 1
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        />
    );
};

export default Cursor;
