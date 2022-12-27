import React from "react";
import Layout from "../src/components/Layout";
import { Routes, Route } from "react-router-dom";
import AboutRLRC from "./pages/AboutRLRC";
import Research from "./pages/Research";
import NewNotice from "./pages/NewNotice";
import NewNoticeAdmin from "./pages/NewNoticeAdmin";
import Login from "./pages/Login";
import ResearchField from "./pages/ResearchField";

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
        >
          ABOUT RLRC
        </Route>
        <Route
          path="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <AboutRLRC />
            </Layout>
          }
        >
          ABOUT RLRC
        </Route>
        <Route
          className="rearch"
          path="/Research"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <Research />
            </Layout>
          }
        >
          RESEARCH
        </Route>
        <Route
          className="rearchField"
          path="/ResearchField"
          style={{ textDecoration: "none" }}
          element={<ResearchField />}
        >
          RESEARCH
        </Route>
        <Route
          className="newNotice"
          path="/NewNotice"
          style={{ textDecoration: "none" }}
          element={
            <Layout>
              <NewNotice />
            </Layout>
          }
        >
          NEW & NOTICE
        </Route>
        <Route
          className="newNoticeAdmin"
          path="/NewNoticeAdmin"
          style={{ textDecoration: "none" }}
          element={<NewNoticeAdmin />}
        >
          NEW & NOTICE
        </Route>
        <Route
          className="Login"
          path="/Login"
          style={{ textDecoration: "none" }}
          element={<Login />}
        >
          NEW & NOTICE
        </Route>
      </Routes>
    </div>
  );
}

export default App;