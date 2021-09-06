import React from 'react';
import './ScoreBlock.scss';

const classNames = require('classnames');

const ScoreBlock = ({ data, questionNumber }) => (
  <div className="scoreBlock">
    <div className="scoreBlock_scoreList">
      {data.map((item, index) => {
        let scoreItemStatus = '';

        if (index === questionNumber) {
          scoreItemStatus = 'active';
        }

        if (index < questionNumber) {
          scoreItemStatus = 'passed';
        }

        const scoreItemStyle = classNames('scoreItem', scoreItemStatus);

        console.log(`index${index}`, scoreItemStyle);

        return (
          <div className={scoreItemStyle} key={item}>
            <span className="scoreItem_value">{`$${item}`}</span>
            <div>
              <svg viewBox="0 0 376 40" xmlns="http://www.w3.org/2000/svg" className="scoreItem_icon">
                <path d="M69 20H0" />
                <path d="M376 20H307" />
                <path d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ScoreBlock;
