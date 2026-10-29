import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowUpRight, FiCamera, FiX } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import me1 from '../assets/photoDump/me1.jpeg';
import me2 from '../assets/photoDump/me2.jpeg';
import me3 from '../assets/photoDump/me3.jpeg';
import me4 from '../assets/photoDump/me4.jpeg';

const photos = [
  { src: me1, title: 'Photo 01', tone: 'Portrait' },
  { src: me2, title: 'Photo 02', tone: 'Memory' },
  { src: me3, title: 'Photo 03', tone: 'Moment' },
  { src: me4, title: 'Photo 04', tone: 'Square frame' },
];

const PhotoDump = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const gridRef = useRef(null);
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const grid = gridRef.current;
    if (!grid) return undefined;

    let frame;
    let x = 0;
    let y = 0;
    let pointerX = 0;
    let pointerY = 0;

    const animate = (time) => {
      const targetX = Math.sin(time * 0.00046) * 38 + pointerX;
      const targetY = Math.cos(time * 0.00037) * 30 + pointerY;
      x += (targetX - x) * 0.045;
      y += (targetY - y) * 0.045;
      grid.style.setProperty('--grid-x', `${x}px`);
      grid.style.setProperty('--grid-y', `${y}px`);
      frame = window.requestAnimationFrame(animate);
    };
    const handlePointerMove = (event) => {
      const bounds = grid.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 30;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 30;
      grid.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
      grid.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
      grid.classList.add('cursor-on-grid');
    };
    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      grid.classList.remove('cursor-on-grid');
    };

    grid.addEventListener('pointermove', handlePointerMove, { passive: true });
    grid.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      grid.removeEventListener('pointermove', handlePointerMove);
      grid.removeEventListener('pointerleave', handlePointerLeave);
      grid.style.removeProperty('--cursor-x');
      grid.style.removeProperty('--cursor-y');
      grid.classList.remove('cursor-on-grid');
    };
  }, []);

  return (
    <div className="portfolio-shell photo-shell">
      <Navbar />

      <main>
        <section ref={gridRef} className="photo-hero hero-grid interactive-grid ruled-section">
          <div className="page-frame photo-hero-inner">
            <a href="/" className="photo-back"><FiArrowLeft /> Back home</a>
            <div className="photo-title-row">
              <div>
                <p className="section-label"><FiCamera /> Photo dump / Personal archive</p>
                <h1>Life outside<br />the code.</h1>
              </div>
              <p>A small collection of people, places, and moments I wanted to keep.</p>
            </div>
          </div>
        </section>

        <section className="photo-gallery ruled-section">
          <div className="page-frame featured-photo-grid">
            <div className="featured-photo-copy">
              <p className="section-label">Currently viewing</p>
              <span className="photo-index">{String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
              <h2>{activePhoto.title}</h2>
              <p>{activePhoto.tone} · A frame from the archive.</p>
              <button type="button" onClick={() => setSelectedPhoto(activePhoto)}>Open full frame <FiArrowUpRight /></button>
            </div>
            <button type="button" className="featured-photo" onClick={() => setSelectedPhoto(activePhoto)} aria-label={`Open ${activePhoto.title}`}>
              <img src={activePhoto.src} alt={activePhoto.title} />
            </button>
          </div>

          <div className="page-frame photo-thumbnails">
            {photos.map((photo, index) => (
              <button key={photo.title} type="button" className={index === activeIndex ? 'active' : ''} onClick={() => setActiveIndex(index)}>
                <img src={photo.src} alt={photo.title} />
                <span><b>{photo.title}</b><small>{photo.tone}</small></span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="photo-footer page-frame"><span>Abhishek Kumbhar · Photo dump</span><a href="/">Return to portfolio <FiArrowUpRight /></a></footer>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close photo" onClick={() => setSelectedPhoto(null)}><FiX /></button>
            <img src={selectedPhoto.src} alt={selectedPhoto.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDump;
