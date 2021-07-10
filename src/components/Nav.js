import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import burger from '../images/burger.png';

const Nav = ({ overlay, over, out, check, menu }) => {
  const data = {};

  console.log('check', check);

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
            <Menu onMouseOver={over} onMouseOut={out} ref={menu}>
              {/* 메뉴 */}
              <MenuLi>
                <StyledLink
                  exact
                  to="/wdlist"
                  // onMouseOver={over}
                  // onMouseOut={out}
                >
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

            <Overlay ref={overlay} check={check}>
              <OverlayContainer check={check}>
                <div className="container">
                  <div className="row">
                    <OverMenu>
                      <a>
                        <h2>영업</h2>
                        {/* <i>화살표</i> */}
                      </a>
                      <a>
                        <h3>기업영업</h3>
                      </a>
                      <a>
                        <h3>외부영업</h3>
                      </a>
                      <a>
                        <h3>영업 관리자</h3>
                      </a>
                      <a>
                        <h3>기술영업</h3>
                      </a>
                      <a>
                        <h3>주요고객사 담당자</h3>
                      </a>
                      <a>
                        <h3>솔루션 컨설턴트</h3>
                      </a>
                      <a>
                        <h3>해외영업</h3>
                      </a>
                      <a>
                        <h3>더보기</h3>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a>
                        <h2>미디어</h2>
                        {/* <i>화살표</i> */}
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a>
                        <h2>인사</h2>
                        {/* <i>화살표</i> */}
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a>
                        <h2>게임 제작</h2>
                        {/* <i>화살표</i> */}
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a>
                        <h2>금융</h2>
                        {/* <i>화살표</i> */}
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a>
                        <h2>금융</h2>
                      </a>
                      <a>
                        <h2>물류·무역</h2>
                      </a>
                      <a>
                        <h2>제조·생산</h2>
                      </a>
                      <a>
                        <h2>의료·제작·바이오</h2>
                      </a>
                      <a>
                        <h2>교육</h2>
                      </a>
                      <a>
                        <h2>법률·법집행기관</h2>
                      </a>
                      <a>
                        <h2>식·음료</h2>
                      </a>
                      <a>
                        <h2>건설·시설</h2>
                      </a>
                      <a>
                        <h2>공공·복지</h2>
                      </a>
                    </OverMenu>
                  </div>
                </div>
              </OverlayContainer>
            </Overlay>
            {/* {check ? <></> : <NoOverLay />} */}
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

  /* &:after {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    content: '';
  } */
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

// 오버레이
const Overlay = styled.div`
  display: block !important;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  /* height: auto; */
  height: ${(props) => (props.check === false ? 0 : 'auto')};
  /* opacity: 1; */
  opacity: ${(props) => (props.check === false ? 0 : 1)};
  overflow: hidden;
  transition: 0.5s;
  -webkit-transition: 0.5s;

  .container {
    margin: 0 auto;
    max-width: 1060px;

    &:before {
      content: ' ';
      display: table;
    }
  }

  .row {
    margin-left: -10px;
    margin-right: -20px;

    &:before {
      content: ' ';
      display: table;
    }

    h2 {
      position: relative;
      font-size: 17px;
      color: #333;
      line-height: 20px;
      vertical-align: top;
      padding-right: 20px;
      padding-bottom: 15px;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    h3 {
      position: relative;
      font-size: 13px;
      color: #999;
      padding: 5px 20px 5px 0;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    i {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 20px;
      color: #999;
    }
  }
`;

// 오버레이 container
const OverlayContainer = styled.div`
  position: relative;
  /* height: 0%; */
  height: ${(props) => (props.check === false ? '0%' : '100%')};
  max-height: 625px;
  background-color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

// 오버레이 - 메뉴
const OverMenu = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  /* padding: 40px 20px 0 0; */
  padding: 40px 0 0 0;
  text-align: left;
`;

const NoOverLay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  height: 0;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;

// Nav 크기만큼 공간 차지
const Space = styled.div`
  width: 100%;
  height: 50px;
`;
