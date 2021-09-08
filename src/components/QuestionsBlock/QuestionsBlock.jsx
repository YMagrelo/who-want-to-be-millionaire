/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './QuestionsBlock.scss';
import AnswerItem from '../AnswerItem/AnswerItem';

const QuestionsBlock = ({
  question,
  answers,
  id,
  winScore,
  handleAnswerClick,
  questionNumber,
  questionsBlockStyle,
  handleBurgerClick,
}) => {
  const [activeButton, setActiveButton] = useState('');
  const [disabledButton, setDisabledButton] = useState('');

  useEffect(() => {
    setActiveButton('');
    setDisabledButton('');
  }, [questionNumber]);

  const handleAnswerClickStyle = (number) => {
    setActiveButton(number);
    setDisabledButton('disabled');
  };

  return (
    <div className={questionsBlockStyle}>
      <div className="burger" onClick={handleBurgerClick} role="button" tabIndex="0">
        <div className="burger_item" />
        <div className="burger_item" />
        <div className="burger_item" />
      </div>
      <div className="questionsContainer">
        <h2 className="questionsContainer_questionTitle">{question}</h2>
        <div className="questionsContainer_answersList">
          {answers && answers.map(({
            value, letter, isCorrect,
          }) => (
            <AnswerItem
              key={value}
              value={value}
              letter={letter}
              isCorrect={isCorrect}
              id={id}
              winScore={winScore}
              handleAnswerClick={handleAnswerClick}
              handleAnswerClickStyle={handleAnswerClickStyle}
              activeButton={activeButton}
              disabledButton={disabledButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsBlock;
