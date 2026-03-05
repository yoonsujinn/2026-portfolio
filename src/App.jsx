import "./App.css";
import {useEffect} from "react";
// 커스텀 훅
import {useMousePosition} from "./hooks/useMousePosition";
// import {useCursorEffect} from "./hooks/useCursorEffect";
// import {useMouseScroll} from "./hooks/usemouseScroll";

// 컴포넌트 ---------------------
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const posRef = useMousePosition();
  useEffect(() => {
    console.log("리렌더링!!");
    const mouseEle = document.querySelector(".mouseEle");
  }, [posRef]);

  const sections = [
    {clsName: "home"},
    {clsName: "about"},
    {clsName: "project"},
    {clsName: "contact"},
  ];

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
      <div
        className="mouseEle"
        style={
          {
            // left: `${x - 15}px`,
            // top: `${y - 15}px`,
          }
        }></div>
    </div>
  );
}

export default App;
