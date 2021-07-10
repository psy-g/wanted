import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import burger from '../images/burger.png';

const Nav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Collection>
            <Logo>
              <LogoLink href="/" title="홈으로 이동">
                wanted
                <button>회원가입하기</button>
              </LogoLink>
            </Logo>
            <Menu>
              {/* 메뉴 */}
              <MenuLi>
                <StyledLink exact to="/wdlist">
                  탐색
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/events">
                  커리어 성장
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/salary">
                  직군별 연봉
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/cv">
                  이력서
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/matchup">
                  매치업
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/gigs">
                  프리랜서
                </StyledLink>
              </MenuLi>
              <MenuLi>
                <StyledLink exact to="/aiscore">
                  Ai 합격예측
                </StyledLink>
              </MenuLi>
            </Menu>
            <Etc>
              <ul>
                <li>
                  <button>검색</button>
                </li>
                <li>
                  <button>회원가입/로그인</button>
                </li>
                <li>
                  <a href="/dashboard">기업 서비스</a>
                </li>
                <li>
                  <button>모바일</button>
                </li>
              </ul>
            </Etc>
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

  // break-point
  margin: 0 auto;
`;

// 로고, 메뉴, 기타
const Collection = styled.nav`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// 로고
const Logo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  button {
    display: none;
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    border: 1px solid #36f;
    height: 34px;
    border-radius: 17px;
    padding: 0 14px;
  }
`;

// 로고 링크
const LogoLink = styled.a`
  display: block;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

// 메뉴 ul
const Menu = styled.ul`
  height: inherit;
  text-align: center;
  margin: 0;
`;

// 메뉴 li
const MenuLi = styled.li`
  display: inline-block;
  height: inherit;

  a {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    vertical-align: middle;
  }
`;

const activeClassName = 'nav-active';

// 메뉴 링크
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    -webkit-box-shadow: inset 0 -2px #258bf7;
    box-shadow: inset 0 -2px #258bf7;
  }
`;

// 기타
const Etc = styled.aside`
  height: 100%;
  padding: 10px 0;

  ul {
    height: 100%;
    margin: 0;

    li {
      position: relative;
      display: inline-block;
      height: 100%;
      vertical-align: middle;

      button {
        position: relative;
        margin-top: 5px;
        font-weight: 600;
        line-height: 1;
        padding: 0 10px;
        height: 100%;
        margin-right: 6px;
      }

      a {
        display: inline-block;
        vertical-align: bottom;
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin: 0 0 0 15px;
        font-weight: 400;
      }

      &:nth-child(3) {
        display: inline-flex;

        &:before {
          display: block;
          content: '';
          width: 1px;
          height: 10px;
          background-color: #e1e2e3;
          margin: auto 10px;
        }
      }

      &:nth-child(4) {
        display: none !important;
        button {
          margin-right: 10px;
          padding-left: 10px;
        }
      }
    }
  }
`;

// Nav 크기만큼 공간 차지
const Space = styled.div`
  width: 100%;
  height: 50px;
`;
