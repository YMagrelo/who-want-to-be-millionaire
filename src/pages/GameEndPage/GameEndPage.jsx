import React from 'react';
import './GameEndPage.scss';
import IntroOutroContent from '../../components/IntroOutroContent';

const GameEndPage = () => {
  const heading = 'Total score:';
  const title = '$8,000 earned';
  const buttonText = 'Try again';
  const navigatePath = '/';
  return (
    <div className="endPageContainer">
      <IntroOutroContent
        heading={heading}
        title={title}
        buttonText={buttonText}
        navigatePath={navigatePath}
      />
    </div>
  );
};

export default GameEndPage;
