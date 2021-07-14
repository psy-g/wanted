import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';

const NavContainer = () => {
  const dom = useRef();
  const loginCheck = window.localStorage.getItem('login');
  const [logged, setLogged] = useState();
  const [burger, setBurger] = useState();
  const [state, setState] = useState({
    explore: false,
    alarm: false,
    profile: false,
    search: false,
  });

  // 이벤트 처리
  const handler = (e) => {
    // 회원가입/로그인
    if (e.target.dataset.kind === 'login') {
      setLogged(true);
      window.localStorage.setItem('login', true);
    }

    // 알람
    if (e.target.dataset.kind === 'alarm') {
      if (state.alarm) {
        setState({ ...state, alarm: false });
      } else {
        setState({
          alarm: true,
          explore: false,
          profile: false,
          search: false,
        });
      }
    }

    // 프로필
    if (e.target.dataset.kind === 'profile') {
      if (state.profile) {
        setState({ ...state, profile: false });
      } else {
        setState({
          alarm: false,
          explore: false,
          profile: true,
          search: false,
        });
      }
    }

    // 검색
    if (e.target.dataset.kind === 'search') {
      setState({ explore: false, alarm: false, profile: false, search: true });
    }

    // 버거
    if (e.target.dataset.kind === 'mobile') {
      if (burger) {
        setBurger(false);
      } else {
        setBurger(true);
      }
    }
  };

  // 탐색 마우스오버
  const over = (e) => {
    if (e.target.innerText === '탐색') {
      setState({ explore: true, alarm: false, profile: false, search: false });
    } else {
      setState({ ...state, explore: false });
    }
  };

  // 로그아웃
  const logout = () => {
    setLogged(false);
    window.localStorage.clear();
  };

  // modify state
  const modify = (bool) => {
    setState({ ...state, search: bool });
  };

  return (
    <Nav
      over={over}
      loginCheck={loginCheck}
      logged={logged}
      logout={logout}
      dom={dom}
      handler={handler}
      state={state}
      modify={modify}
      burger={burger}
    />
  );
};

export default NavContainer;
