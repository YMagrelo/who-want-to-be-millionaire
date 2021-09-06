import React, { useState } from 'react';
import './GameMainPage.scss';
import ScoreBlock from '../../components/ScoreBlock/ScoreBlock';
import QuestionsBlock from '../../components/QuestionsBlock/QuestionsBlock';

const GameMainPage = () => {
  const [questionNumber, setQuestionNumber] = useState(3);
  const scoreDataList = [
    '500',
    '1,000',
    '2,000',
    '4,000',
    '8,000',
    '16,000',
    '32,000',
    '64,000',
    '125,000',
    '250,000',
    '500,000',
    '1,000,000',
  ];
  const answers = [{ number: 'A', value: 'yes' },
    { number: 'B', value: 'no' },
    { number: 'C', value: 'i don\'t care' },
    { number: 'D', value: '\'i don\'t now' }];
  return (
    <div className="mainPageContainer">
      <QuestionsBlock data={answers} />
      <ScoreBlock data={scoreDataList} questionNumber={questionNumber} />
    </div>
  );
};

export default GameMainPage;
