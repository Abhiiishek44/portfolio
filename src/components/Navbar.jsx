import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiSearch, FiSun } from 'react-icons/fi';
import avatarImage from '../assets/images/me.jpeg';

const Navbar = () => {  
    return (
        <nav className="bg-bg-primary">
            <div className="mx-auto w-full max-w-4xl px-6 pt-8">
                <div className="flex items-center justify-between">
                    <h1 className="font-geist text-2xl font-semibold text-[#E4E5E6]">Abhishek Kumbhar</h1>
                    <div className="flex items-center gap-6 font-system text-sm text-[#A6AAB0]">
                        <Link to="/" className="hover:text-white transition-colors">About</Link>
                        <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                        <Link to="/photodump" className="hover:text-white transition-colors">Photo Dump</Link>
                        <button type="button" className="hover:text-white transition-colors" aria-label="Search">
                            <FiSearch size={18} />
                        </button>
                        <button type="button" className="hover:text-white transition-colors" aria-label="Theme">
                            <FiSun size={18} />
                        </button>
                    </div>
                </div>

                <div className="mt-6 h-px w-full bg-red-500/60" />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 py-8">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                        <img src={avatarImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <h2 className="font-geist text-3xl font-bold text-white">Hi, I’m @abhishek.</h2>
                        <p className="font-geist text-[#A6AAB0] text-[16px] leading-[26px]">
                            Pursuing AI & Data Science with a focus on AI/ML application engineering.
                            I integrate AI models into real-world, scalable applications.
                        </p>

                        <div className="flex items-center gap-4 text-[#A6AAB0]">
                            <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaXTwitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="mailto:abhishekkumbhar2004@gmail.com" className="hover:text-white transition-colors">
                                <FaEnvelope size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-red-500/60" />
            </div>
        </nav>
    );
}

export default Navbar;