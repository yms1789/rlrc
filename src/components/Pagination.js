import React, { useState } from "react";
import styled from "styled-components";
import leftArrow from "../static/leftArrow.png";
import righttArrow from "../static/rightArrow.png";
function Pagination({ total, page, setPage }) {
  const numPages = total || 1;
  const [currPage, setCurrPage] = useState(page || 1);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  let totalPage = numPages < 5 ? numPages : 5;
  return (
    <>
      <Nav>
        <Button
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          style={{
            border: "none",
          }}
          disabled={page === 1}
        >
          <img src={leftArrow} style={{ width: "7px", height: "14px" }}></img>
        </Button>
        <Button
          onClick={() => setPage(firstNum)}
          aria-current={page === firstNum ? "page" : null}
        >
          {firstNum}
        </Button>
        {Array(totalPage - 1)
          .fill()
          .map((_, i) => {
            if (i <= 2) {
              return (
                <Button
                  key={i + 1}
                  onClick={() => setPage(firstNum + i + 1)}
                  aria-current={page === firstNum + i + 1 ? "page" : null}
                >
                  {firstNum + 1 + i}
                </Button>
              );
            } else if (i >= 3) {
              return (
                <Button
                  key={i + 1}
                  onClick={() => setPage(lastNum)}
                  aria-current={page === lastNum ? "page" : null}
                >
                  {lastNum}
                </Button>
              );
            }
          })}
        <Button
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          style={{
            border: "none",
          }}
          disabled={page === numPages}
        >
          <img src={righttArrow} style={{ width: "7px", height: "14px" }}></img>
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px;
  height: 100px;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  margin: 0;
  width: 53px;
  height: 53px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bababa;
  font: normal normal normal 22px/25px Roboto;
  color: #aaaaaa;
  opacity: 1;
  opacity: 1;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #447bf7;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    color: white;
  }
`;

export default Pagination;
