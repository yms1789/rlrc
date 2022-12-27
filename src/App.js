import React from "react";
import Layout from "../src/components/Layout";
import { Routes, Route } from "react-router-dom";
import AboutRLRC from "./pages/AboutRLRC";
import Research from "./pages/Research";
import NewNotice from "./pages/NewNotice";
import NewNoticeAdmin from "./pages/NewNoticeAdmin";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            style={{ textDecoration: "none" }}
            element={<AboutRLRC />}
          >
            ABOUT RLRC
          </Route>
          <Route
            path="/AboutRLRC"
            style={{ textDecoration: "none" }}
            element={<AboutRLRC />}
          >
            ABOUT RLRC
          </Route>
          <Route
            className="rearch"
            path="/Research"
            style={{ textDecoration: "none" }}
            element={<Research />}
          >
            RESEARCH
          </Route>
          <Route
            className="newNotice"
            path="/NewNotice"
            style={{ textDecoration: "none" }}
            element={<NewNotice />}
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
      </Layout>
    </div>
  );
}

export default App;
