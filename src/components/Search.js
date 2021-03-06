import React from 'react';
import styled from 'styled-components';

const Search = ({ random, closeBtn, search }) => {
  return (
    <>
      <Container>
        <Wrapper search={search} ref={random}>
          <Input>
            <span>
              <i className="fas fa-search"></i>
            </span>
            <input type="text" placeholder="#태그, 회사, 포지션 검색" />
          </Input>
          <Tag>
            <span>추천태그로 검색해보세요</span>
            <a href="/tag_search">
              기업태그 홈 이동하기&nbsp;&nbsp;
              <i className="fas fa-chevron-right"></i>
            </a>
          </Tag>
          <Recommand>
            <ul>
              <li>
                <button>#연봉상위2~5%</button>
              </li>
              <li>
                <button>#퇴사율5%이하</button>
              </li>
              <li>
                <button>#결혼기념일</button>
              </li>
              <li>
                <button>#원격근무</button>
              </li>
              <li>
                <button>#운동비</button>
              </li>
            </ul>
          </Recommand>
        </Wrapper>
        <Out onClick={closeBtn} search={search} />
      </Container>
    </>
  );
};

export default Search;

// Search Container
const Container = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
  background: #fff;
  z-index: 100;
`;

// Search Wrapper
const Wrapper = styled.div`
  width: 75%;
  max-width: 75%;
  margin: 0 auto;
  padding: 30px 0 100px;
  position: relative;
  background-color: #fff;
  height: 150px;
  display: ${(props) => (props.search ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// Input
const Input = styled.div`
  width: 85%;
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span:nth-child(1) {
    width: 0;
    color: #939393;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1);
    z-index: 1;

    i {
      text-indent: 50px;
    }
  }

  input {
    line-height: 50px;
    width: 100%;
    margin: 0;
    text-indent: 60px;
    border: 1px solid #f2f4f7;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #767676;
    background-color: #f2f4f7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:focus {
      border: 1px solid #36f;
      border-radius: 20px;
      color: #333;
      background-color: #fff;
      outline: none;
    }
  }
`;

// Tag
const Tag = styled.div`
  width: 85%;
  height: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  span:nth-child(1) {
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #333;
  }

  a:nth-child(2) {
    float: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #767676 !important;
  }
`;

// Recommand
const Recommand = styled.div`
  width: 85%;
  height: 1%;
  display: flex;

  li {
    float: left;
    width: auto;
  }

  button {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: 400;
    color: #333;
    border-radius: 3px;
    margin-right: 10px;
    padding: 0 26px;
    background-color: #f3f5f8;
    border-radius: 25px;
    cursor: pointer;

    @media ${(props) => props.theme.tablet} {
      padding: 0 6px;
      font-size: 14px;
      margin-right: 5px;
      border-radius: 18px;
      line-height: 20px;
      height: 40px;
    }

    @media ${(props) => props.theme.mobile} {
      padding: 0 4px;
      font-size: 10px;
      margin-right: 4px;
      border-radius: 14px;
      line-height: 0px;
      height: 35px;
    }
  }
`;

const Out = styled.div`
  content: '';
  display: ${(props) => (props.search ? 'block' : 'none')};
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  @media ${(props) => props.theme.mobile} {
    background-color: #fff;
  }
`;
