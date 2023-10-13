import { text } from 'body-parser';
import React from 'react';
import './feature.css';

const Feature = ({content}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div/>
        <h1>{content.title}</h1>
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p>{content.text}</p>
      </div>
    </div>
  )
}

export default Feature