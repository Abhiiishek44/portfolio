import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  
  const questions = [
    { label: 'Work', question: 'Tell me about your work experience?' },
    { label: 'About me', question: 'Who are you and what do you do?' },
    { label: 'Skills', question: 'What are your technical skills?' },
    { label: 'Contact', question: 'How can I contact you?' }
  ];

  const responses = {
    'Tell me about your work experience?': 'I am currently working as a Maintainer at Voxora (Open Source) since July 2025. I maintain and support the project by reviewing contributions, managing issues, and ensuring code quality. I actively work on LangChain based AI features to improve user experience.',
    'Who are you and what do you do?': 'I am Abhishek Kumbhar, currently pursuing a degree in AI & Data Science. I focus on AI/ML application engineering, working with pre-trained machine learning models, fine-tuning them, and integrating them into real-world applications.',
    'What are your technical skills?': 'I work with AI & Machine Learning (Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch), Application Development (React, Vite, Tailwind CSS, JavaScript, FastAPI), Databases (MongoDB, MySQL), and AI & LLMs (LangChain, LangGraph, Hugging Face, OpenAI).',
    'How can I contact you?': 'You can reach me via email at abhishekkumbhar2004@gmail.com or connect with me on LinkedIn, GitHub, or Twitter. All links are available in the footer section!'
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuestionClick = (question) => {
    setInputValue(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Add user message
      setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
      
      // Get response
      const response = responses[inputValue] || "Thanks for your question! Feel free to explore my portfolio to learn more about me, or try one of the suggested questions above.";
      
      // Add bot response after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: response }]);
      }, 500);
      
      // Clear input
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Navbar />
    <section className="flex justify-center mt-8">
        <div className="w-full max-w-4xl px-6">
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-6 py-8 sticky top-8 z-10 bg-[#0A0A0A]">
                <div className="flex flex-col gap-5">
                    {/* Chat Messages Area */}
                    <div 
                        ref={chatContainerRef}
                        className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-6 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500/50 scrollbar-track-white/5 hover:scrollbar-thumb-red-500/70"
                    >
                        {messages.length > 0 ? (
                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-lg px-4 py-2 font-geist text-[16px] leading-[24px] ${
                                                message.type === 'user'
                                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                    : 'bg-white/[0.05] text-[#A6AAB0] border border-white/10'
                                            }`}
                                        >
                                            {message.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                                    Ask me anything about Abhishek...
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {questions.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleQuestionClick(item.question)}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-geist text-red-500 hover:bg-white/[0.08] hover:text-red-400 transition-all cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-full border border-white/10 bg-black/40 px-5 py-3 flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask anything about Abhishek..."
                            className="w-full bg-transparent font-geist text-sm text-red-500 placeholder:text-[#A6AAB0] outline-none"
                        />
                        <button
                            type="submit"
                            className="text-red-500 hover:text-red-400 transition-colors font-geist text-sm font-medium"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <div className="flex justify-center mt-10">
        <div className="w-full max-w-4xl">
            <div className="flex flex-col gap-8 ">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold font-geist text-white flex items-center gap-3">
                        About Me! 
                    </h1>
          
                    <div className="font-geist text-[#A6AAB0] text-[18px] leading-[29px] space-y-6 font-normal">
                        <p>
                        I am currently pursuing a degree in AI & Data Science with a focus on AI/ML application engineering. 
                        I work with pre-trained machine learning models, fine-tune them, and integrate them into real-world applications.
                        </p>
                        <p>
                        I am continuously learning and improving my skills to build efficient and practical AI-powered solutions.
                        </p>
                    </div> 

                </div>

                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-3xl font-bold font-geist text-white">Technologies I have worked with</h2>
                    
                    <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                        The below mentioned list is a subset of all type of stack I have worked with, you can checkout my <a href="#projects" className="underline decoration-1 underline-offset-4 hover:text-white transition-colors">projects</a> to know more.
                    </p>

                    <div className="font-geist text-[#A6AAB0] text-[18px] leading-[29px] space-y-4">
                        <div>
                            <span className="text-red-500">AI & Machine Learning:</span> Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch
                        </div>
                        <div>
                            <span className="text-red-500">Application Development:</span> React, Vite, Tailwind CSS, JavaScript, FastAPI 
                        </div>
                        <div>
                            <span className="text-red-500">Databases:</span> MongoDB, MySQL
                        </div>
                        <div>
                            <span className="text-red-500">Tools:</span> Git, GitHub, VS Code, Postman
                        </div>
                        <div>
                            <span className="text-red-500">AI & LLMs:</span> LangChain, LangGraph, Hugging Face, OpenAI
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-3xl font-bold font-geist text-white">Experience</h2>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                             <div className="font-geist text-[18px] leading-[29px] ">
                                 <span className="text-[#E4E5E6] underline decoration-gray-600 underline-offset-4">July 2025 – Present</span>: <span className="text-red-500">Maintainer @ <a href="https://github.com/voxora-cloud/voxora" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">Voxora</a> (Open Source)</span>
                             </div>
                             <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                               Maintaining and supporting the Voxora open-source project by reviewing contributions, managing issues, and ensuring code quality. Actively working on LangChain based AI features to improve user experience and overall platform functionality.</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </div>
    </>
  );
}

export default Home;