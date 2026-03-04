import "./App.css";

// 컴포넌트 ---------------------
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

// 커스텀 훅
import {useMousePosition} from "./hooks/useMousePosition";
import {useCursorEffect} from "./hooks/mouseEvent";

function App() {
  useCursorEffect();

  const {x, y} = useMousePosition();
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
        style={{
          left: `${x - 15}px`,
          top: `${y - 15}px`,
        }}></div>
    </div>
  );
}

export default App;
