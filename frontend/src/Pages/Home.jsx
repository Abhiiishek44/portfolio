import { FiArrowUpRight, FiGithub, FiMail, FiStar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import avatarImage from '../assets/images/me.jpeg';

const skills = [
  {
    title: 'AI',
    tools: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LangGraph', 'Qdrant'],
  },
  {
    title: 'Web',
    tools: ['Tailwind CSS', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'express.js', 'FastAPI'],
  },
  {
    title: 'Data & tools',
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphDB', 'Docker', 'Git', 'Postman'],
  },
];

const workItems = [
  'Build features from early ideas through to release.',
  'Contribute across AI, frontend, and backend.',
  'Build stable systems that can grow with the product.',
];

const contributions = [
  {
    name: 'Apache Superset',
    stars: '+73.9k',
    description:
      'Contributed a merged fix to Apache Superset, working through the issue, existing system behaviour, test cases, and reviewer feedback.',
    links: [
      { label: 'PR #41975', url: 'https://github.com/apache/superset/pull/41975' },
    ],
  },
  {
    name: 'Odysseus AI',
    stars: '+83.2k',
    description:
      'Contributed multiple merged fixes to a large open-source AI project by investigating existing problems and implementing maintainable solutions.',
    links: [
      { label: 'PR #3840', url: 'https://github.com/odysseus-dev/odysseus/pull/3840' },
      { label: 'PR #5491', url: 'https://github.com/odysseus-dev/odysseus/pull/5491' },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <p className="font-geist text-xs font-medium uppercase tracking-[0.18em] text-[#a3e635]">
      {children}
    </p>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#f5f5f0]">
      <Navbar />

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10"
        >
          <div className="animate-reveal">
            <div className="mb-8 flex items-center gap-3 text-sm text-[#b5b5ad]">
              <span className="h-2 w-2 rounded-full bg-[#a3e635]" />
              AI Engineer
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Building reliable AI systems with practical engineering.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b5b5ad] sm:text-xl">
              I&apos;m Abhishek, an AI engineer who builds products end to end—from AI features and backend systems to the final user experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f0] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#a3e635]"
              >
                View current work
                <FiArrowUpRight />
              </a>
              <a
                href="mailto:abhishekkumbhar2004@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#3a3a38] px-5 py-3 text-sm font-semibold text-[#f5f5f0] transition hover:border-[#6b6b65] hover:bg-[#242423]"
              >
                <FiMail />
                Email me
              </a>
            </div>
          </div>

          <div className="animate-reveal-delayed lg:justify-self-end">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-[#242423] p-2">
              <img
                src={avatarImage}
                alt="Abhishek Kumbhar"
                className="aspect-[4/5] w-full rounded-xl object-cover grayscale-[20%]"
              />
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-[#30302e]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.4fr_1fr] lg:px-10">
            <SectionLabel>About</SectionLabel>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
                I care about clear code, thoughtful solutions, and products that feel easy to use.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#a8a8a1]">
                I enjoy working across a full product, from planning a feature to writing the code and shipping it. My main focus is AI, but I also work with frontend, backend, databases, and deployment.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
          <SectionLabel>Current work</SectionLabel>
          <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">InteraOne</h2>
            <p className="font-geist text-xs uppercase tracking-[0.14em] text-[#85857f]">2025 — Present</p>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-2xl border border-[#343431] bg-[#20201f] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between border-b border-[#343431] p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <div>
                <p className="text-sm font-medium text-[#a3e635]">AI customer support</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em]">
                  Founding Developer building InteraOne from the ground up.
                </h3>
                <p className="mt-5 leading-7 text-[#a8a8a1]">
                  I help build InteraOne, a customer support product. My work covers AI features, product screens, APIs, and the systems behind them.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.interaone.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5f5f0] transition hover:text-[#a3e635]"
                >
                  Visit website <FiArrowUpRight />
                </a>
                <a
                  href="https://github.com/InteraOne/InteraOne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#a8a8a1] transition hover:text-[#f5f5f0]"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>

            <div className="p-7 sm:p-9">
              <p className="mb-6 text-sm text-[#85857f]">My role</p>
              <div className="divide-y divide-[#343431]">
                {workItems.map((item, index) => (
                  <div key={item} className="grid grid-cols-[2rem_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                    <span className="font-geist text-xs text-[#666660]">0{index + 1}</span>
                    <p className="text-base leading-7 text-[#d4d4cd]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="open-source" className="border-t border-[#30302e]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <SectionLabel>Open source</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Notable open-source contributions
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#a8a8a1]">
              Fixes I have contributed to large projects and worked through with their maintainers.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {contributions.map((contribution) => (
                <article
                  key={contribution.name}
                  className="flex min-h-72 flex-col rounded-2xl border border-[#343431] bg-[#20201f] p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-3 text-sm text-[#a3e635]">
                        {contribution.links.length > 1 ? 'Merged contributions' : 'Merged contribution'}
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                        {contribution.name}
                      </h3>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#41413d] px-3 py-1.5 font-geist text-xs text-[#bdbdb5]">
                      <FiStar />
                      {contribution.stars}
                    </span>
                  </div>

                  <p className="mt-6 flex-1 leading-7 text-[#a8a8a1]">
                    {contribution.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {contribution.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f5f5f0] transition hover:text-[#a3e635]"
                      >
                        View {link.label}
                        <FiArrowUpRight />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[#30302e] bg-[#1d1d1c]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Tools I use to get the work done.
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#343431] bg-[#343431] md:grid-cols-3">
              {skills.map((group) => (
                <article key={group.title} className="bg-[#20201f] p-7 sm:p-8">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-6 space-y-3 text-sm text-[#a8a8a1]">
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
              Have a project in mind? Let&apos;s talk.
            </h2>
            <a
              href="mailto:abhishekkumbhar2004@gmail.com"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#6b6b65] pb-1 text-lg text-[#d4d4cd] transition hover:border-[#a3e635] hover:text-[#a3e635]"
            >
              abhishekkumbhar2004@gmail.com
              <FiArrowUpRight />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
