import "./App.css";

import {useRef, useEffect} from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      scrEventRefs.current.forEach((el, i) => {});
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app_wrap">
      <Header />
      {sections.map(({clsName}, i) => (
        <section
          key={clsName}
          className={clsName}
          ref={(el) => (scrEventRefs.current[i] = el)}>
          {clsName === "home" && <Home ref={scrEventClassName} />}
          {clsName === "about" && <About ref={scrEventClassName} />}
          {clsName === "project" && <Project ref={scrEventClassName} />}
          {clsName === "contact" && <Contact ref={scrEventClassName} />}
        </section>
      ))}
      <Cursor />
    </div>
  );
}

export default App;
