import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import styles from "../styles/newNotice.module.css";
import axios from "axios";
import SearchIcon from "../static/search.png";
import FormEditor from "../components/FormEditor";
import { useNavigate } from "react-router-dom";
const page1 = {
  content: [],
};

export default function NewNoticeAdmin() {
  const navigate = useNavigate();
  const [curContent, setCurContent] = useState("news");
  const [posts, setPosts] = useState(page1);
  const [page, setPage] = useState(1);
  const [deleteContent, setDeleteContent] = useState(false);
  const [addNews, setAddNews] = useState(false);
  const [addNotice, setAddNotice] = useState(false);
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
    console.log(id);
  };
  const handleAddNews = () => {
    setAddNews(true);
  };
  const handleAddNotice = () => {
    setAddNotice(true);
  };
  const handleEnter = (id) => {
    let arr = Array(posts.numberOfElements).fill(false);
    arr[posts.numberOfElements - id] = !arr[posts.numberOfElements - id];
    setShowButton(arr);
  };
  const handleLeave = (id) => {
    setShowButton(Array(posts.numberOfElements).fill(false));
  };
  const handleDelete = () => {
    setDeleteContent(!deleteContent);
  };
  const handleDeleteContent = async (id, content) => {
    console.log(id, content);
    try {
      const response = await axios.delete(`/admin/${content}/${id}`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      navigate("/NewNoticeAdmin");
    }, 100);
  };
  const getNewNotice = async (content) => {
    try {
      const response = await axios.get(`/${content}/search/all`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // 페이지 요청
    getNewNotice(curContent);
  }, [curContent, page, posts]);

  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <main className={styles.main}>
      <>
        <Title>NEWS & NOTICE</Title>
        <NewsButton
          onClick={() => {
            setCurContent("news");
            setAddNews(false);
            setAddNotice(false);
            setDeleteContent(false);
          }}
          content={curContent}
          id="new_notice"
        >
          NEWS
        </NewsButton>
        <NoticeButton
          onClick={() => {
            setCurContent("notice");
            setAddNews(false);
            setAddNotice(false);
            setDeleteContent(false);
          }}
          content={curContent}
        >
          NOTICE
        </NoticeButton>
        {curContent === "news" ? (
          addNews === false ? (
            <News>
              <NoticeTitle>NEWS</NoticeTitle>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSearch}></Icon>
              <ButtonContainer>
                <Button value="add" onClick={handleAddNews}>
                  추가
                </Button>
                <Button value="delete" onClick={handleDelete}>
                  삭제
                </Button>
              </ButtonContainer>
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
                        {deleteContent && (
                          <DeleteButton
                            onClick={() => handleDeleteContent(ele.id, "news")}
                          >
                            X
                          </DeleteButton>
                        )}
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
                        {showButton[posts.content.length - ele.id] === true ? (
                          !deleteContent && (
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
                          )
                        ) : (
                          <></>
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
                    top: "2280px",
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
            <Editor>
              <FormEditor
                addContents={addNews}
                setAddContents={setAddNews}
                content="news"
              />
            </Editor>
          )
        ) : addNotice === false ? (
          <Notice>
            <NoticeTitle>NOTICE</NoticeTitle>
            <Search placeholder="검색" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            <ButtonContainer>
              <Button value="add" onClick={handleAddNotice}>
                추가
              </Button>
              <Button value="delete" onClick={handleDelete}>
                삭제
              </Button>
            </ButtonContainer>
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
                      {deleteContent && (
                        <DeleteButton
                          onClick={() => handleDeleteContent(ele.id, "notice")}
                        >
                          X
                        </DeleteButton>
                      )}
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
                      {showButton[posts.content.length - ele.id] === true ? (
                        !deleteContent && (
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
                        )
                      ) : (
                        <></>
                      )}
                    </PaginationElement>
                  ))}
                </>
              ) : (
                <></>
              )}
            </PaginationContainer>
            {posts !== null ? (
              <>
                <footer
                  style={{
                    position: "relative",
                    right: "50px",
                    top: "2280px",
                  }}
                >
                  <Pagination
                    total={posts.totalPages}
                    page={page}
                    setPage={setPage}
                    pageSize={posts.size}
                  />
                </footer>
              </>
            ) : (
              <></>
            )}
          </Notice>
        ) : (
          <Editor>
            <FormEditor
              addContents={addNotice}
              setAddContents={setAddNotice}
              content="notice"
            />
          </Editor>
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
const DeleteButton = styled.button`
  position: relative;
  top: -0.8rem;
  left: 17.6rem;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
  z-index: 2;
`;
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
  left: 578px;
  width: 520px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 88.2em;
  left: 74em;
  width: 18em;
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  /* background-color: pink; */
  background-color: transparent;
  color: gray;
  font-size: 1rem;
  /* border: */
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  /* border: none; */
  /* box-shadow: 5px 5px 22px #00000029; */
  &:hover {
    color: ${(props) => (props.value === "add" ? "#414ffd" : "red")};
  }
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
  display: flex;
  position: absolute;
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
  top: 1423px;
  left: 1080px;
  width: 30px;
  height: 30px;
`;

const Editor = styled.div`
  position: absolute;
  top: 90em;
  left: 28em;
  height: 800px;
  width: 1920px;
  margin-bottom: 2em;
`;
