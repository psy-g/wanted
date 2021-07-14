import React, { useEffect, useRef } from 'react';
import Search from '../components/Search';

const SearchContainer = ({ state, modify }) => {
  const random = useRef();

  useEffect(() => {
    randomColor();
  });

  // input focus, random color
  const randomColor = () => {
    let select = random.current.getElementsByTagName('button');
    let input = document.getElementsByTagName('input')[0];

    for (let i = 0; i < select.length; i++) {
      let randomBackground =
        '#' + Math.round(Math.random() * 0xffffff).toString(16);
      let randomFont = '#' + Math.round(Math.random() * 0xffffff).toString(16);

      select[i].style.backgroundColor = randomBackground;
      select[i].style.color = randomFont;
    }

    setTimeout(() => {
      input.focus();
    }, 0);
  };

  // close
  const closeBtn = (e) => {
    modify(false);
  };

  return <Search random={random} closeBtn={closeBtn} search={state.search} />;
};

export default SearchContainer;
