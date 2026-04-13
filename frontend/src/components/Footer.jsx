import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full mt-20 pb-10">
            {/* Email Section */}
            <div className="font-geist text-[#A6AAB0] text-[18px] mb-20">
                Send me an email at 
                <a href="mailto:abhishekkumbhar4615@gmail.com" className="text-red-500 underline decoration-red-500 underline-offset-4 mx-2">
                    abhishekkumbhar2004@gmail.com
                </a> 
                to get in touch!
            </div>

            {/* Links Section */}
            <div className="pt-8 border-t border-zinc-800 flex justify-between font-geist text-[#A6AAB0] text-base">
                <div className="flex gap-6">
                    <Link to="/" className="hover:text-white transition-colors">About</Link>
                    <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                    <a href="#articles" className="hover:text-white transition-colors">Article</a>
                    <a href="#youtube" className="hover:text-white transition-colors">YouTube</a>
                    <Link to="/photodump" className="hover:text-white transition-colors">Photo Dump</Link>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
                    <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
            
            <div className="text-center mt-8 font-geist text-zinc-600 text-sm">
                © Abhishek Kumbhar 2026
            </div>
        </footer>
    );
};

export default Footer;