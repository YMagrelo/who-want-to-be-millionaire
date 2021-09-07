import React, { useState, useEffect } from 'react';
import './GameMainPage.scss';
import ScoreBlock from '../../components/ScoreBlock/ScoreBlock';
import QuestionsBlock from '../../components/QuestionsBlock/QuestionsBlock';
import GameOverPage from '../GameOverPage/GameOverPage';
import WinGamePage from '../WinGamePage/WinGamePage';

const GameMainPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [scoresList, setScoresList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalWinScore] = useState('');
  const [fetchedData, setFetchedData] = useState({});
  const [isGameWin, setIsGameWin] = useState(false);
  const [answerButtonStyle, setAnswerButtonStyle] = useState('');

  useEffect(() => {
    const loadScoresList = async () => {
      const response = await fetch('http://localhost:4200/scoresList');
      const data = await response.json();
      setScoresList(data);
    };
    loadScoresList();
  }, []);

  useEffect(() => {
    const loadQuestionsAndAnswers = async () => {
      const response = await fetch('http://localhost:4200/questionsAndAnswers');
      const data = await response.json();
      setFetchedData(data[questionNumber]);
    };
    loadQuestionsAndAnswers();
  }, [questionNumber]);

  const handleAnswerClick = (isCorrect, id, winScore) => {
    const lastQuestionId = 11;

    if (isCorrect) {
      setAnswerButtonStyle('right');
    } else {
      setAnswerButtonStyle('wrong');
    }

    setTimeout(() => {
      if (id === lastQuestionId && isCorrect) {
        setIsGameWin(true);
      }

      if (!isCorrect) {
        setIsGameOver(true);
        setFinalWinScore(winScore);
      }

      if (isCorrect) {
        setQuestionNumber(((prevState) => prevState + 1));
      }
    }, 3000);
  };

  if (isGameOver) {
    return (
      <GameOverPage
        score={finalScore}
        setQuestionNumber={setQuestionNumber}
        setIsGameOver={setIsGameOver}
      />
    );
  }

  if (isGameWin) {
    return (
      <WinGamePage />
    );
  }

  return (
    <div className="mainPageContainer">
      <QuestionsBlock
        question={fetchedData.question}
        answers={fetchedData.answers}
        id={fetchedData.id}
        winScore={fetchedData.winScore}
        handleAnswerClick={handleAnswerClick}
        answerButtonStyle={answerButtonStyle}
      />
      <ScoreBlock data={scoresList} questionNumber={questionNumber} />
    </div>
  );
};

export default GameMainPage;
