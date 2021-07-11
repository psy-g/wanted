import React, { useEffect, useRef } from 'react';
import Search from '../components/Search';

const SearchContainer = () => {
  const random = useRef();

  useEffect(() => {
    randomColor();
  }, []);

  // input focus, random color
  const randomColor = () => {
    let select = random.current.getElementsByTagName('button');

    for (let i = 0; i < select.length; i++) {
      let randomBackground =
        '#' + Math.round(Math.random() * 0xffffff).toString(16);
      let randomFont = '#' + Math.round(Math.random() * 0xffffff).toString(16);

      select[i].style.backgroundColor = randomBackground;
      select[i].style.color = randomFont;
    }
  };

  // close
  const closeBtn = (e) => {
    let select = e.target.previousSibling;
    let target = e.target.parentNode.children[1];

    if (select) {
      select.style.display = 'none';
      target.style.display = 'none';
    }
  };

  return <Search random={random} closeBtn={closeBtn} />;
};

export default SearchContainer;
