const Footer = () => {
    return (
        <footer className="border-t border-[#2b2b2d] bg-[#0d0d0e]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div>
                        <h2 className="font-system text-lg font-semibold text-[#f4f2f3]">Abhishek Kumbhar</h2>
                        <p className="mt-2 font-geist text-xs uppercase tracking-[0.16em] text-[#8f888d]">
                            AI Engineer
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 font-geist text-xs uppercase tracking-[0.14em] text-[#b9b3b7]">
                        <a href="/#stack" className="transition hover:text-[#d8b7c7]">Stack</a>
                        <a href="/#interaone" className="transition hover:text-[#d8b7c7]">InteraOne</a>
                        <a href="/photodump" className="transition hover:text-[#d8b7c7]">Photo Dump</a>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-4 border-t border-[#2b2b2d] pt-6 font-geist text-xs uppercase tracking-[0.14em] text-[#8f888d] sm:flex-row">
                    <p>Copyright 2026</p>
                    <div className="flex gap-5">
                        <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d8b7c7]">GitHub</a>
                        <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d8b7c7]">LinkedIn</a>
                        <a href="mailto:abhishekkumbhar2004@gmail.com" className="transition hover:text-[#d8b7c7]">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
