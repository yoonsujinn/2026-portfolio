import "./App.css";

// 컴포넌트---------------------
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const sections = [
    {clsName: "home"},
    {clsName: "about"},
    {clsName: "skill"},
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
          {clsName === "skill" && <Skill />}
          {clsName === "project" && <Project />}
          {clsName === "contact" && <Contact />}
        </section>
      ))}
    </div>
  );
}

export default App;
