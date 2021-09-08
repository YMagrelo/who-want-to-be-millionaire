import React, { useState, useEffect } from 'react';
import './GameMainPage.scss';
import ScoreBlock from '../../components/ScoreBlock/ScoreBlock';
import QuestionsBlock from '../../components/QuestionsBlock/QuestionsBlock';
import GameOverPage from '../GameOverPage/GameOverPage';
import WinGamePage from '../WinGamePage/WinGamePage';

const classNames = require('classnames');

const GameMainPage = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [scoresList, setScoresList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalWinScore] = useState('');
  const [fetchedData, setFetchedData] = useState({});
  const [isGameWin, setIsGameWin] = useState(false);
  const [hideQuestionsBlock, setHideQuestionsBlock] = useState('');
  const [showScoreBlock, setShowBlock] = useState('');
  const questionsBlockStyle = classNames('questionsBlock', hideQuestionsBlock);
  const scoreBlockStyle = classNames('scoreBlock', showScoreBlock);

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
    }, 1000);
  };

  const handleBurgerClick = () => {
    setHideQuestionsBlock('disabled');
    setShowBlock('enabled');
  };

  const handleCloseClick = () => {
    setHideQuestionsBlock('');
    setShowBlock('');
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
        handleBurgerClick={handleBurgerClick}
        questionsBlockStyle={questionsBlockStyle}
        question={fetchedData.question}
        answers={fetchedData.answers}
        id={fetchedData.id}
        winScore={fetchedData.winScore}
        handleAnswerClick={handleAnswerClick}
        questionNumber={questionNumber}
      />
      <ScoreBlock
        data={scoresList}
        questionNumber={questionNumber}
        scoreBlockStyle={scoreBlockStyle}
        handleCloseClick={handleCloseClick}
      />
    </div>
  );
};

export default GameMainPage;
