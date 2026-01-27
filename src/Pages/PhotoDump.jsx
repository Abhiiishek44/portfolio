import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import me1 from '../assets/photoDump/me1.jpeg';
import me2 from '../assets/photoDump/me2.jpeg';
import me3 from '../assets/photoDump/me3.jpeg';
import me4 from '../assets/photoDump/me4.jpeg';
import me5 from '../assets/photoDump/me5.jpeg';

const PhotoDump = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = [me1, me2, me3, me4, me5];

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10 px-6 md:px-0 mb-20">
        <div className="w-full max-w-4xl">
             <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold font-geist text-white">Photo Dump 📸</h1>
                <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                    A collection of random clicks and memories. Click on any photo to view it larger.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    {photos.map((photo, index) => (
                        <div 
                            key={index} 
                            className="relative group overflow-hidden rounded-xl border border-white/10 aspect-[3/4] cursor-pointer"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <img 
                                src={photo} 
                                alt={`Memory ${index + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </div>

      {selectedPhoto && (
        <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
        >
            <div className="relative">
                <img 
                    src={selectedPhoto} 
                    alt="Full view" 
                    className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl" 
                />
            </div>
        </div>
      )}
    </>
  );
};

export default PhotoDump;
