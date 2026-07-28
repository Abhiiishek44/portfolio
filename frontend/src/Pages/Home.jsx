import { useState } from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiGitPullRequest,
  FiMail,
  FiStar,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import avatarImage from '../assets/images/me.jpeg';
import contactMascot from '../assets/illustrations/contact-mascot.webp';

const skills = [
  {
    title: 'AI',
    tools: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LangGraph', 'RAG', 'QdrantDB'],
  },
  {
    title: 'Web',
    tools: ['Tailwind CSS', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'FastAPI'],
  },
  {
    title: 'Data & tools',
    tools: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphDB', 'Docker', 'Git', 'GitHub', 'Postman'],
  },
];

const workItems = [
  'Ship customer-facing capabilities from early product decisions through production.',
  'Connect AI behavior, APIs, data, and interfaces into dependable workflows.',
  'Build the backend and infrastructure foundations needed for the product to scale.',
];

const contributions = [
  {
    project: 'LangChain OpenWiki',
    reference: 'langchain-ai/openwiki#477',
    stars: '+13.2k',
    title: 'Added multilingual wiki output',
    description:
      'Added first-class multilingual output with language-aware CLI options, persisted language settings, translation recovery, and localized reader-facing wiki content.',
    url: 'https://github.com/langchain-ai/openwiki/pull/477',
  },
  {
    project: 'Apache Superset',
    reference: 'apache/superset#41975',
    stars: '+73.9k',
    title: 'Fixed BigQuery project resolution',
    description:
      'Updated BigQuery clients to honor the project in the connection URI, preventing metadata operations from resolving datasets against the wrong project.',
    url: 'https://github.com/apache/superset/pull/41975',
  },
  {
    project: 'Odysseus AI',
    stars: '+83.2k',
    pullRequests: [
      {
        reference: 'odysseus-dev/odysseus#5491',
        title: 'Made LLM fallbacks recover from empty streams',
        description:
          'Changed fallback handling so empty or metadata-only model streams advance to the next candidate instead of ending without a useful response.',
        url: 'https://github.com/odysseus-dev/odysseus/pull/5491',
      },
      {
        reference: 'odysseus-dev/odysseus#3840',
        title: 'Prevented blank API integrations',
        description:
          'Added client- and server-side validation that blocks blank API integrations and protects stored integration data during updates.',
        url: 'https://github.com/odysseus-dev/odysseus/pull/3840',
      },
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
  const [mascotReaction, setMascotReaction] = useState(0);
  const [odysseusPage, setOdysseusPage] = useState(0);

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
              Building AI products that hold up in the real world.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b5b5ad] sm:text-xl">
              I&apos;m Abhishek, an AI engineer building InteraOne across AI, backend, product, and infrastructure. I also contribute production fixes to Apache Superset and Odysseus AI.
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
                I turn difficult engineering problems into reliable product outcomes.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#a8a8a1]">
                My approach is to find the root cause, make focused changes, and carry them through testing, review, and release. It shapes both my work on InteraOne and my merged open-source contributions.
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
                <p className="text-sm font-medium text-[#a3e635]">AI customer support platform</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em]">
                  Building InteraOne across AI, backend, product, and infrastructure.
                </h3>
                <p className="mt-5 leading-7 text-[#a8a8a1]">
                  As a founding developer, I turn early product needs into shipped capabilities—from AI behavior and APIs to customer-facing workflows and the infrastructure behind them.
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
              <p className="mb-6 text-sm text-[#85857f]">Current impact</p>
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
            <div>
              <div>
                <SectionLabel>Open source</SectionLabel>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Merged work in production codebases.
                </h2>
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-2xl border border-[#343431] bg-[#20201f]">
              {contributions.map((contribution, index) => (
                (() => {
                  const pullRequests = contribution.pullRequests ?? [contribution];
                  const activePage = contribution.project === 'Odysseus AI' ? odysseusPage : 0;
                  const pullRequest = pullRequests[activePage];

                  return (
                <article
                  key={contribution.project}
                  className="grid gap-6 border-b border-[#343431] p-6 last:border-b-0 sm:p-7 lg:grid-cols-[0.3fr_1fr] lg:gap-10"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-geist text-xs text-[#666660]">0{index + 1}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#435229] bg-[#a3e635]/[0.06] px-2.5 py-1 font-geist text-[11px] uppercase tracking-[0.1em] text-[#a3e635]">
                        <FiCheck /> Merged
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                      {contribution.project}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 font-geist text-xs text-[#85857f]">
                      <FiStar /> {contribution.stars} GitHub stars
                    </span>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 text-sm text-[#a3e635]">
                      <FiGitPullRequest className="mt-0.5 shrink-0" />
                      <span className="font-geist">{pullRequest.reference}</span>
                    </div>
                    <h4 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-2xl">
                      {pullRequest.title}
                    </h4>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[#a8a8a1] sm:text-base">
                      {pullRequest.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                      <a
                        href={pullRequest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f5f5f0] transition hover:text-[#a3e635]"
                      >
                        View merged pull request
                        <FiArrowUpRight />
                      </a>

                      {pullRequests.length > 1 && (
                        <div className="flex items-center gap-3" aria-label="Odysseus AI pull request pagination">
                          <button
                            type="button"
                            onClick={() => setOdysseusPage((page) => (page - 1 + pullRequests.length) % pullRequests.length)}
                            className="rounded-full border border-[#43433f] p-2 text-[#a8a8a1] transition hover:border-[#a3e635] hover:text-[#a3e635]"
                            aria-label="View previous Odysseus AI pull request"
                          >
                            <FiArrowLeft />
                          </button>
                          <span className="font-geist text-xs text-[#85857f]">
                            {activePage + 1} / {pullRequests.length}
                          </span>
                          <button
                            type="button"
                            onClick={() => setOdysseusPage((page) => (page + 1) % pullRequests.length)}
                            className="rounded-full border border-[#43433f] p-2 text-[#a8a8a1] transition hover:border-[#a3e635] hover:text-[#a3e635]"
                            aria-label="View next Odysseus AI pull request"
                          >
                            <FiArrowRight />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
                  );
                })()
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[#30302e] bg-[#1d1d1c]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Technologies behind the systems I ship.
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

        <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Let&apos;s connect.
            </h2>
            <a
              href="mailto:abhishekkumbhar2004@gmail.com"
              className="mt-9 inline-flex items-center gap-2 border-b border-[#6b6b65] pb-1 text-lg text-[#d4d4cd] transition hover:border-[#a3e635] hover:text-[#a3e635]"
            >
              abhishekkumbhar2004@gmail.com
              <FiArrowUpRight />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMascotReaction((count) => count + 1)}
            className="contact-mascot relative mx-auto h-40 w-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a3e635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1A1A1A] md:mx-0"
            aria-label="Wave to the anime boy"
            title="Say hi"
          >
            <img
              key={`contact-mascot-${mascotReaction}`}
              src={contactMascot}
              alt=""
              className={`contact-mascot-image h-full w-full object-cover ${mascotReaction ? 'contact-mascot-reaction' : ''}`}
            />
            {mascotReaction > 0 && (
              <span key={`heart-${mascotReaction}`} aria-hidden="true" className="contact-mascot-heart">♥</span>
            )}
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
