import React, { useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
function FormEditor(props) {
  const setAddNews = props.setAddNews;
  const addNews = props.addNews;
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState([]);
  const input = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("attachFiles", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "/admin/notice/save",
        title: title,
        attachFiles: formData,
        content: content,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleFileSelect = (event) => {
    const fileNames = Array.from(event.target.files).map((ele) => ele.name);
    setSelectedFileName(fileNames);
    setSelectedFile(event.target.files);
  };
  const toAdminHome = () => {
    setAddNews(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table
        style={{
          position: "relative",
          borderCollapse: "separate",
          borderSpacing: "0 8px",
          right: "5em",
        }}
      >
        <tr>
          <td
            style={{
              width: "160px",
              height: "84px",
              background: "#D5D5D5 0% 0% no-repeat padding-box",
              opacity: 1,
              borderTopWidth: "3px",
              borderTopColor: "#447BF7",
              borderTopStyle: "solid",
            }}
          >
            <RowTitle>제목</RowTitle>
          </td>
          <div
            style={{
              display: "flex",
              width: "1078px",
              height: "84px",
              background: "#F4F4F4 0% 0% no-repeat padding-box",
              opacity: 1,
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: "3px",
              borderTopColor: "#447BF7",
              borderTopStyle: "solid",
            }}
          >
            <input
              style={{
                width: "996px",
                height: "47px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                border: "0.4000000059604645px solid",
                borderColor: "rgb(112 112 112 / 27%)",
                opacity: 1,
              }}
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </tr>
        <tr>
          <td
            style={{
              width: "160px",
              height: "84px",
              background: "#D5D5D5 0% 0% no-repeat padding-box",
              opacity: 1,
            }}
          >
            <RowTitle>첨부파일</RowTitle>
          </td>
          <td>
            <div
              style={{
                display: "flex",
                width: "1078px",
                height: "84px",
                background: "#F4F4F4 0% 0% no-repeat padding-box",
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                ref={input}
                type={"file"}
                onChange={handleFileSelect}
                style={{
                  display: "none",
                }}
                multiple
              ></input>
              <label
                for="file"
                style={{
                  display: "inline-block",
                  padding: "0px 20px",
                  color: "#fff",
                  verticalAlign: "middle",
                  backgroundColor: "#999999",
                  cursor: "pointer",
                  marginLeft: "10px",
                  textAlign: "center",
                  width: "83px",
                  height: "47px",
                }}
                onClick={() => {
                  input.current?.click();
                }}
              >
                <span
                  style={{
                    position: "relative",
                    top: "0.7rem",
                    font: "normal normal bold 20px/28px Roboto",
                    letterSpacing: "0px",
                    color: "#000000",
                    opacity: 0.7,
                  }}
                >
                  파일선택
                </span>
              </label>
              <input
                class="upload-name"
                placeholder={selectedFileName}
                style={{
                  position: "relative",
                  display: "inline-block",
                  height: "40px",
                  padding: "0 10px",
                  verticalAlign: "middle",
                  border: "1px solid #dddddd",
                  width: "863px",
                  height: "47px",
                  right: "6px",
                }}
                read
              ></input>
            </div>
          </td>
        </tr>
        <tr>
          <td
            style={{
              width: "160px",
              height: "633px",
              background: "#D5D5D5 0% 0% no-repeat padding-box",
              opacity: "1",
            }}
          >
            <RowTitle>내용</RowTitle>
          </td>
          <td>
            <div
              style={{
                display: "flex",
                width: "1078px",
                height: "633px",
                background: "#F4F4F4 0% 0% no-repeat padding-box",
                opacity: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <textarea
                style={{
                  width: "996px",
                  height: "586px",
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  border: "0.4000000059604645px solid",
                  borderColor: "rgb(112 112 112 / 27%)",
                  opacity: 1,
                  resize: "none",
                }}
                onChange={handleContentChange}
              ></textarea>
            </div>
          </td>
        </tr>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "1160px",
          height: "100px",
          marginTop: "60px",
        }}
      >
        <Button style={{ marginRight: "1em" }} onClick={toAdminHome}>
          목록으로
        </Button>
        <Button type="submit" value="Upload File">
          게시하기
        </Button>
      </div>
    </form>
  );
}

const RowTitle = styled.p`
  text-align: center;
  font: normal normal bold 20px/28px Roboto;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Button = styled.button`
  width: 143px;
  height: 45px;
  /* UI Properties */
  background: #e8e8e8 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  font: normal normal bold 18px/28px Roboto;
  letter-spacing: 0px;
  color: #575757;
  opacity: 1;
`;

export default FormEditor;
