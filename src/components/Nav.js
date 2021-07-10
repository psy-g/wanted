import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Search from '../containers/SearchContainer';

const Nav = ({
  overlay,
  over,
  check,
  menu,
  login,
  logged,
  profile,
  alarm,
  toggle1,
  dropdown2,
  toggle2,
  logout,
  dom,
  searchBtn,
}) => {
  // const data = {};
  return (
    <>
      <Container ref={dom}>
        <Wrapper>
          <Collection>
            <Logo>
              <LogoLink href="/" title="홈으로 이동">
                wanted
                <button>회원가입하기</button>
              </LogoLink>
            </Logo>
            <Menu onMouseOver={over} ref={menu}>
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

            <Overlay ref={overlay} check={check}>
              <OverlayContainer check={check}>
                {/* <div className="container"> */}
                <OverlayWrapper>
                  <OverlayRow>
                    <OverMenu>
                      <a href="/wdlist/530">
                        <h2>
                          영업
                          <i className="fas fa-chevron-right"></i>
                        </h2>
                      </a>
                      <a href="/wdlist/530/1036">
                        <h3>기업영업</h3>
                      </a>
                      <a href="/wdlist/530/766">
                        <h3>외부영업</h3>
                      </a>
                      <a href="/wdlist/530/954">
                        <h3>영업 관리자</h3>
                      </a>
                      <a href="/wdlist/530/770">
                        <h3>기술영업</h3>
                      </a>
                      <a href="/wdlist/530/768">
                        <h3>주요고객사 담당자</h3>
                      </a>
                      <a href="/wdlist/530/1035">
                        <h3>솔루션 컨설턴트</h3>
                      </a>
                      <a href="/wdlist/530/955">
                        <h3>해외영업</h3>
                      </a>
                      <a href="/wdlist/530">
                        <h3>
                          더보기
                          <i className="fas fa-chevron-right"></i>
                        </h3>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a href="/wdlist/524">
                        <h2>
                          미디어
                          <i className="fas fa-chevron-right"></i>
                        </h2>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a href="/wdlist/517">
                        <h2>
                          인사
                          <i className="fas fa-chevron-right"></i>
                        </h2>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a href="/wdlist/959">
                        <h2>
                          게임 제작
                          <i className="fas fa-chevron-right"></i>
                        </h2>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a href="/wdlist/513">
                        <h2>
                          금융
                          <i className="fas fa-chevron-right"></i>
                        </h2>
                      </a>
                    </OverMenu>
                    <OverMenu>
                      <a href="/wdlist/513">
                        <h2>엔지니어링·설계</h2>
                      </a>
                      <a href="/wdlist/532">
                        <h2>물류·무역</h2>
                      </a>
                      <a href="/wdlist/522">
                        <h2>제조·생산</h2>
                      </a>
                      <a href="/wdlist/515">
                        <h2>의료·제작·바이오</h2>
                      </a>
                      <a href="/wdlist/10101">
                        <h2>교육</h2>
                      </a>
                      <a href="/wdlist/521">
                        <h2>법률·법집행기관</h2>
                      </a>
                      <a href="/wdlist/10057">
                        <h2>식·음료</h2>
                      </a>
                      <a href="/wdlist/509">
                        <h2>건설·시설</h2>
                      </a>
                      <a href="/wdlist/514">
                        <h2>공공·복지</h2>
                      </a>
                    </OverMenu>
                  </OverlayRow>
                </OverlayWrapper>
                {/* </div> */}
              </OverlayContainer>
            </Overlay>
            <Etc>
              <EtcContainer>
                <li>
                  <span onClick={searchBtn}>
                    <i className="fas fa-search"></i>
                  </span>
                </li>
                {/* {!logged && (
                  <li>
                    <button onClick={login}>회원가입/로그인</button>
                  </li>
                )} */}
                {!logged ? (
                  <>
                    <li>
                      <button onClick={login}>
                        회원가입&nbsp;&nbsp;&nbsp;/
                      </button>
                    </li>
                    <li>
                      <button onClick={login}>로그인</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <span onClick={alarm}>
                        <i className="far fa-bell"></i>
                      </span>
                      {/* {toggle1 && (
                        <Dropdown1>
                          <div>
                            <ul>
                              <li>알림창</li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                          <div></div>
                        </Dropdown1>
                      )} */}
                    </li>
                    <li>
                      <span onClick={profile}>
                        <i className="far fa-user"></i>
                      </span>
                      {/* {toggle2 && (
                        <Dropdown2>
                          <div>
                            <ul>
                              <li>
                                <a href="/mywanted">
                                  <span>MY 원티드</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>프로필</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>지원 현황</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>제안받기 현황</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>좋아요</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>북마크</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>추천</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>포인트</span>
                                </a>
                              </li>
                              <li>
                                <a href="/mywanted">
                                  <span>로그아웃</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div></div>
                        </Dropdown2>
                      )} */}
                    </li>
                  </>
                )}
                <li>
                  <a href="/dashboard">기업 서비스</a>
                </li>
                <li>
                  <button>
                    <i className="fas fa-bars"></i>
                  </button>
                </li>
              </EtcContainer>
              {toggle1 && (
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
              {toggle2 && (
                <Dropdown2>
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
      {/* {search && <Search />} */}
      <Search />
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

  li {
    display: flex;
    align-items: center;
  }

  li:nth-child(1) {
    span {
      i {
        display: inline-block;
        border-radius: 60px;
        padding: 0.3em 0.4em;
        font-size: 18px;
      }
    }
  }

  li:nth-child(2) {
    span {
      i {
        display: inline-block;
        border-radius: 60px;
        padding: 0.3em 0.4em;
        font-size: 18px;
      }
    }
  }

  li:nth-child(3) {
    span {
      i {
        display: inline-block;
        border-radius: 60px;
        box-shadow: 0px 0px 2px #888;
        padding: 0.3em 0.4em;
        font-size: 18px;
      }
    }
  }

  li:nth-child(4) {
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
  }

  li:nth-child(5) {
    display: none !important;

    button {
      i {
        display: inline-block;
        border-radius: 60px;
        box-shadow: 0px 0px 2px #888;
        padding: 0.3em 0.4em;
        font-size: 18px;
      }
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

  div:nth-child(1) {
    overflow: hidden;
    height: 400px;
    width: 194px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;
  }

  div:nth-child(2) {
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
  }

  li:nth-last-child(n + 2) {
    &:hover {
      width: 90%;
      background-color: #ececec;
      border-radius: 8px;
    }
  }

  li:nth-last-child(1) {
    background-color: #ececec;
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
  /* height: auto; */
  height: ${(props) => (props.check === false ? 0 : 'auto')};
  /* opacity: 1; */
  opacity: ${(props) => (props.check === false ? 0 : 1)};
  overflow: hidden;
  transition: 0.5s;
  -webkit-transition: 0.5s;
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
    /* position: absolute; */
    position: relative;
    top: 0;
    /* right: 0; */
    left: 40%;
    /* font-size: 20px; */
    font-size: 12px;
    color: #999;
  }
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

// Nav 크기만큼 공간 차지
const Space = styled.div`
  width: 100%;
  height: 50px;
`;
