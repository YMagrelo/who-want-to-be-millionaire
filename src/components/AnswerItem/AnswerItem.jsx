/* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import './AnswerItem.scss';

const classNames = require('classnames');

const AnswerItem = ({
  id,
  winScore,
  handleAnswerClick,
  value,
  isCorrect,
  number,
  handleAnswerClickStyle,
  activeButton,
}) => {
  let active = '';

  if (activeButton === number && isCorrect) {
    active = 'right';
  }

  if (activeButton === number && !isCorrect) {
    active = 'wrong';
  }

  const answerItemStyle = classNames('answerItem', active);
  return (
    <div
      role="button"
      className={answerItemStyle}
      onClick={() => {
        handleAnswerClick(isCorrect, id, winScore, value);
        handleAnswerClickStyle(number);
      }}
    >
      <div className="answerItem_value">
        <span className="answerItem_valueNum">{number}</span>
        {value}
      </div>
      <div>
        <svg className="answerItem_icon" viewBox="0 0 421 72" xmlns="http://www.w3.org/2000/svg">
          <path d="M404 36L421 36" />
          <path d="M0 36L17 36" />
          <path d="M49.012 0.5H371.988C375.607 0.5 379.014 2.2033 381.186 5.09773L404.375 36L381.186 66.9023C379.014 69.7967 375.607 71.5 371.988 71.5H49.012C45.3933 71.5 41.9857 69.7967 39.8137 66.9023L16.6251 36L39.8137 5.09773C41.9857 2.2033 45.3933 0.5 49.012 0.5Z" />
        </svg>
      </div>
    </div>
  );
};

export default AnswerItem;
