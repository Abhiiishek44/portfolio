import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import avatarImage from '../assets/images/me.jpeg';

const stackGroups = [
  {
    label: 'Model Engineering',
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face'],
  },
  {
    label: 'Agentic Applications',
    tools: ['LLMs', 'LangChain', 'LangGraph', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'FastAPI', 'Node.js'],
  },
  {
    label: 'Backend & Data',
    tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Express', 'Docker', 'Git', 'GitHub', 'Postman'],
  },
];

const heroHighlights = ['LLM Apps', 'Backend Systems', 'Product Engineering'];

const founderTags = [
  'Founding Developer',
  'AI Support Platform',
  'Product Architecture',
  'Open Source',
];

function SystemLabel({ children, className = '' }) {
  return (
    <span className={`font-geist text-[11px] uppercase tracking-[0.18em] text-[#d8b7c7] ${className}`}>
      {children}
    </span>
  );
}

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0d0d0e] text-[#f4f2f3]">
      <Navbar />

      <main>
        <section id="about" className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-[#2b2b2d]" />

          <div className="max-w-3xl animate-reveal">
            <SystemLabel>AI Application Developer</SystemLabel>
            <h1 className="mt-6 max-w-4xl font-system text-5xl font-semibold leading-[1.04] text-[#f4f2f3] sm:text-6xl lg:text-7xl">
              Building useful AI products with clean, reliable software.
            </h1>
            <p className="mt-6 max-w-2xl font-system text-lg leading-8 text-[#d4ced2]">
              I am an AI application developer focused on building practical AI-powered products, integrating intelligent systems with reliable application architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span key={item} className="border border-[#2b2b2d] bg-[#171717] px-3 py-2 font-geist text-[11px] uppercase tracking-[0.14em] text-[#b9b3b7]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#interaone"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#7b5869] px-5 py-3 font-geist text-sm font-semibold text-white shadow-[0_18px_36px_rgba(0,0,0,0.28)] transition duration-300 hover:bg-[#8b6678]"
              >
                Explore InteraOne
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/photodump"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#2b2b2d] bg-[#171717] px-5 py-3 font-geist text-sm font-semibold text-[#f4f2f3] transition duration-300 hover:border-[#7b5869] hover:bg-[#221a1f]"
              >
                Photo Dump
                <FiArrowRight />
              </a>
            </div>

          </div>

          <div className="relative animate-reveal-delayed lg:justify-self-end">
            <div className="absolute -left-5 top-7 hidden h-full w-full border border-[#7b5869]/50 lg:block" />
            <div className="relative max-w-md border border-[#2b2b2d] bg-[#171717] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
              <img
                src={avatarImage}
                alt="Abhishek Kumbhar"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#2b2b2d] bg-[#121213]" aria-label="System state">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
            {['BUILDING', 'ACTIVE', 'DEPLOYED THINKING', 'PRODUCT-FIRST'].map((item) => (
              <div key={item} className="bg-[#121213] py-4 font-geist text-[11px] uppercase tracking-[0.18em] text-[#8f888d]">
                <span className="mr-2 text-[#d8b7c7]">/</span>{item}
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SystemLabel>Stack</SystemLabel>
              <h2 className="mt-4 max-w-3xl font-system text-4xl font-semibold leading-tight text-[#f4f2f3] sm:text-5xl">
                Tools I use to build intelligent products.
              </h2>
            </div>
            <p className="max-w-md font-system text-base leading-7 text-[#d4ced2]">
              A practical stack for model-backed applications, product interfaces, and backend systems.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article key={group.label} className="overflow-hidden border border-[#2b2b2d] bg-[#171717] shadow-[0_18px_44px_rgba(0,0,0,0.2)] transition duration-300 hover:border-[#7b5869]/70">
                <div className="h-1 bg-[#7b5869]" />
                <div className="p-5 sm:p-6">
                  <h3 className="font-system text-xl font-semibold text-[#f4f2f3]">
                    {group.label}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span key={tool} className="border border-[#2b2b2d] bg-[#121213] px-3 py-2 font-geist text-xs text-[#d4ced2] transition duration-300 hover:border-[#7b5869] hover:bg-[#221a1f]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="interaone" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="overflow-hidden border border-[#2b2b2d] bg-[#171717] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
            <div className="grid gap-px bg-[#2b2b2d] lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-[#7b5869] p-6 text-white sm:p-8">
                <p className="font-geist text-[11px] uppercase tracking-[0.18em] text-white/75">
                  Current Build
                </p>
                <h2 className="mt-4 max-w-lg font-system text-4xl font-semibold leading-tight sm:text-5xl">
                  Founding Developer at InteraOne.
                </h2>
                <p className="mt-5 max-w-xl font-system text-base leading-7 text-white/78">
                  I shape InteraOne from the product core outward: AI support flows, application architecture, platform improvements, and the details that turn a rough idea into a usable product.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.interaone.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#f4f2f3] px-5 py-3 font-geist text-sm font-semibold text-[#7b5869] transition hover:bg-[#eadce3]"
                  >
                    Visit InteraOne
                    <FiExternalLink />
                  </a>
                  <a
                    href="https://github.com/InteraOne/InteraOne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3 font-geist text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                  >
                    Contribute
                    <FiGithub />
                  </a>
                </div>
              </div>

              <div className="bg-[#171717] p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-geist text-[11px] uppercase tracking-[0.18em] text-[#d8b7c7]">
                      InteraOne
                    </p>
                    <h3 className="mt-3 font-system text-2xl font-semibold text-[#f4f2f3]">
                      AI-powered customer support automation platform.
                    </h3>
                  </div>
                  <span className="shrink-0 border border-[#7b5869]/60 bg-[#221a1f] px-3 py-2 font-geist text-[11px] uppercase tracking-[0.16em] text-[#d8b7c7]">
                    July 2025 - Present
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    'Own practical AI feature direction',
                    'Design product-ready support flows',
                    'Improve platform architecture and reliability',
                  ].map((item) => (
                    <div key={item} className="border border-[#2b2b2d] bg-[#121213] p-4">
                      <p className="font-system text-sm leading-6 text-[#d4ced2]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founderTags.map((tag) => (
                    <span key={tag} className="border border-[#2b2b2d] bg-[#171717] px-3 py-2 font-geist text-[11px] uppercase tracking-[0.12em] text-[#b9b3b7]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
