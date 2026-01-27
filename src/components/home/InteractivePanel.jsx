import React, { useState } from 'react';
import { FAQ_QUESTIONS } from '../../constants/questions';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';

const InteractivePanel = () => {
  const [inputValue, setInputValue] = useState('');

  const handleQuestionClick = (question) => {
    setInputValue(question);
  };

  return (
    <Card className="px-6 py-8">
      <div className="flex flex-col gap-5">
        <Card variant="secondary" className="px-6 py-10 text-center">
          <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
            Ask me anything about Abhishek...
          </p>
        </Card>

        <div className="flex flex-wrap justify-center gap-3">
          {FAQ_QUESTIONS.map((item) => (
            <Button
              key={item.label}
              onClick={() => handleQuestionClick(item.question)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask anything about Abhishek..."
        />
      </div>
    </Card>
  );
};

export default InteractivePanel;
