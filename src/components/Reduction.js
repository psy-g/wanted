import React from 'react';
import styled from 'styled-components';
import wanted from '../images/wanted.png';

const Reduction = ({ check, burger, logout, handler, profile }) => {
  return (
    <Container burger={burger} profile={profile.toString()}>
      <Wrapper>
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
        {check ? (
          <ul>
            <li>
              <a href="/mywanted">
                <span>MY 원티드</span>
              </a>
            </li>
            <li>
              <a href="/cv">
                <span>이력서</span>
              </a>
            </li>
            <hr></hr>
            <li>
              <a href="/profile">
                <span>매치업</span>
              </a>
            </li>
            <li>
              <a href="/referral">
                <span>추천</span>
              </a>
            </li>
            <li>
              <a href="/applications">
                <span>지원 현황</span>
              </a>
            </li>
            <li>
              <a href="/experts">
                <span>프리랜서</span>
              </a>
            </li>
            <hr></hr>
            <li>
              <a href="/salary">
                <span>직군별 연봉</span>
              </a>
            </li>
            <li>
              <a href="/event">
                <span>커리어 성장</span>
              </a>
            </li>
            <li>
              <a href="/events">
                <span>기업 서비스</span>
              </a>
            </li>
            <li>
              <a href="/logout" onClick={logout}>
                <span>로그아웃</span>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/">
                <span data-kind="login" onClick={handler}>
                  로그인
                </span>
              </a>
            </li>
            <li>
              <a href="/cv">
                <span>이력서</span>
              </a>
            </li>
            <hr></hr>
            <li>
              <a href="/profile">
                <span>매치업</span>
              </a>
            </li>
            <li>
              <a href="/referral">
                <span>추천</span>
              </a>
            </li>
            <li>
              <a href="/applications">
                <span>지원 현황</span>
              </a>
            </li>
            <li>
              <a href="/experts">
                <span>프리랜서</span>
              </a>
            </li>
            <hr></hr>
            <li>
              <a href="/salary">
                <span>직군별 연봉</span>
              </a>
            </li>
            <li>
              <a href="/event">
                <span>커리어 성장</span>
              </a>
            </li>
            <li>
              <a href="/events">
                <span>기업 서비스</span>
              </a>
            </li>
          </ul>
        )}
      </Wrapper>
    </Container>
  );
};

export default Reduction;

// Container
const Container = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin-top: 0;
  -webkit-transform: none;
  transform: none;
  z-index: 1000;
  background-color: #fff;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    display: ${(props) =>
      props.profile === 'true' || props.burger ? 'flex' : 'none'};
  }
`;

// Wrapper
const Wrapper = styled.div`
  display: flex;
  box-shadow: none;
  z-index: 1;
  width: 88%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  flex-direction: column;

  div:nth-child(1) {
    height: 8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    i {
      font-size: 20px;
    }
  }

  ul {
    margin-top: 30px;
  }

  li {
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
    margin-top: 25px;
    margin-bottom: 25px;

    &:nth-last-child(1) {
      span {
        color: #999;
      }
    }
  }
`;
