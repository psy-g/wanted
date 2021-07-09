import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Collection>
            <Logo>
              <LogoLink href="/" title="홈으로 이동">
                wanted
              </LogoLink>
            </Logo>
            <Menu>
              메뉴
              {/* <StyledLink exact to="/wdlist">
                탐색
              </StyledLink>
              <StyledLink exact to="/events">
                커리어 성장
              </StyledLink>
              <StyledLink exact to="/salary">
                직군별 연봉
              </StyledLink>
              <StyledLink exact to="/cv">
                이력서
              </StyledLink>
              <StyledLink exact to="/matchup">
                매치업
              </StyledLink>
              <StyledLink exact to="/gigs">
                프리랜서
              </StyledLink>
              <StyledLink exact to="/aiscore">
                Ai 합격예측
              </StyledLink> */}
            </Menu>
            <Etc>기타</Etc>
          </Collection>
        </Wrapper>
      </Container>
      <Space />
    </>
  );
};

export default Nav;

// Nav Container
const Container = styled.div`
  position: fixed;
  padding-right: initial;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

// Nav Wrapper
const Wrapper = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
`;

// 로고, 메뉴, 기타
const Collection = styled.nav`
  display: flex;
  flex-direction: row;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-wrap: wrap;
`;

// 로고
const Logo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

// 로고 링크
const LogoLink = styled.a`
  display: block;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

// 메뉴
const Menu = styled.ul`
  height: inherit;
  text-align: center;
  /* margin: 0; */
`;

const activeClassName = 'nav-active';

// 메뉴 링크
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #ff5252;
  }
  color: #fafafa;
  display: block;
  font-size: 1rem;
  text-decoration: none;
  padding-left: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

// 기타
const Etc = styled.div``;

// Nav 크기만큼 공간 차지
const Space = styled.div`
  width: 100%;
  height: 50px;
`;