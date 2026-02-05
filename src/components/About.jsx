import "../style/section.css";
import AboutBox from "./AboutBox";
import {aboutData} from "../data/aboutData.js";

const About = () => {
  return (
    <div className="aboutWrap">
      <h1>about Me</h1>
      <div className="aboutBoxWrap">
        {aboutData.map((data, idx) => (
          <AboutBox key={idx} data={data} />
        ))}
        {/* <AboutBox /> */}
      </div>
    </div>
  );
};
export default About;
