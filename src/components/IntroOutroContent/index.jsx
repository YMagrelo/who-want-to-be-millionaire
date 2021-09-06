import React from 'react';
import './IntroOutroContent.scss';
import { Link } from 'react-router-dom';

const IntroOutroContent = ({
  heading, title, buttonText, navigatePath,
}) => (
  <div className="container">
    <img src="/images/introImg.png" alt="greed" className="contentImage" />
    <div className="textBlock">
      <p className="textBlock_heading">{heading}</p>
      <h1 className="textBlock_title">{title}</h1>
      <Link to={navigatePath}>
        <button className="textBlock_button" type="button">{buttonText}</button>
      </Link>
    </div>
  </div>
);

export default IntroOutroContent;
