import React from 'react';
import Reduction from '../components/Reduction';

const ReductionContainer = ({ burger, logout, handler, state }) => {
  const check = window.localStorage.getItem('login');
  return (
    <Reduction
      check={check}
      burger={burger}
      logout={logout}
      handler={handler}
      profile={state.profile}
    />
  );
};

export default ReductionContainer;
