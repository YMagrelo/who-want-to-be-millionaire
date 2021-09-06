import React from 'react';
import './GameStartPage.scss';
import IntroOutroContent from '../../components/IntroOutroContent';

const GameStartPage = () => {
  const title = 'Who wants to be a millionaire?';
  const buttonText = 'Start';
  const navigatePath = '/main';
  return (
    <div className="startPageContainer">
      <IntroOutroContent
        title={title}
        buttonText={buttonText}
        navigatePath={navigatePath}
      />
    </div>
  );
};

export default GameStartPage;
