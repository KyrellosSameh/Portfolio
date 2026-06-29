import { type FC, useEffect, useState } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: FC = () => {
 const [isHovering, setIsHovering] = useState(false);
 const [isTouchDevice] = useState(() => {
 if (typeof window !== 'undefined') {
 return window.matchMedia('(pointer: coarse)').matches;
 }
 return false;
 });
 const [isVisible, setIsVisible] = useState(false);

 const mouseX = useMotionValue(0);
 const mouseY = useMotionValue(0);

 // Smooth spring physics for the trailing outer ring
 const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
 const cursorXSpring = useSpring(mouseX, springConfig);
 const cursorYSpring = useSpring(mouseY, springConfig);

 useEffect(() => {
 if (isTouchDevice) {
 return;
 }

 document.documentElement.style.cursor = 'none';

 const handleMouseMove = (e: MouseEvent) => {
 if (!isVisible) setIsVisible(true);
 mouseX.set(e.clientX);
 mouseY.set(e.clientY);
 };

 const handleMouseOver = (e: MouseEvent) => {
 const target = e.target as HTMLElement;
 const isClickable =
 target.tagName.toLowerCase() === 'a' ||
 target.tagName.toLowerCase() === 'button' ||
 target.closest('a') !== null ||
 target.closest('button') !== null ||
 target.getAttribute('role') === 'button' ||
 target.closest('[role="button"]') !== null;

 setIsHovering(isClickable);

 if (isClickable) {
 target.style.cursor = 'none';
 }
 };

 const handleMouseLeave = () => {
 setIsVisible(false);
 };

 window.addEventListener('mousemove', handleMouseMove, { passive: true });
 window.addEventListener('mouseover', handleMouseOver, { passive: true });
 document.addEventListener('mouseleave', handleMouseLeave);
 
 return () => {
 window.removeEventListener('mousemove', handleMouseMove);
 window.removeEventListener('mouseover', handleMouseOver);
 document.removeEventListener('mouseleave', handleMouseLeave);
 document.documentElement.style.cursor = 'auto';
 };
 }, [mouseX, mouseY, isVisible, isTouchDevice]);

 if (isTouchDevice || !isVisible) return null;

 return (
 <>
 {/* Small dot */}
 <m.div
 className="fixed top-0 left-0 w-2 h-2 bg-cyber-cyan rounded-full pointer-events-none z-[9999] "
 style={{
 x: mouseX,
 y: mouseY,
 translateX: '-50%',
 translateY: '-50%'
 }}
 />
 
 {/* Larger glowing ring */}
 <m.div
 className="fixed top-0 left-0 w-10 h-10 border border-cyber-mint rounded-full pointer-events-none z-[9998] "
 style={{
 x: cursorXSpring,
 y: cursorYSpring,
 translateX: '-50%',
 translateY: '-50%'
 }}
 animate={{
 scale: isHovering ? 1.8 : 1,
 borderWidth: isHovering ? '2px' : '1px',
 borderColor: isHovering ? '#06b6d4' : '#10b981', // cyan vs mint
 backgroundColor: isHovering ? 'rgba(6,182,212,0.15)' : 'rgba(16,185,129,0)'
 }}
 transition={{ duration: 0.2, ease: "easeOut" }}
 />
 </>
 );
};
