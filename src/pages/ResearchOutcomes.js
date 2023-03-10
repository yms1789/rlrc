import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../styles/researchOutcomes.module.css";
import SearchIcon from "../static/search.png";
import axios from "axios";
import Pagination from "../components/Pagination";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";
import Navbar from "../components/Navbar";
/*
const sampleThesis = {
  content: [
    {
      id: 19,
      no: 19,
      year: 2020,
      title: "Modern Catalysts in A3- Coupling Reactions",
      authors: "Ali Ramazani, Hamideh Ahankar, Zahra T. Nafeh, Sang W. Joo",
      journal: "CURRENT ORGANIC CHEMISTRY",
      iif: 2.029,
      jcr: 54.0,
      doi: "10.2174/1385272823666191113160643",
    },
    {
      id: 18,
      no: 18,
      year: 2019,
      title: "Seismic phononic crystals by elastodynamic Navier equation",
      authors: "Lee, Dongwoo, Joo Hwan Oh, In Seok Kang, Junsuk Rho",
      journal: "PHYSICAL REVIEW E",
      iif: 2.353,
      jcr: 12.0,
      doi: "10.1103/PhysRevE.100.063002",
    },
    {
      id: 17,
      no: 17,
      year: 2019,
      title:
        "Observation of enhanced optical spin hall effect in a vertical hyperbolic metamaterial",
      authors:
        "Dasol Lee, Tae Hak Kim, Younghwan Yang, Hui Joon Park, Minkyung Kim,  Junsuk Rho",
      journal: "ACS Photonics",
      iif: 7.143,
      jcr: 6.0,
      doi: "10.1021/acsphotonics.9b00904.",
    },
    {
      id: 16,
      no: 16,
      year: 2019,
      title:
        "Spectrally sharp plasmon resonances in near-infrared:subwavel ength coreshell nanoparticles",
      authors: "Jungho Mun, Sunae So, Junsuk Rho",
      journal: "Physical Review\nApplied",
      iif: 4.532,
      jcr: 17.0,
      doi: "10.1103/PhysRevApplied.12.044072",
    },
    {
      id: 15,
      no: 15,
      year: 2019,
      title:
        "Wavelength-decoupled geometric metasurfaces by arbitrary dispersion control",
      authors:
        "Jeonghyun Kim, Jungho Mun , Dasol Lee, Gwanho Yoon,Junsuk Rho\n, Ki Tae Nam ",
      journal: "Communication\nPhysics",
      iif: null,
      jcr: null,
      doi: "10.1038/s42005-019-0232-7",
    },
    {
      id: 14,
      no: 14,
      year: 2019,
      title: "Twisted non-diffracting beams through all dielectric meta-axicon",
      authors:
        "Heonyeong Jeong,  Inki Kim, Muhammad Qasim Mehmood, Muhammad Zubair, Ali Akbar, Murtaza Saleem, Muhammad Sabieh Anwar, Farooq Ahmad Tahir, Nasir Mahmood, Junsuk Rho",
      journal: "Nanoscale",
      iif: 6.97,
      jcr: 12.0,
      doi: "10.1039/C9NR04888J",
    },
    {
      id: 13,
      no: 13,
      year: 2019,
      title: "Metasurface zone plate: light manipulation in vectorial regime",
      authors:
        "Gwanho Yoon, Junsuk Rho,  Jaehyuck Jang,Jungho Mun, Ki Tae Nam ",
      journal: "COMMUNICATIONS PHYSICS",
      iif: null,
      jcr: null,
      doi: "10.1038/s42005-019-0258-x",
    },
    {
      id: 12,
      no: 12,
      year: 2020,
      title:
        "Performance Enhancement of a\nQuartz Tuning Fork Sensor\nusing a Cellulose\nNanocrystal-Reinforced\nNanoporous Polymer Fiber",
      authors: "Wuseok Kim, Sangmin Jeon, Eunjin Park",
      journal: "SENSORS",
      iif: 3.031,
      jcr: 24.0,
      doi: "10.3390/s20020437",
    },
    {
      id: 11,
      no: 11,
      year: 2020,
      title:
        "Facile Fabrication of a Highly Efficient Moisture-Driven Power Generator using Laser-Induced Graphitization under Ambient Conditions",
      authors: "Sanghee Lee, Sangmin Jeon, Jakyung Eun",
      journal: "Nano\nEnergy",
      iif: 15.548,
      jcr: 4.0,
      doi: "10.1016/j.nanoen.2019.104364",
    },
    {
      id: 10,
      no: 10,
      year: 2019,
      title:
        "Asymmetric Encoder-Decoder Structured FCN Based LiDAR to Color Image Generation",
      authors: "Hyun-Koo Kim, Kook-Yeol Yoo, Ju H. Park, Ho-Youl Jung",
      journal: "SENSORS",
      iif: 3.031,
      jcr: 24.0,
      doi: "10.3390/s19214818",
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
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  totalPages: 2,
  totalElements: 19,
  last: false,
  size: 10,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 10,
  first: true,
  empty: false,
};
const samplePatent = {
  content: [
    {
      id: 24,
      no: 24,
      date: "20220113",
      submit: "PCT ??????",
      title:
        "??????????????? ????????? ????????? ????????? ????????? ????????? ??? ?????? ????????????(Low-loss hydrogenated amorphous silicon transparent to visible light and Manufacturing method thereof)",
      author: "?????????, ?????????, ?????????",
    },
    {
      id: 23,
      no: 23,
      date: "2022.06.03",
      submit: "??????",
      title:
        "?????? ?????? ????????? ????????? ????????? ?????? ??????????????? ??? ??????\n?????? ??? ????????? ?????? ?????? ?????? ??????",
      author: "?????????, ?????????, ?????????",
    },
    {
      id: 22,
      no: 22,
      date: "2022. 06. 20",
      submit: "??????",
      title: "????????? ???????????? ?????? ?????? ????????? ???????????? ?????? ??? ?????? ????????????",
      author: "?????????, ?????????",
    },
    {
      id: 21,
      no: 21,
      date: "2021",
      submit: "??????",
      title: "???????????? ????????? ?????? ?????? ?????? ?????? ??? ??????",
      author: "?????????, ?????????, ?????????, ?????????",
    },
    {
      id: 20,
      no: 20,
      date: "2021.12.16",
      submit: "??????",
      title: "???????????? ????????? ??????????????? ???????????? ?????? ????????????",
      author: "?????????\n?????????\n?????????\n?????????",
    },
    {
      id: 19,
      no: 19,
      date: "2021",
      submit: "??????",
      title:
        "???????????? ????????? ???????????? ?????? ????????? ??????????????? ???????????? ?????? ??? ?????? ?????? ????????? ???\n???",
      author: "?????????, ?????????, ?????????",
    },
    {
      id: 18,
      no: 18,
      date: "20210428",
      submit: "??????",
      title: "??????????????? ???????????? ?????? ?????? ??? ?????? ???????????? ???????????? ??????",
      author: "?????????, ?????????, ?????????, ?????????",
    },
    {
      id: 17,
      no: 17,
      date: "20210401",
      submit: "??????",
      title:
        "IGZO(Indium-Gallium-Zinc-Oxide)??? ???????????? ???????????? ??? ?????? ????????????",
      author: "?????????, ?????????, ?????????, ?????????",
    },
    {
      id: 16,
      no: 16,
      date: "20210331",
      submit: "??????",
      title: "?????? ????????? ????????? ????????????",
      author: "?????????, ?????????, ?????????",
    },
    {
      id: 15,
      no: 15,
      date: "20210317",
      submit: "??????",
      title: "??????????????? ????????? ????????? ????????? ????????? ????????? ??? ?????? ????????????",
      author: "?????????, ?????????, ?????????",
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
    pageSize: 10,
    paged: true,
    unpaged: false,
  },
  totalPages: 3,
  totalElements: 24,
  last: false,
  size: 10,
  number: 0,
  sort: {
    empty: false,
    unsorted: false,
    sorted: true,
  },
  numberOfElements: 10,
  first: true,
  empty: false,
};
*/

export default function ResearchOutcomes() {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState("thesis");
  const [searchText, setSearchText] = useState("");
  // const [years, setYears] = useState(null);
  const [thesisPosts, setThesisPosts] = useState(null);
  const [patentPosts, setPatentPosts] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `/${content.toLowerCase()}/search/title?word=${encodeURIComponent(
          searchText
        )}`
      );
      content === "thesis"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeSearch = (event) => {
    setSearchText(event.target.value);
  };

  const getThesisPatent = async (content) => {
    try {
      const response = await axios.get(
        `/${content}/search/all?page=${page - 1}`
      );
      content === "thesis"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getThesisPatentSearch = async (content) => {
    try {
      const response = await axios.get(
        `/${content.toLowerCase()}/search/title?word=${encodeURIComponent(
          searchText
        )}`
      );
      content === "thesis"
        ? setThesisPosts(response.data)
        : setPatentPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // const getThesisPatentYear = async (content) => {
  //   try {
  //     const response = await axios.get(`/${content}/year`);
  //     setYears(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // // ????????? ??????
    // const pageContent = page === 1 ? page1 : page2;
    searchText ? getThesisPatentSearch(content) : getThesisPatent(content);
    // getThesisPatentYear(content);
  }, [content, page]);

  return (
    <main className={styles.main}>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <div className={styles.selectionbar}>
        <div className={styles.selection_line_white} />
        <div className={styles.selection_line_grey} />
        <ul className={styles.selectionbar_menu}>
          <StyledLink
            to="/AboutRLRC"
            id={styles.selectbar_content}
            className="select_rlrc"
            style={{
              textDecoration: "none",
            }}
          >
            ABOUT RLRC
          </StyledLink>
          <StyledLink
            to="/Research"
            id={styles.selectbar_content}
            className="slelect_research"
            style={{
              textDecoration: "none",
            }}
          >
            RESEARCH
          </StyledLink>
          <StyledLink
            to="/NewNotice"
            id={styles.selectbar_content}
            className="select_new_notice"
            style={{
              textDecoration: "none",
            }}
          >
            NEW & NOTICE
          </StyledLink>
        </ul>
      </div>
      <OutComes id="outcomes">
        <ThesisButton
          onClick={() => {
            setContent("thesis");
          }}
          content={content}
          id="new_notice"
        >
          THESIS
        </ThesisButton>
        <PatenteButton
          onClick={() => {
            setContent("patent");
          }}
          content={content}
        >
          PATENT
        </PatenteButton>
      </OutComes>
      {content === "thesis" ? (
        <>
          <ThesisContainer>
            <TabList>
              <Tab>
                ??????<Cases>200???</Cases>
              </Tab>
              <Tab>
                2023<Cases>50???</Cases>
              </Tab>
              <Tab>
                2022<Cases>50???</Cases>
              </Tab>
              <Tab>
                2021<Cases>50???</Cases>
              </Tab>
              <Tab>
                2020<Cases>50???</Cases>
              </Tab>
            </TabList>
            <Search placeholder="??????" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            <Table border={1}>
              <tbody>
                <TableTitle>
                  <TableData>No</TableData>
                  <TableData>Year</TableData>
                  <TableData>Title</TableData>
                  <TableData>Authors</TableData>
                  <TableData>Journal</TableData>
                  <TableData>IF</TableData>
                  <TableData>JCI</TableData>
                  <TableData>DOI</TableData>
                </TableTitle>
                {thesisPosts && (
                  <>
                    {thesisPosts.content.map((thesis) => {
                      return (
                        <>
                          <TableRow>
                            <TableData>{thesis.id}</TableData>
                            <TableData>{thesis.year}</TableData>
                            <TableData>{thesis.title}</TableData>
                            <TableData>{thesis.authors}</TableData>
                            <TableData>{thesis.journal}</TableData>
                            <TableData>{thesis.iif}</TableData>
                            <TableData>{thesis.jcr}</TableData>
                            <TableData>{thesis.doi}</TableData>
                          </TableRow>
                        </>
                      );
                    })}
                  </>
                )}
              </tbody>
            </Table>
          </ThesisContainer>
          {thesisPosts && (
            <footer
              style={{
                position: "relative",
                right: "10px",
              }}
            >
              <Pagination
                total={thesisPosts.totalPages}
                page={page}
                setPage={setPage}
                pageSize={thesisPosts.size}
              />
            </footer>
          )}
        </>
      ) : (
        <>
          <PatentContainer>
            <TabList>
              <Tab>
                ??????<Cases>200???</Cases>
              </Tab>
              <Tab>
                2023<Cases>50???</Cases>
              </Tab>
              <Tab>
                2022<Cases>50???</Cases>
              </Tab>
              <Tab>
                2021<Cases>50???</Cases>
              </Tab>
              <Tab>
                2020<Cases>50???</Cases>
              </Tab>
            </TabList>
            <Search placeholder="??????" onChange={changeSearch} />
            <Icon src={SearchIcon} onClick={handleSearch}></Icon>
            <Table>
              <tbody>
                <TableTitle>
                  <TableData>No</TableData>
                  <TableData>Date</TableData>
                  <TableData>Submit</TableData>
                  <TableData>Title</TableData>
                  <TableData>Author</TableData>
                </TableTitle>
                {patentPosts &&
                  patentPosts.content.map((patent) => {
                    return (
                      <>
                        <TableRow>
                          <TableData>{patent.id}</TableData>
                          <TableData>{patent.date}</TableData>
                          <TableData>{patent.submit}</TableData>
                          <TableData>{patent.title}</TableData>
                          <TableData>{patent.author}</TableData>
                        </TableRow>
                      </>
                    );
                  })}
              </tbody>
            </Table>
          </PatentContainer>
          {patentPosts && (
            <footer
              style={{
                position: "relative",
                right: "10px",
              }}
            >
              <Pagination
                total={patentPosts.totalPages}
                page={page + 1}
                setPage={setPage}
                pageSize={patentPosts.size}
              />
            </footer>
          )}
        </>
      )}
    </main>
  );
}

const OutComes = styled.div`
  position: relative;
  top: 230px;
  width: 1920px;
  height: 1150px;
`;
const ThesisButton = styled.button`
  position: absolute;
  top: 620px;
  left: 0px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "thesis" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const PatenteButton = styled.button`
  position: absolute;
  top: 620px;
  left: 960px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "patent" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;

const ThesisContainer = styled.div`
  position: relative;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;
const PatentContainer = styled.div`
  position: relative;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 750px;
`;
const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 125px;
  height: 46px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 17px/30px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 17px/30px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(--unnamed-color-447bf7) 0% 0% no-repeat padding-box;
  background: #447bf7 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 10px;
`;
const Cases = styled.div`
  width: 53px;
  height: 28px;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal bold 15px/30px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: center;
  font: normal normal bold 15px/30px Roboto;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
  background-color: white;
`;
const Search = styled.input`
  position: relative;
  top: -47px;
  left: 756px;
  width: 472px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const Icon = styled.img`
  position: relative;
  top: -38px;
  left: 718px;
  width: 25px;
  height: 25px;
`;
const Table = styled.table`
  position: absolute;
  width: 1250px;
  height: 84px;
  opacity: 1;
  border-spacing: 0px;
  border-top: 2px solid #414ffd;
  border-bottom: 2px solid #447bf7;
`;
const TableTitle = styled.tr`
  height: 84px;
  text-align: center;
  vertical-align: middle;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal medium 20px /
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 20px/28px Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const TableRow = styled.tr`
  background-color: white;
  text-align: center;
  vertical-align: middle;
  height: 117px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  border-right: none;
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
