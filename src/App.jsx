import "./App.css";

import {useRef, useEffect} from "react";
import {useMouseScroll} from "./hooks/useMouseScroll";

// 컴포넌트 ---------------------
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
const sections = [
  {clsName: "home"},
  {clsName: "about"},
  {clsName: "project"},
  {clsName: "contact"},
];
const scrEventClassName = ["home", "about", "project", "contact"];

function App() {
  const scrEventRefs = useRef([]);

  return (
    <div className="app_wrap">
      <Header />
      {sections.map(({clsName}) => (
        <section key={clsName} className={clsName}>
          {clsName === "home" && <Home />}
          {clsName === "about" && <About />}
          {clsName === "project" && <Project />}
          {clsName === "contact" && <Contact />}
        </section>
      ))}
      <Cursor />
    </div>
  );
}

export default App;
