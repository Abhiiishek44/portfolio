import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Voxora (Open Source)',
    description:
      'Real-time communication platform with AI-assisted features, designed for low-latency and reliability.',
    tags: ['WebRTC', 'Node.js', 'AI/ML'],
    links: {
      github: 'https://github.com/voxora-cloud/voxora',
      live: 'https://www.voxora.cloud/',
    },
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'NLP-based tool that parses resumes and matches them to job descriptions with confidence scoring.',
    tags: ['Python', 'LangChain', 'FastAPI'],
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    title: 'Realtime Support Bot',
    description:
      'Multi-channel chat assistant with streaming responses and context-aware handoffs.',
    tags: ['React', 'Vite', 'Redis'],
    links: {
      github: '#',
      live: '#',
    },
  },
];

function Project() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-4xl px-6 py-5">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold font-geist text-white">Projects</h1>
              <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                A curated set of projects that highlight my work in AI, real-time systems, and application development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold font-geist text-white">
                      {project.title}
                    </h2>
                    <p className="font-geist text-[#A6AAB0] text-[16px] leading-[26px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-red-500/40 px-3 py-1 text-[12px] font-medium text-red-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm font-geist">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:opacity-80 transition-opacity"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A6AAB0] hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;