import React from 'react';
import './GameOverPage.scss';
import IntroOutroContent from '../../components/IntroOutroContent';

const GameOverPage = ({
  score, setQuestionNumber, setIsGameOver,
}) => {
  const heading = 'Total score:';
  const buttonText = 'Try again';
  const navigatePath = '/';
  const handleTryAgainButton = () => {
    setQuestionNumber(0);
    setIsGameOver(false);
  };

  return (
    <div className="endPageContainer">
      <IntroOutroContent
        heading={heading}
        title={score}
        buttonText={buttonText}
        navigatePath={navigatePath}
        handleTryAgainButton={handleTryAgainButton}
      />
    </div>
  );
};

export default GameOverPage;
