import React, { useState, useRef, useEffect } from 'react';
import { FAQ_QUESTIONS } from '../../constants/questions';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import ReactMarkdown from 'react-markdown';

const InteractivePanel = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const abortControllerRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuestionClick = (question) => {
    setInputValue(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isStreaming) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: userMessage }
    ]);

    setIsStreaming(true);

    try {
      // Create abort controller for this request
      abortControllerRef.current = new AbortController();

      const response = await fetch('http://localhost:8000/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Add empty assistant message
      setMessages((prev) => [
        ...prev,
        { type: 'assistant', text: '', isStreaming: true }
      ]);

      let accumulatedText = '';

      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          // Update final message without streaming indicator
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.type === 'assistant') {
              lastMessage.isStreaming = false;
            }
            return newMessages;
          });
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;

        // Update the last assistant message with accumulated text
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage && lastMessage.type === 'assistant') {
            lastMessage.text = accumulatedText;
          }
          return newMessages;
        });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error:', error);
        setMessages((prev) => [
          ...prev,
          { 
            type: 'assistant', 
            text: 'Sorry, I encountered an error. Please make sure the backend server is running.',
            isStreaming: false 
          }
        ]);
      }
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  return (
    <Card className="px-6 py-8">
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
                    <ReactMarkdown
                      components={{
                        strong: ({ children }) => (
                          <strong className="font-bold text-red-400">{children}</strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-1 my-2">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-[#A6AAB0]">{children}</li>
                        ),
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0">{children}</p>
                        ),
                        a: ({ href, children }) => (
                          <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-red-300 underline"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                    {message.isStreaming && (
                      <span className="inline-block w-[3px] h-4 ml-1 bg-red-500 animate-pulse"></span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
                {isStreaming ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-pulse">Generating response</span>
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </span>
                  </span>
                ) : (
                  'Ask me anything about Abhishek...'
                )}
              </p>
            </div>
          )}
        </div>

        {/* FAQ Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {FAQ_QUESTIONS.map((item) => (
            <Button
              key={item.label}
              onClick={() => handleQuestionClick(item.question)}
              disabled={isStreaming}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Input Form */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything about Abhishek..."
              disabled={isStreaming}
            />
          </div>
          <Button 
            type="button"
            onClick={handleSubmit}
            disabled={isStreaming || !inputValue.trim()}
          >
            {isStreaming ? 'Generating...' : 'Send'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InteractivePanel;
