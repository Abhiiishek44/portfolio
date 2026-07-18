import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 border-b border-[#30302e] bg-[#1A1A1A]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
                <a href="/#home" className="text-base font-semibold tracking-[-0.02em] text-[#f5f5f0] transition hover:text-[#a3e635]">
                    Abhishek Kumbhar
                </a>

                <div className="hidden items-center gap-7 text-sm text-[#a8a8a1] md:flex">
                    <a href="/#about" className="transition hover:text-[#f5f5f0]">About</a>
                    <a href="/#work" className="transition hover:text-[#f5f5f0]">Work</a>
                    <a href="/#open-source" className="transition hover:text-[#f5f5f0]">Open source</a>
                    <a href="/#skills" className="transition hover:text-[#f5f5f0]">Skills</a>
                    <a href="/photodump" className="transition hover:text-[#f5f5f0]">Photos</a>
                </div>

                <div className="flex items-center gap-4 text-[#a8a8a1]">
                    <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-[#f5f5f0]">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-[#f5f5f0]">
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
