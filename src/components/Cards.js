import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Quotes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Knowledge and awareness are vague, and perhaps better called illusions'
              label='Itachi Uchiha'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='You Focus on the Trivial, and lose sight of what is most important, Change is impossible in this fog of ignorance'
              label='Quotes'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='If you want to know who you are, you have to look at your real self and acknowledge what you see.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Any technique is worthless before my eyes.'
              label='Eyes Says all'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='It is not wise to judge others based on your own preconceptions and by their apperances.'
              label='Judgement'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
