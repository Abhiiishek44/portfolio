const Footer = () => {
    return (
        <footer className="border-t border-[#eae0e1] bg-[#fff8f8]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:px-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                    <div>
                        <h2 className="font-system text-lg font-semibold text-[#1f1a1b]">Abhishek Kumbhar</h2>
                        <p className="mt-2 font-geist text-xs uppercase tracking-[0.16em] text-[#807478]">
                            AI Application Developer
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 font-geist text-xs uppercase tracking-[0.14em] text-[#4e4448]">
                        <a href="/#stack" className="transition hover:text-[#6b4e5b]">Stack</a>
                        <a href="/#interaone" className="transition hover:text-[#6b4e5b]">InteraOne</a>
                        <a href="/photodump" className="transition hover:text-[#6b4e5b]">Photo Dump</a>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-4 border-t border-[#eae0e1] pt-6 font-geist text-xs uppercase tracking-[0.14em] text-[#807478] sm:flex-row">
                    <p>Copyright 2026</p>
                    <div className="flex gap-5">
                        <a href="https://github.com/Abhiiishek44" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#6b4e5b]">GitHub</a>
                        <a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#6b4e5b]">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
