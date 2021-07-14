import React from 'react';
import Burger from '../components/Burger';

const BurgerContainer = ({ burger }) => {
  const check = window.localStorage.getItem('login');

  return <Burger check={check} state={burger} />;
};

export default BurgerContainer;
