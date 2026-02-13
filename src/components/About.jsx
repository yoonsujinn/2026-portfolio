import "../style/section.css";
import AboutBox from "./AboutBox";
import {aboutData} from "../data/aboutData.js";

const About = () => {
  return (
    <div className="aboutWrap">
      <div className="aboutBoxWrap">
        <div className="aboutImg"></div>
        {aboutData.map((data, idx) => (
          <AboutBox key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};
export default About;
