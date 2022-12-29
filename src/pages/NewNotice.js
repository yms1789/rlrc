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
// const page1 = {
//   content: [
//     {
//       id: 8,
//       attachFile: null,
//       title: "8",
//       content: "11111",
//       dateTime: "2022-12-23T16:15:32.530192",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//     {
//       id: 7,
//       attachFile: null,
//       title: "7",
//       content: "11111",
//       dateTime: "2022-12-23T16:15:28.301017",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//     {
//       id: 6,
//       attachFile: null,
//       title: "6",
//       content: "11111",
//       dateTime: "2022-12-23T16:15:24.861397",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//     {
//       id: 5,
//       attachFile: null,
//       title: "5",
//       content:
//         "Quis sit reprehenderit fugiat in amet reprehenderit est exercitation incididunt. Aliqua tempor exercitation in pariatur ea non qui irure labore dolor occaecat excepteur aliqua commodo. Aliqua consectetur culpa cupidatat dolor aute officia consequat incididunt sit est consectetur consectetur. Est ullamco quis eu minim nulla id enim aute. In amet in fugiat consequat nulla. Voluptate veniam elit dolore elit sint ea cupidatat ea labore ad commodo Lorem commodo. Enim elit eu velit minim amet officia ipsum magna.Id ipsum sunt laboris labore aliquip ex aute Lorem aute esse dolore tempor. Ad reprehenderit dolore ut sint ex adipisicing officia nisi adipisicing fugiat ea labore. Dolor esse est sint nisi magna enim consectetur non.Pariatur consectetur cupidatat culpa dolor aliqua non amet velit exercitation culpa occaecat. Exercitation consequat do nostrud consequat non ea anim laborum anim cillum ut occaecat. Ipsum incididunt do cupidatat voluptate qui. Incididunt est eiusmod labore tempor exercitation dolor cillum nostrud tempor do deserunt velit nulla tempor.Labore tempor velit nulla ea adipisicing sit incididunt deserunt amet eiusmod. Ut ad laboris ut eiusmod aute. Aliquip quis duis et ea eiusmod tempor qui eiusmod esse. Consectetur excepteur ad minim commodo. Ad reprehenderit ut reprehenderit cupidatat nulla dolore non anim aliquip in. Tempor qui cillum adipisicing nostrud ex consectetur eiusmod aute ex. Elit Lorem incididunt nisi proident.",
//       dateTime: "2022-12-23T16:15:21.558377",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//     {
//       id: 4,
//       attachFile: null,
//       title: "4",
//       content: "11111",
//       dateTime: "2022-12-23T16:15:17.429154",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//     {
//       id: 3,
//       attachFile: null,
//       title: "3",
//       content: "11111",
//       dateTime: "2022-12-23T16:15:14.163898",
//       uploadFileName: null,
//       storeFileName: null,
//     },
//   ],
//   pageable: {
//     sort: {
//       empty: false,
//       unsorted: false,
//       sorted: true,
//     },
//     offset: 0,
//     pageNumber: 0,
//     pageSize: 6,
//     paged: true,
//     unpaged: false,
//   },
//   totalPages: 1,
//   totalElements: 8,
//   last: false,
//   size: 6,
//   number: 0,
//   sort: {
//     empty: false,
//     unsorted: false,
//     sorted: true,
//   },
//   numberOfElements: 6,
//   first: true,
//   empty: false,
// };
export default function NewNotice() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [curContent, setCurContent] = useState("news");
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showButton, setShowButton] = useState(
    posts ? Array(posts.numberOfElements).fill(false) : []
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
    navigate("/Detail", { state: [id, curContent] });
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
      const response = await axios.get(
        `/${content}/search/all?page=${page - 1}`
      );
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
              {posts && (
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
                      <ContentContainer>
                        <h3
                          style={{
                            textAalign: "left",
                            font: "normal normal bold 22px/28px Roboto",
                            letterSpacing: "0px",
                            color: "#447BF7",
                            opacity: 1,
                          }}
                        >
                          {ele.title}
                        </h3>
                        <span
                          style={{
                            display: "-webkit-box",
                            textAlign: "left",
                            font: "normal normal normal 16px/23px Roboto",
                            letterSpacing: "0px",
                            color: "#606060",
                            opacity: 1,
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            maxWidth: "100%",
                            textOverflow: "ellipsis",
                            lineClamp: 2,
                            height: "66px",
                          }}
                        >
                          {ele.content}
                        </span>
                      </ContentContainer>
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
              )}
            </PaginationContainer>
            {posts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2200px",
                }}
              >
                <Pagination
                  total={posts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={posts.size}
                />
              </footer>
            )}
          </News>
        ) : (
          <Notice>
            <NoticeTitle>NOTICE</NoticeTitle>
            <Search placeholder="검색" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            <Line />
            <PaginationContainer>
              {posts && (
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
                      <ContentContainer>
                        <h3
                          style={{
                            textAalign: "left",
                            font: "normal normal bold 22px/28px Roboto",
                            letterSpacing: "0px",
                            color: "#447BF7",
                            opacity: 1,
                          }}
                        >
                          {ele.title}
                        </h3>
                        <span
                          style={{
                            display: "-webkit-box",
                            textAlign: "left",
                            font: "normal normal normal 16px/23px Roboto",
                            letterSpacing: "0px",
                            color: "#606060",
                            opacity: 1,
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            maxWidth: "100%",
                            textOverflow: "ellipsis",
                            lineClamp: 2,
                            height: "66px",
                          }}
                        >
                          {ele.content}
                        </span>
                      </ContentContainer>
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
                </>
              )}
            </PaginationContainer>
            {posts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2200px",
                }}
              >
                <Pagination
                  total={posts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={posts.size}
                />
              </footer>
            )}
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
  left: 350px;
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
  left: 1078px;
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
  left: 13%;
  padding: 10px;
  width: 1500px;
  height: 800px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
`;
const ContentContainer = styled.div`
  height: 225px;
  width: 270px;
  padding: 70px 45px 64px 42px;
`;
const PaginationElement = styled.article`
  position: relative;
  width: 357px;
  height: 357px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 22px #00000029;
  opacity: 1;
  margin-bottom: 0em;
  margin-left: 5em;
  justify-content: center;
  text-align: left;
`;
const DetailButton = styled.button`
  position: relative;
  top: -5.3em;
  left: 21.8em;
  width: 68px;
  height: 68px;
  background: #447bf7;
  opacity: 1;
  border: none;
`;

const Icon = styled.img`
  position: absolute;
  top: 1427px;
  left: 1535px;
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
