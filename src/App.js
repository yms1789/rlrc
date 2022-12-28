import React from "react";
import Layout from "../src/components/Layout";
import { Routes, Route } from "react-router-dom";
import AboutRLRC from "./pages/AboutRLRC";
import Research from "./pages/Research";
import NewNotice from "./pages/NewNotice";
import NewNoticeAdmin from "./pages/NewNoticeAdmin";
import Login from "./pages/Login";
import ResearchField from "./pages/ResearchField";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <AboutRLRC />
            </Layout>
          }
        ></Route>
        <Route
          path="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <AboutRLRC />
            </Layout>
          }
        ></Route>
        <Route
          className="rearch"
          path="/Research"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <Research />
            </Layout>
          }
        ></Route>
        <Route
          className="rearchField"
          path="/ResearchField"
          style={{ textDecoration: "none" }}
          element={<ResearchField />}
        ></Route>
        <Route
          className="newNotice"
          path="/NewNotice"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <NewNotice />
            </Layout>
          }
        ></Route>
        <Route
          className="newNoticeAdmin"
          path="/NewNoticeAdmin"
          style={{ textDecoration: "none" }}
          element={<NewNoticeAdmin />}
        ></Route>
        <Route
          className="Login"
          path="/Login"
          style={{ textDecoration: "none" }}
          element={<Login />}
        ></Route>
        <Route
          className="Detail"
          path="/Detail"
          style={{ textDecoration: "none" }}
          element={<Detail />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
