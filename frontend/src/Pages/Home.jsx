import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import avatarImage from '../assets/images/me.jpeg';

const stackGroups = [
  {
    label: 'AI & Machine Learning',
    tools: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    label: 'AI Application Development',
    tools: ['LLMs', 'LangChain', 'LangGraph', 'Hugging Face', 'OpenAI'],
  },
  {
    label: 'Application Engineering',
    tools: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    label: 'Databases & Tools',
    tools: ['MongoDB', 'MySQL', 'Redis', 'Docker', 'Git', 'GitHub', 'VS Code', 'Postman'],
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
    <span className={`font-geist text-[11px] uppercase tracking-[0.18em] text-[#6b4e5b] ${className}`}>
      {children}
    </span>
  );
}

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff8f8] text-[#1f1a1b]">
      <Navbar />

      <main>
        <section id="about" className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
          <div className="absolute inset-x-0 top-0 h-px bg-[#eae0e1]" />

          <div className="max-w-3xl animate-reveal">
            <SystemLabel>AI Application Developer</SystemLabel>
            <h1 className="mt-6 max-w-4xl font-system text-5xl font-semibold leading-[1.04] text-[#1f1a1b] sm:text-6xl lg:text-7xl">
              Building useful AI products with clean, reliable software.
            </h1>
            <p className="mt-6 max-w-2xl font-system text-lg leading-8 text-[#4e4448]">
              I am an AI application developer focused on building practical AI-powered products, integrating intelligent systems with reliable application architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span key={item} className="border border-[#eae0e1] bg-white px-3 py-2 font-geist text-[11px] uppercase tracking-[0.14em] text-[#4e4448]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#interaone"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#6b4e5b] px-5 py-3 font-geist text-sm font-semibold text-white shadow-[0_2px_12px_rgba(107,78,91,0.18)] transition duration-300 hover:bg-[#5d4350]"
              >
                Explore InteraOne
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/#photodump"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#eae0e1] bg-white px-5 py-3 font-geist text-sm font-semibold text-[#1f1a1b] transition duration-300 hover:border-[#6b4e5b] hover:bg-[#f5eced]"
              >
                Photo Dump
                <FiArrowRight />
              </a>
            </div>

          </div>

          <div className="relative animate-reveal-delayed lg:justify-self-end">
            <div className="absolute -left-5 top-7 hidden h-full w-full border border-[#d1c3c7] lg:block" />
            <div className="relative max-w-md border border-[#eae0e1] bg-white p-3 shadow-[0_2px_24px_rgba(82,55,68,0.08)]">
              <img
                src={avatarImage}
                alt="Abhishek Kumbhar"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#eae0e1] bg-white" aria-label="System state">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8 lg:px-10">
            {['BUILDING', 'ACTIVE', 'DEPLOYED THINKING', 'PRODUCT-FIRST'].map((item) => (
              <div key={item} className="bg-white py-4 font-geist text-[11px] uppercase tracking-[0.18em] text-[#807478]">
                <span className="mr-2 text-[#6b4e5b]">/</span>{item}
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SystemLabel>Stack</SystemLabel>
              <h2 className="mt-4 max-w-3xl font-system text-4xl font-semibold leading-tight text-[#1f1a1b] sm:text-5xl">
                Tools I use to build intelligent products.
              </h2>
            </div>
            <p className="max-w-md font-system text-base leading-7 text-[#4e4448]">
              A practical stack for model-backed applications, product interfaces, and backend systems.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article key={group.label} className="border border-[#eae0e1] bg-white p-5 shadow-[0_2px_24px_rgba(82,55,68,0.04)]">
                <SystemLabel>{group.label}</SystemLabel>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span key={tool} className="border border-[#eae0e1] bg-[#fff8f8] px-3 py-2 font-geist text-xs text-[#4e4448]">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="interaone" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="overflow-hidden border border-[#eae0e1] bg-white shadow-[0_2px_24px_rgba(82,55,68,0.05)]">
            <div className="grid gap-px bg-[#eae0e1] lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-[#6b4e5b] p-6 text-white sm:p-8">
                <p className="font-geist text-[11px] uppercase tracking-[0.18em] text-white/75">
                  Current Build
                </p>
                <h2 className="mt-4 max-w-lg font-system text-4xl font-semibold leading-tight sm:text-5xl">
                  Founding Developer at InteraOne.
                </h2>
                <p className="mt-5 max-w-xl font-system text-base leading-7 text-white/78">
                  I shape InteraOne from the product core outward: AI support flows, application architecture, platform improvements, and the details that turn a rough idea into a usable product.
                </p>
                <a
                  href="https://www.interaone.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-sm bg-white px-5 py-3 font-geist text-sm font-semibold text-[#6b4e5b] transition hover:bg-[#f5eced]"
                >
                  Visit InteraOne
                  <FiExternalLink />
                </a>
              </div>

              <div className="bg-white p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-geist text-[11px] uppercase tracking-[0.18em] text-[#6b4e5b]">
                      InteraOne
                    </p>
                    <h3 className="mt-3 font-system text-2xl font-semibold text-[#1f1a1b]">
                      AI-powered customer support automation platform.
                    </h3>
                  </div>
                  <span className="shrink-0 border border-[#d1c3c7] bg-[#fff8f8] px-3 py-2 font-geist text-[11px] uppercase tracking-[0.16em] text-[#6b4e5b]">
                    July 2025 - Present
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    'Own practical AI feature direction',
                    'Design product-ready support flows',
                    'Improve platform architecture and reliability',
                  ].map((item) => (
                    <div key={item} className="border border-[#eae0e1] bg-[#fff8f8] p-4">
                      <p className="font-system text-sm leading-6 text-[#4e4448]">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founderTags.map((tag) => (
                    <span key={tag} className="border border-[#eae0e1] bg-white px-3 py-2 font-geist text-[11px] uppercase tracking-[0.12em] text-[#4e4448]">
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
