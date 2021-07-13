import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Search from '../containers/SearchContainer';
import Data from '../data/category';
import MenuData from '../data/menu';
import EtcData from '../data/etc';
import wanted from '../images/wanted.png';

const Nav = ({
  overlay,
  over,
  login,
  loginCheck,
  dom,
  logout,
  handler,
  state,
}) => {
  // console.log('=========', state.search);

  return (
    <>
      <Container ref={dom}>
        <Wrapper loginCheck={loginCheck}>
          <Collection onClick={handler}>
            <Logo loginCheck={loginCheck}>
              <LogoLink href="/" title="홈으로 이동">
                wanted
                <button onClick={login}>회원가입하기</button>
              </LogoLink>
            </Logo>
            <Menu onMouseOver={over}>
              {MenuData.map(
                (ele, index) =>
                  index < 8 && (
                    <MenuLi key={index}>
                      <StyledLink exact to={ele.address} data-kind={ele.kind}>
                        {ele.title}
                      </StyledLink>
                    </MenuLi>
                  ),
              )}
            </Menu>
            <Overlay ref={overlay} check={state.explore}>
              <OverlayContainer check={state.explore}>
                <OverlayWrapper>
                  <OverlayRow>
                    {Data.map((category) => (
                      <OverMenu key={category.name}>
                        {category.sub.map((ele, index) =>
                          index === 0 ? (
                            <a href={'/wdlist' + ele.address} key={index}>
                              <h2>
                                {ele.name}
                                <i className="fas fa-chevron-right" />
                              </h2>
                            </a>
                          ) : index !== 8 ? (
                            <a href={'/wdlist' + ele.address} key={index}>
                              <h3>{ele.name}</h3>
                            </a>
                          ) : (
                            <a href={'/wdlist' + ele.address} key={index}>
                              <h3>
                                더보기
                                <i className="fas fa-chevron-right" />
                              </h3>
                            </a>
                          ),
                        )}
                      </OverMenu>
                    ))}
                    <OverMenu>
                      {EtcData.map((ele, index) => (
                        <a href={'/wdlist' + ele.address} key={index}>
                          <h2>{ele.category}</h2>
                        </a>
                      ))}
                    </OverMenu>
                  </OverlayRow>
                </OverlayWrapper>
              </OverlayContainer>
            </Overlay>
            <Etc>
              <EtcContainer loginCheck={loginCheck} temp={state}>
                {MenuData.map((ele, index) =>
                  index > 7 && ele.icon.length > 0 ? (
                    <li key={index}>
                      <span>
                        <i className={ele.icon} data-kind={ele.kind} />
                      </span>
                    </li>
                  ) : (
                    index > 7 &&
                    ele.icon.length === 0 && (
                      <li key={index}>
                        {ele.address.length !== 0 ? (
                          <a href={ele.address} data-kind={ele.kind}>
                            {ele.title}
                          </a>
                        ) : (
                          <button data-kind={ele.kind}>{ele.title}</button>
                        )}
                      </li>
                    )
                  ),
                )}
              </EtcContainer>
              {/* <EtcContainer>
                <li>
                  <span onClick={searchBtn}>
                    <i className="fas fa-search"></i>
                  </span>
                </li>
                {!loginCheck ? (
                  <>
                    <li>
                      <button onClick={login}>회원가입</button>
                    </li>
                    <li>
                      <button onClick={login}>/&nbsp;&nbsp;&nbsp;로그인</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <span onClick={alarm}>
                        <i className="far fa-bell"></i>
                      </span>
                    </li>
                    <li>
                      <span onClick={profile}>
                        <i className="far fa-user"></i>
                      </span>
                    </li>
                  </>
                )}
                <li>
                  <a href="/dashboard">기업 서비스</a>
                </li>
                <li>
                  <button onClick={profile}>
                    <i className="fas fa-bars"></i>
                  </button>
                </li>
              </EtcContainer> */}

              {state.alarm && (
                <Dropdown1>
                  <div>
                    <ul>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status">
                          <span>
                            <p>지원</p>
                            <p>
                              제출한 이력서를 원티드 채용담당자가 확인했습니다.
                              조금만 기다려주세요.
                            </p>
                            <p>2021.07.09(금)</p>
                          </span>
                        </a>
                      </li>
                      <hr></hr>
                    </ul>
                  </div>
                  <div></div>
                </Dropdown1>
              )}
              {state.profile && (
                <Dropdown2>
                  <div>
                    <a href="/">
                      <img src={wanted} alt="logo" />
                    </a>
                    <a href="/">
                      <button>
                        <i className="fas fa-times"></i>
                      </button>
                    </a>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="/mywanted">
                          <span>MY 원티드</span>
                        </a>
                      </li>
                      <li>
                        <a href="/profile/matching">
                          <span>프로필</span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/status/applications">
                          <span>지원 현황</span>
                        </a>
                      </li>
                      <li>
                        <a href="/profile/status">
                          <span>제안받기 현황</span>
                        </a>
                      </li>
                      <li>
                        <a href="/profile/likes">
                          <span>좋아요</span>
                        </a>
                      </li>
                      <li>
                        <a href="/profile/bookmarks">
                          <span>북마크</span>
                        </a>
                      </li>
                      <hr></hr>
                      <li>
                        <a href="/referral">
                          <span>추천</span>
                        </a>
                      </li>
                      <li>
                        <a href="/profile/point">
                          <span>포인트</span>
                        </a>
                      </li>
                      <li>
                        <a href="/logout" onClick={logout}>
                          <span>로그아웃</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </Dropdown2>
              )}
            </Etc>
          </Collection>
        </Wrapper>
      </Container>
      <Space />
      <Search search={state.search} />
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
  z-index: 10;
`;

// Nav Wrapper
const Wrapper = styled.div`
  position: relative;
  max-width: 1060px;
  min-width: 272px;
  height: 50px;
  margin: 0 auto;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: ${(props) => (props.loginCheck ? '50px' : '100px')};
  }
`;

// 로고, 메뉴, 기타
const Collection = styled.nav`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    display: flex;
    justify-content: flex-start;
  }

  @media ${(props) => props.theme.mobile} {
    justify-content: space-between;
  }
`;

// 로고
const Logo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media ${(props) => props.theme.mobile} {
    width: ${(props) => (props.loginCheck ? '100%' : '100%')};
  }

  button {
    display: none;
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    border: 1px solid #36f;
    height: 34px;
    border-radius: 17px;
    padding: 0 14px;

    @media ${(props) => props.theme.mobile} {
      display: ${(props) => (props.loginCheck ? 'none' : 'flex')};
    }
  }

  a {
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      /* display: flex; */
      display: ${(props) => (props.loginCheck ? 'none' : 'flex')};
      justify-content: space-between;
      padding: 15px 5px 0;
    }
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

  &:nth-child(1) {
    display: none;
  }

  a {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    vertical-align: middle;

    @media ${(props) => props.theme.tablet} {
      padding-right: 4px !important;
      padding-left: 4px !important;
      font-size: 13px;
    }

    @media ${(props) => props.theme.mobile} {
      padding-right: 6px !important;
      padding-left: 6px !important;
      font-size: 15px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    &:nth-child(1) {
      display: inline-block;
    }

    &:nth-child(n + 4) {
      display: none;
    }
  }
`;

const activeClassName = 'nav-active';

// 메뉴 링크
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    -webkit-box-shadow: inset 0 -2px #258bf7;
    box-shadow: inset 0 -2px #258bf7;
  }

  &:hover {
    -webkit-box-shadow: inset 0 -2px #ddd;
    box-shadow: inset 0 -2px #ddd;
  }
`;

// 기타
const Etc = styled.aside`
  height: 100%;
  /* padding: 10px 0; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

// ETC - Container
const EtcContainer = styled.ul`
  height: 100%;
  width: 300px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${(props) => props.theme.tablet} {
    width: 250px;
    justify-content: left;
  }

  @media ${(props) => props.theme.mobile} {
    justify-content: flex-end;
  }

  @media ${(props) => props.theme.min} {
    width: 100px;
  }

  li {
    display: flex;
    align-items: center;
  }

  li:nth-child(1) {
    i {
      display: inline-block;
      border-radius: 60px;
      padding: 0.3em 0.4em;
      font-size: 18px;
    }
  }

  li:nth-child(2) {
    display: ${(props) => (props.loginCheck ? 'none' : 'flex')};

    span {
      i {
        display: inline-block;
        border-radius: 60px;
        padding: 0.3em 0.4em;
        font-size: 18px;
      }
    }
    button {
      @media ${(props) => props.theme.mobile} {
        display: none;
      }
    }
  }

  li:nth-child(3) {
    display: ${(props) => (props.loginCheck ? 'flex' : 'none')};

    span {
      i {
        display: inline-block;
        border-radius: 60px;
        padding: 0.3em 0.4em;
        font-size: 18px;

        color: ${(props) => (props.temp.alarm ? 'white' : '#333333')};
        background-color: ${(props) => (props.temp.alarm ? '#36f' : '#fff')};
      }
    }
  }

  li:nth-child(4) {
    display: ${(props) => (props.loginCheck ? 'flex' : 'none')};

    span {
      i {
        display: inline-block;
        border-radius: 60px;
        box-shadow: 0px 0px 2px #888;
        padding: 0.3em 0.4em;
        font-size: 18px;

        box-shadow: ${(props) =>
          props.temp.profile ? '0 0 0 2px #36f' : '0px 0px 2px #888'};
      }
    }
    /* 
    a {
      font-size: 13px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;
      margin: 0 0 0 15px;
      font-weight: 400;
    } */

    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }

  li:nth-child(5) {
    /* display: none; */

    &:before {
      display: block;
      content: '';
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }

    a {
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

    /* button {
      i {
        display: inline-block;
        border-radius: 60px;
        padding: 0.3em 0.4em;
        font-size: 18px;
        cursor: pointer;
      }
    } */

    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }

  li:nth-child(6) {
    display: none;

    i {
      display: inline-block;
      border-radius: 60px;
      padding: 0.3em 0.4em;
      font-size: 18px;
      cursor: pointer;
    }

    @media ${(props) => props.theme.mobile} {
      display: flex;
    }
  }
`;

// 알림 - 드롭다운
const Dropdown1 = styled.div`
  position: absolute;
  top: 100%;
  right: 220px;
  margin-top: 13px;
  padding: 0 !important;
  display: block;
  -webkit-transform: translate(50%, 8px);
  transform: translate(50%, 8px);

  @media ${(props) => props.theme.tablet} {
    top: 50px;
    margin-top: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    transform: none;
    left: 0;
  }

  div:nth-child(1) {
    overflow-y: auto;
    overflow-x: hidden;
    height: 600px;
    width: 350px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;

    @media ${(props) => props.theme.tablet} {
      width: 100%;
      height: 100%;
      box-shadow: none;
      border: 0;
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      a {
        width: 80%;
      }

      li {
        width: 100%;
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p:nth-child(1) {
        font-size: 12px;
        font-weight: 500;
        color: #3a68f9;
        margin-bottom: 6px;
        line-height: normal;
      }

      p:nth-child(2) {
        overflow: hidden;
        display: -webkit-box;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        font-size: 14px;
        font-weight: 500;
        color: #111;
        line-height: normal;
        margin-bottom: 7px;
      }

      p:nth-child(3) {
        font-size: 12px;
        color: #767676;
        margin-top: 4px;
        font-weight: 400;
        line-height: normal;
      }
    }

    hr {
      width: 100%;
      border-top: 1px #888;
    }
  }

  div:nth-child(2) {
    position: absolute;
    right: 34%;
    bottom: 100%;
    height: 11px;
    overflow: hidden;
    margin-bottom: -1px;
    -webkit-transform: translateX(-47px);
    transform: translateX(-47px);

    &:after {
      content: '';
      margin-top: 4px;
      border: 1px solid #cdcdcd;
      background-color: #fff;
      height: 14px;
      width: 14px;
      display: block;
      border-top-right-radius: 30%;
      -webkit-transform: rotate(-55deg) skewX(-20deg);
      transform: rotate(-55deg) skewX(-20deg);

      @media ${(props) => props.theme.tablet} {
        display: none;
      }
    }
  }
`;

// 프로필 - 드롭다운
const Dropdown2 = styled.div`
  position: absolute;
  top: 100%;
  right: 162px;
  margin-top: 13px;
  padding: 0 !important;
  display: block;
  -webkit-transform: translate(50%, 8px);
  transform: translate(50%, 8px);

  @media ${(props) => props.theme.tablet} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 0;
    -webkit-transform: none;
    transform: none;
  }

  div:nth-child(1) {
    display: none;

    @media ${(props) => props.theme.tablet} {
      display: flex;
      background-color: #fff;
      height: 10%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img {
        margin-left: 20px;
      }

      button {
        margin-right: 20px;
        color: #999;
        font-size: 22px;
      }
    }
  }

  div:nth-child(2) {
    overflow: hidden;
    height: 400px;
    width: 194px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;

    @media ${(props) => props.theme.tablet} {
      width: 100%;
      height: 80%;
      box-shadow: none;
      border: 0;
    }
  }

  div:nth-child(3) {
    position: absolute;
    right: 24%;
    bottom: 100%;
    height: 11px;
    overflow: hidden;
    margin-bottom: -1px;
    -webkit-transform: translateX(-47px);
    transform: translateX(-47px);

    &:after {
      content: '';
      margin-top: 4px;
      border: 1px solid #cdcdcd;
      background-color: #fff;
      height: 14px;
      width: 14px;
      display: block;
      border-top-right-radius: 30%;
      -webkit-transform: rotate(-55deg) skewX(-20deg);
      transform: rotate(-55deg) skewX(-20deg);

      @media ${(props) => props.theme.tablet} {
        display: none;
      }
    }
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  li {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    @media ${(props) => props.theme.tablet} {
      justify-content: left;
      margin-left: 40px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
    }
  }

  li:nth-last-child(n + 2) {
    &:hover {
      width: 90%;
      background-color: #ececec;
      border-radius: 8px;

      @media ${(props) => props.theme.tablet} {
        background-color: #fff;
        width: 100%;
      }
    }
  }

  li:nth-last-child(1) {
    background-color: #ececec;

    @media ${(props) => props.theme.tablet} {
      background-color: #fff;
    }
  }

  hr {
    width: 100%;
    border-top: 1px #888;
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
  height: ${(props) => (props.check === false ? 0 : 'auto')};
  opacity: ${(props) => (props.check === false ? 0 : 1)};
  overflow: hidden;
  transition: 0.5s;
  -webkit-transition: 0.5s;

  @media ${(props) => props.theme.mobile} {
    background-color: #fff;
    position: static;
  }
`;

// 오버레이 container
const OverlayContainer = styled.div`
  position: relative;
  height: ${(props) => (props.check === false ? '0%' : '100%')};
  max-height: 480px;
  background-color: #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

// 오버레이 wrapper
const OverlayWrapper = styled.div`
  margin: 0 auto;
  max-width: 1060px;

  &:before {
    content: ' ';
    display: table;
  }
`;

// 오버레이 - row
const OverlayRow = styled.div`
  margin-left: 10px;
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
    position: relative;
    top: 0;
    left: 40%;
    font-size: 12px;
    color: #999;
  }
`;

// 오버레이 - 메뉴
const OverMenu = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  padding: 40px 0 0 0;
  text-align: left;
`;

// Nav 크기만큼 공간 차지
const Space = styled.div`
  width: 100%;
  height: 50px;
`;
