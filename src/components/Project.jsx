import "../style/section.css";
import {projectData} from "../data/projectData";
import ProjectBox from "./ProjectBox";

const Project = () => {
  return (
    <div className="projectWrap">
      <h1 className="title_1">Main Project</h1>
      <div className="pjBoxWrap">
        {projectData.map((data, idx) => (
          <ProjectBox key={idx} data={data} />
        ))}
      </div>
      <h1 className="title_2">Sub Project</h1>
      <h1 className="title_3">Study</h1>
    </div>
  );
};
export default Project;
