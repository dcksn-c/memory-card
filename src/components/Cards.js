import React, { useState, useEffect } from 'react';
import uniqid from "uniqid";
//import Card from './Card';
import ayato from '../images/ayato.webp';
import chongyun from '../images/chongyun.webp';
import ganyu from '../images/ganyu.webp';
import keqing from '../images/keqing.webp';
import klee from '../images/klee.webp';
import kokomi from '../images/kokomi.webp';
import mona from '../images/mona.webp';
import ningguang from '../images/ningguang.webp';
import sara from '../images/sara.webp';
import xiangling from '../images/xiangling.webp';
import xingqiu from '../images/xingqiu.webp';
import yoimiya from '../images/yoimiya.webp';

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: ayato,
      id: uniqid(),
    },
    {
      src: chongyun,
      id: uniqid(),
    },
    {
      src: ganyu,
      id: uniqid(),
    },
    {
      src: keqing,
      id: uniqid(),
    },
    {
      src: klee,
      id: uniqid(),
    },
    {
      src: kokomi,
      id: uniqid(),
    },
    {
      src: mona,
      id: uniqid(),
    },
    {
      src: ningguang,
      id: uniqid(),
    },
    {
      src: sara,
      id: uniqid(),
    },
    {
      src: xiangling,
      id: uniqid(),
    },
    {
      src: xingqiu,
      id: uniqid(),
    },
    {
      src: yoimiya,
      id: uniqid(),
    },
  ];

  const [cards, setNewCards] = useState(images);

  // Durstenfeld shuffle
  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
    // eslint-disable-next-line
  }, [score, highScore]);

  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.src} alt={card.id} onClick={handleGameLogic.bind(this, card.id)}/>
        </div>
      ))}
    </>
  );
}

export default CardContainer;