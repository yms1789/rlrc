import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import styles from "../styles/newNotice.module.css";
import axios from "axios";

import SearchIcon from "../static/search.png";
import styled from "styled-components";

const page1 = {
  content: [
    {
      id: 1,
      attachFile: null,
      title: "8",
      content: "11111",
      dateTime: "2022-12-23T16:15:32.530192",
      uploadFileName: null,
      storeFileName: null,
    },
  ],
  numberOfElements: 1,
};

export default function NewNotice() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [curContent, setCurContent] = useState("news");
  const [posts, setPosts] = useState(page1);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showButton, setShowButton] = useState(
    Array(posts.numberOfElements).fill(false)
  );
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/${curContent}/search/title?word=${encodeURIComponent(searchText)}`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (id) => {
    navigate("/Detail", { state: [id, curContent, page1] });
  };
  const handleEnter = (id) => {
    let arr = Array(posts.numberOfElements).fill(false);
    arr[posts.numberOfElements - id] = !arr[posts.numberOfElements - id];
    setShowButton(arr);
  };
  const handleLeave = (id) => {
    setShowButton(Array(posts.numberOfElements).fill(false));
  };
  const getNewNotice = async (content) => {
    try {
      const response = await axios.get(`/${content}/search/all`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    // 페이지 요청
    getNewNotice(curContent);
  }, [curContent, page]);

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
        <NewsButton
          onClick={() => {
            setCurContent("news");
          }}
          content={curContent}
          id="new_notice"
        >
          NEWS
        </NewsButton>
        <NoticeButton
          onClick={() => {
            setCurContent("notice");
          }}
          content={curContent}
        >
          NOTICE
        </NoticeButton>
        {curContent === "news" ? (
          <News>
            <NoticeTitle>NEWS</NoticeTitle>
            <Search placeholder="검색" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            <Line />
            <PaginationContainer>
              {posts !== null ? (
                <>
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
                          <p
                            style={{
                              color: "white",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                          >
                            +
                          </p>
                        </DetailButton>
                      )}
                    </PaginationElement>
                  ))}
                </>
              ) : (
                <></>
              )}
            </PaginationContainer>
            {posts !== null ? (
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
            ) : (
              <></>
            )}
          </News>
        ) : (
          <Notice>
            <NoticeTitle>NOTICE</NoticeTitle>
            <Search placeholder="검색" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
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
                  <p
                    style={{
                      paddingLeft: "1.7em",
                      paddingRight: "1.5em",
                    }}
                  >
                    {ele.dateTime}
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
const StyledLink = styled((props) => <Link {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
