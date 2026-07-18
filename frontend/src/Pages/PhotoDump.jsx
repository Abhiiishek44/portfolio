import { useState } from 'react';
import { FiArrowLeft, FiCamera, FiX } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import me1 from '../assets/photoDump/me1.jpeg';
import me2 from '../assets/photoDump/me2.jpeg';
import me3 from '../assets/photoDump/me3.jpeg';
import me4 from '../assets/photoDump/me4.jpeg';

const photos = [
  { src: me1, title: 'Photo 01', tone: 'Portrait' },
  { src: me2, title: 'Photo 02', tone: 'Memory' },
  { src: me3, title: 'Photo 03', tone: 'Moment' },
  { src: me4, title: 'Photo 04', tone: 'Square Frame' },
];

const PhotoDump = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const activePhoto = photos[activeIndex];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#f5f5f0]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#a8a8a1] transition hover:text-[#f5f5f0]"
        >
          <FiArrowLeft />
          Back Home
        </a>

        <section className="mt-10 grid gap-10 border-b border-[#30302e] pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242423] text-[#a3e635]" aria-hidden="true">
                <FiCamera size={20} />
              </span>
              <p className="font-geist text-xs uppercase tracking-[0.18em] text-[#a3e635]">
                Photo Dump
              </p>
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Photos from life outside work.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#a8a8a1]">
              A small collection of people, places, and moments I wanted to keep.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#343431] bg-[#20201f] p-3">
            <button
              type="button"
              className="group block w-full overflow-hidden rounded-xl bg-[#242423]"
              onClick={() => setSelectedPhoto(activePhoto)}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </button>
            <div className="mt-4 flex items-center justify-between gap-4 px-1 pb-1">
              <div>
                <p className="font-geist text-[11px] uppercase tracking-[0.16em] text-[#a3e635]">
                  {activePhoto.tone}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-[#f5f5f0]">
                  {activePhoto.title}
                </h2>
              </div>
              <p className="font-geist text-[11px] uppercase tracking-[0.16em] text-[#85857f]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((photo, index) => index !== activeIndex && (
            <button
              key={photo.title}
              type="button"
              className="group overflow-hidden rounded-xl border border-[#343431] bg-[#20201f] text-left transition duration-300 hover:border-[#65655f]"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
              />
              <div className="flex items-center justify-between gap-4 border-t border-[#343431] px-4 py-3">
                <span className="font-geist text-[11px] uppercase tracking-[0.14em] text-[#a8a8a1]">{photo.title}</span>
                <span className="font-geist text-[11px] uppercase tracking-[0.14em] text-[#a3e635]">{photo.tone}</span>
              </div>
            </button>
          ))}
        </section>
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition hover:border-[#a3e635] hover:text-[#a3e635]"
              aria-label="Close photo"
              onClick={() => setSelectedPhoto(null)}
            >
              <FiX size={20} />
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-h-[90vh] w-full object-contain shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDump;
