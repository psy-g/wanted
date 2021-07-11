import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';

const NavContainer = () => {
  const overlay = useRef();
  const dom = useRef();
  const [check, setCheck] = useState(false);
  const [logged, setLogged] = useState();
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const over = (e) => {
    if (e.target.innerText === '탐색') {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  // 회원가입/로그인
  const login = () => {
    setLogged(true);
  };

  // 로그아웃
  const logout = () => {
    setLogged(false);
  };

  // 알림
  const alarm = (e) => {
    let select = e.target;
    setCheck(false);
    setToggle2(false);

    if (toggle1) {
      setToggle1(false);
      select.style.color = '#333333';
      select.style.backgroundColor = '#fff';
    } else {
      setToggle1(true);
      select.style.color = 'white';
      select.style.backgroundColor = '#36f';
    }
  };

  // 프로필
  const profile = (e) => {
    let select = e.target;
    setCheck(false);
    setToggle1(false);

    if (toggle2) {
      setToggle2(false);
      select.style.boxShadow = '0px 0px 2px #888';
    } else {
      setToggle2(true);
      select.style.boxShadow = '0 0 0 2px #36f';
    }
  };

  // 검색
  const searchBtn = () => {
    let target1 = dom.current.parentElement.children[2].children[0];
    let target2 = dom.current.parentElement.children[2].children[1];
    target1.style.display = 'flex';
    target2.style.display = 'block';
  };

  return (
    <Nav
      overlay={overlay}
      over={over}
      check={check}
      login={login}
      logged={logged}
      profile={profile}
      alarm={alarm}
      toggle1={toggle1}
      toggle2={toggle2}
      logout={logout}
      dom={dom}
      searchBtn={searchBtn}
    />
  );
};

export default NavContainer;
