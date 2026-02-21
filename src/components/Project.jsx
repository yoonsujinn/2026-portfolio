import "../style/section.css";
import {projectData} from "../data/projectData";
import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <div className="projectWrap">
      <div className="mainProjectWrap">
        <h1 className="title_1">Main Project</h1>
        {projectData
          .filter((data) => data.type === "MainProject")
          .map((data, idx) => (
            <ProjectBox key={idx} data={data} />
          ))}
      </div>
      <h1 className="title_2">Sub Project</h1>
      <div className="subProjectWrap">
        {projectData
          .filter((data) => data.type === "SubProject")
          .map((data, idx) => (
            <ProjectBox key={idx} data={data} />
          ))}
      </div>
    </div>
  );
};
export default Project;
