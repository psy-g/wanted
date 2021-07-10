import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';

const NavContainer = () => {
  const overlay = useRef();
  const menu = useRef();
  const [check, setCheck] = useState(false);

  const over = (e) => {
    // console.log('마우스 오버');
    // console.log('target', e.target.innerText);
    // console.log('parent', menu.current.children[0].innerText);
    if (e.target.innerText === '탐색') {
      setCheck(true);
    } else {
      setCheck(false);
    }

    // overlay.current.classList.add('show');
  };

  const out = () => {
    // console.log('마우스 아웃');
    // setCheck(false);
    // overlay.current.classList.remove('show');
  };

  const menuClick = () => {
    console.log(';');
  };

  return (
    <Nav overlay={overlay} over={over} out={out} check={check} menu={menu} />
  );
};

export default NavContainer;
