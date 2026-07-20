import { useEffect, useRef } from 'react';

const TouchCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let activePointerId = null;
    let hideTimeout;

    if (!cursor) return undefined;

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const handlePointerDown = (event) => {
      if (event.pointerType !== 'touch') return;

      window.clearTimeout(hideTimeout);
      activePointerId = event.pointerId;
      moveCursor(event);
      cursor.classList.add('is-visible', 'is-pressed');
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch' && event.pointerId === activePointerId) {
        moveCursor(event);
      }
    };

    const handlePointerEnd = (event) => {
      if (event.pointerId !== activePointerId) return;

      moveCursor(event);
      activePointerId = null;
      cursor.classList.remove('is-pressed');
      hideTimeout = window.setTimeout(() => {
        cursor.classList.remove('is-visible');
      }, 180);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerEnd, { passive: true });
    window.addEventListener('pointercancel', handlePointerEnd, { passive: true });

    return () => {
      window.clearTimeout(hideTimeout);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
    };
  }, []);

  return <span ref={cursorRef} className="touch-cursor" aria-hidden="true" />;
};

export default TouchCursor;
