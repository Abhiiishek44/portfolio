import { useEffect, useRef } from 'react';

const TouchCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    let frame;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;
    let activeTouch = null;
    let hideTimeout;

    const animate = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (event.pointerType === 'mouse') {
        cursor.classList.add('is-visible');
        const interactive = event.target.closest('a, button, [role="button"], input, textarea');
        cursor.classList.toggle('is-hovering', Boolean(interactive));
        cursor.classList.toggle('on-grid', Boolean(event.target.closest('.interactive-grid')));
      } else if (event.pointerId === activeTouch) {
        cursor.classList.add('is-visible');
      }
    };

    const handlePointerDown = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('is-visible', 'is-pressed');
      if (event.pointerType === 'touch') activeTouch = event.pointerId;
      window.clearTimeout(hideTimeout);
    };

    const handlePointerUp = (event) => {
      cursor.classList.remove('is-pressed');
      if (event.pointerType === 'touch' && event.pointerId === activeTouch) {
        activeTouch = null;
        hideTimeout = window.setTimeout(() => cursor.classList.remove('is-visible'), 180);
      }
    };

    const handleMouseLeave = () => cursor.classList.remove('is-visible', 'on-grid');

    frame = window.requestAnimationFrame(animate);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.clearTimeout(hideTimeout);
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true"><i /></span>;
};

export default TouchCursor;
