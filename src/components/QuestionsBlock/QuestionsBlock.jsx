/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './QuestionsBlock.scss';
import AnswerItem from '../AnswerItem/AnswerItem';

const QuestionsBlock = ({
  question, answers, id, winScore, handleAnswerClick, questionNumber,
}) => {
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    setActiveButton('');
  }, [questionNumber]);

  const handleAnswerClickStyle = (number) => {
    setActiveButton(number);
  };

  return (
    <div className="questionsBlock">
      <div className="questionsContainer">
        <h2 className="questionsContainer_questionTitle">{question}</h2>
        <div className="questionsContainer_answersList">
          {answers && answers.map(({
            value, number, isCorrect,
          }) => (
            <AnswerItem
              key={value}
              value={value}
              number={number}
              isCorrect={isCorrect}
              id={id}
              winScore={winScore}
              handleAnswerClick={handleAnswerClick}
              handleAnswerClickStyle={handleAnswerClickStyle}
              activeButton={activeButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsBlock;
