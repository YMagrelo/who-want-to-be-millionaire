import React, { useState, useEffect } from 'react';
import './GameMainPage.scss';
import ScoreBlock from '../../components/ScoreBlock/ScoreBlock';
import QuestionsBlock from '../../components/QuestionsBlock/QuestionsBlock';

const GameMainPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [scoresList, setScoresList] = useState([]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('http://localhost:4200/scoresList');
      const data = await response.json();
      setScoresList(data);
    };

    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('http://localhost:4200/questionsAndAnswers');
      const data = await response.json();
      setAnswers(data[questionNumber].answers);
      setQuestion(data[questionNumber].question);
    };
    load();
  }, [questionNumber]);
  const handleAnswerClick = (isCorrect) => {
    console.log('isCorrect', isCorrect);
    if (isCorrect) {
      setQuestionNumber(((prevState) => prevState + 1));
    }
  };
  return (
    <div className="mainPageContainer">
      <QuestionsBlock question={question} answers={answers} handleAnswerClick={handleAnswerClick} />
      <ScoreBlock data={scoresList} questionNumber={questionNumber} />
    </div>
  );
};

export default GameMainPage;
