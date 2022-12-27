import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import styles from "../styles/newNotice.module.css";

import Research from "./Research";
import AboutRLRC from "./AboutRLRC";

import SearchIcon from "../static/search.png";
import downArrow from "../static/downArrow.png";
import styled from "styled-components";

const page1 = {
  content: [
    {
      id: 8,
      attachFile: null,
      title: "8",
      content: "11111",
      dateTime: "2022-12-23T16:15:32.530192",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 7,
      attachFile: null,
      title: "7",
      content: "11111",
      dateTime: "2022-12-23T16:15:28.301017",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 6,
      attachFile: null,
      title: "6",
      content: "11111",
      dateTime: "2022-12-23T16:15:24.861397",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 5,
      attachFile: null,
      title: "5",
      content: "11111",
      dateTime: "2022-12-23T16:15:21.558377",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 4,
      attachFile: null,
      title: "4",
      content: "11111",
      dateTime: "2022-12-23T16:15:17.429154",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 3,
      attachFile: null,
      title: "3",
      content: "11111",
      dateTime: "2022-12-23T16:15:14.163898",
      uploadFileName: null,
      storeFileName: null,
    },
  ],
  pageable: {
    sort: {
      empty: false,
      unsorted: false,
      sorted: true,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 6,
    paged: true,
    unpaged: false,
  },
  totalPages: 2,
  totalElements: 8,
  last: false,
  size: 6,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 6,
  first: true,
  empty: false,
};
const page2 = {
  content: [
    {
      id: 2,
      attachFile: null,
      title: "2",
      content: "11111",
      dateTime: "2022-12-23T16:15:08.896565",
      uploadFileName: null,
      storeFileName: null,
    },
    {
      id: 1,
      attachFile: null,
      title: "1111",
      content: "11111",
      dateTime: "2022-12-23T16:09:39.27916",
      uploadFileName: null,
      storeFileName: null,
    },
  ],
  pageable: {
    sort: {
      empty: false,
      unsorted: false,
      sorted: true,
    },
    offset: 6,
    pageNumber: 1,
    pageSize: 6,
    paged: true,
    unpaged: false,
  },
  totalPages: 2,
  totalElements: 8,
  last: true,
  size: 6,
  number: 1,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 2,
  first: false,
  empty: false,
};

export default function NewNotice() {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("news");
  const [posts, setPosts] = useState(page1);
  const limit = 6;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [showButton, setShowButton] = useState(
    Array(posts.numberOfElements).fill(false)
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(``);
  };
  const handleClick = (id) => {
    console.log(id);
  };
  const handleEnter = (id) => {
    let arr = Array(posts.numberOfElements).fill(false);
    arr[posts.numberOfElements - id] = !arr[posts.numberOfElements - id];
    setShowButton(arr);
  };
  const handleLeave = (id) => {
    setShowButton(Array(posts.numberOfElements).fill(false));
  };
  useEffect(() => {
    // 페이지 요청
    const pageContent = page === 1 ? page1 : page2;
    setPosts(pageContent);
  }, [page]);

  return (
    <main className={styles.main}>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <>
        <div className={styles.selectionbar}>
          <div className={styles.selection_line_white} />
          <div className={styles.selection_line_grey} />
          <ul className={styles.selectionbar_menu}>
            <Link
              to="/"
              id={styles.selectbar_content}
              className="select_rlrc"
              style={{
                textDecoration: "none",
              }}
            >
              ABOUT RLRC
            </Link>
            <Link
              to="/Research"
              id={styles.selectbar_content}
              className="slelect_research"
              style={{
                textDecoration: "none",
              }}
            >
              RESEARCH
            </Link>
            <Link
              to="/NewNotice"
              id={styles.selectbar_content}
              className="select_new_notice"
              style={{
                textDecoration: "none",
              }}
            >
              NEW & NOTICE
            </Link>
          </ul>
        </div>
        <Title>NEWS & NOTICE</Title>
        <a href="new_notice"></a>
        <NewsButton
          onClick={() => {
            setContent("news");
          }}
          content={content}
          id="new_notice"
        >
          NEWS
        </NewsButton>
        <NoticeButton
          onClick={() => {
            setContent("notice");
          }}
          content={content}
        >
          NOTICE
        </NoticeButton>
        {content === "news" ? (
          <News>
            <NoticeTitle>NEWS</NoticeTitle>
            <form onSubmit={handleSubmit}>
              <Search placeholder="검색" />
              <button onClick={handleSubmit}>
                <Icon src={SearchIcon}></Icon>
              </button>
            </form>
            <Line />
            <PaginationContainer>
              {posts.content.map((ele) => (
                <PaginationElement
                  key={ele.id}
                  onMouseEnter={() => {
                    handleEnter(ele.id);
                  }}
                  onMouseLeave={() => {
                    handleLeave(ele.id);
                  }}
                >
                  <h3
                    style={{
                      paddingLeft: "1.5em",
                      paddingRight: "1.5em",
                      marginBlockStart: 80,
                      marginBlockEnd: 0,
                      color: "#447bf7",
                    }}
                  >
                    {ele.title}
                  </h3>
                  <p
                    style={{
                      paddingLeft: "1.7em",
                      paddingRight: "1.5em",
                    }}
                  >
                    {ele.content}
                  </p>
                  {showButton[posts.content.length - ele.id] && (
                    <DetailButton
                      onClick={() => {
                        handleClick(ele.id);
                      }}
                    >
                      +
                    </DetailButton>
                  )}
                </PaginationElement>
              ))}
            </PaginationContainer>
            <footer
              style={{
                position: "relative",
                right: "50px",
                top: "2080px",
              }}
            >
              <Pagination
                total={posts.totalPages}
                page={page}
                setPage={setPage}
                pageSize={posts.size}
              />
            </footer>
          </News>
        ) : (
          <Notice>
            <NoticeTitle>NOTICE</NoticeTitle>
            <form onSubmit={handleSubmit}>
              <Search placeholder="검색" />
              <button onClick={handleSubmit}>
                <Icon src={SearchIcon}></Icon>
              </button>
            </form>
            <Line />
            <PaginationContainer>
              {posts.content.map((ele) => (
                <PaginationElement
                  key={ele.id}
                  onMouseEnter={() => {
                    handleEnter(ele.id);
                  }}
                  onMouseLeave={() => {
                    handleLeave(ele.id);
                  }}
                >
                  <h3
                    style={{
                      paddingLeft: "1.5em",
                      paddingRight: "1.5em",
                      marginBlockStart: 80,
                      marginBlockEnd: 0,
                      color: "#447bf7",
                    }}
                  >
                    {ele.title}
                  </h3>
                  <p
                    style={{
                      paddingLeft: "1.7em",
                      paddingRight: "1.5em",
                    }}
                  >
                    {ele.content}
                  </p>
                  {showButton[posts.content.length - ele.id] && (
                    <DetailButton
                      onClick={() => {
                        handleClick(ele.id);
                      }}
                    >
                      +
                    </DetailButton>
                  )}
                </PaginationElement>
              ))}
            </PaginationContainer>
            <footer
              style={{
                position: "relative",
                right: "50px",
                top: "2080px",
              }}
            >
              <Pagination
                total={posts.totalPages}
                page={page}
                setPage={setPage}
                pageSize={posts.size}
              />
            </footer>
          </Notice>
        )}
      </>
    </main>
  );
}
const Title = styled.p`
  position: absolute;
  top: 683px;
  left: 265px;
  width: 592px;
  height: 94px;
  font: var(--unnamed-font-style-normal) normal bold 80px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 80px/70px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
`;

const NewsButton = styled.button`
  position: absolute;
  top: 1080px;
  left: 0px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "news" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const NoticeButton = styled.button`
  position: absolute;
  top: 1080px;
  left: 960px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "news" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "notice" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const News = styled.div``;
const Notice = styled.main``;
const NoticeTitle = styled.p`
  position: absolute;
  top: 1376px;
  left: 420px;
  width: 97px;
  height: 33px;

  font: var(--unnamed-font-style-normal) normal bold 28px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 28px/70px Roboto;
  letter-spacing: 0px;
  color: #6a6a6a;
  text-transform: uppercase;
  opacity: 1;
`;
const Search = styled.input`
  position: absolute;
  top: 1415px;
  left: 978px;
  width: 472px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;

const Sort = styled.select`
  position: absolute;
  top: 1415px;
  left: 1330px;
  width: 288px;
  height: 46px;
  background: url(${downArrow}) #d3d3d35c no-repeat 97% 50%/25px auto;
  opacity: 1;
  border: none;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  ::-ms-expand {
    display: none;
  }
  color: #171717;
`;
const Option = styled.option`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / 30px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 16px/30px Roboto;
  letter-spacing: 0px;
  color: #171717;
  opacity: 0.7;
`;
const Line = styled.span`
  position: absolute;
  top: 1530px;
  left: 0.5px;
  width: 1920px;
  border: 1px solid #447bf7;
  background-color: #447bf7;
  opacity: 1;
`;

const PaginationContainer = styled.div`
  position: absolute;
  display: flex;
  top: 1600px;
  left: 17%;
  padding: 10px;
  width: 1500px;
  height: 700px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
`;

const PaginationElement = styled.article`
  position: relative;
  width: 300px;
  height: 300px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 22px #00000029;
  opacity: 1;
  margin-bottom: 0em;
  margin-left: 5em;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const DetailButton = styled.button`
  position: relative;
  top: 6em;
  left: 17.5em;
  width: 68px;
  height: 68px;
  background: #447bf7;
  opacity: 1;
  border: none;
`;

const Icon = styled.img`
  position: absolute;
  top: 1427px;
  left: 1435px;
  width: 25px;
  height: 25px;
`;
