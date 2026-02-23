import "../style/section.css";
import {projectData} from "../data/projectData";
import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <div className="projectWrap">
      <h1 className="title_1">
        <p>Main Project</p>
      </h1>
      <div className="mainProjectWrap">
        {projectData
          .filter((data) => data.type === "MainProject")
          .map((data, idx) => (
            <ProjectBox key={idx} data={data} />
          ))}
      </div>
      <div className="subProjectWrap">
        <h1 className="title_2">
          <p>Sub Project</p>
        </h1>
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
