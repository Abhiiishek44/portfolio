import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {  
    return (
        <nav className="sticky top-0 z-50 border-b border-[#eae0e1] bg-[#fff8f8]/90 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
                <a href="/#about" className="group min-w-0">
                    <h1 className="font-system text-base font-semibold tracking-0 text-[#1f1a1b] transition group-hover:text-[#6b4e5b]">
                        Abhishek Kumbhar
                    </h1>
                    <p className="mt-0.5 hidden font-geist text-[10px] uppercase tracking-[0.18em] text-[#807478] sm:block">
                        AI Application Developer
                    </p>
                </a>

                <div className="hidden items-center gap-5 font-geist text-[11px] uppercase tracking-[0.14em] text-[#4e4448] lg:flex">
                    <a href="/#stack" className="nav-link">Stack</a>
                    <a href="/#interaone" className="nav-link">InteraOne</a>
                    <a href="/photodump" className="nav-link">Photo Dump</a>
                </div>

                <div className="flex items-center gap-3 text-[#4e4448]">
                    <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-[#6b4e5b]">
                        <FaGithub size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-[#6b4e5b]">
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
