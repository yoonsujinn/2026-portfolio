import {FaGithub} from "react-icons/fa";
import {GoLinkExternal} from "react-icons/go";

const ProjectBox = ({data}) => {
  return (
    <>
      {data.type === "MainProject" &&
        data.items.map((e, idx) => (
          <div className="pjBox react-todo" key={idx}>
            <div className={`img ${data.projectName}Img`}></div>
            <div className="pjTextWrap">
              <div className="projectTitle">{e.name}</div>
              <div className="stackListWrap">
                {e.techStack.map((t, tIdx) => (
                  <div className="stack" key={tIdx}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="members">프로젝트 인원 : {e.members}명</div>
              <ul className="descUl">
                {e.desc.map((d, liIdx) => (
                  <li key={liIdx}>{d}</li>
                ))}
              </ul>
              <a href={e.git} target="_blank" className="gitBox">
                <FaGithub />
                {e.git}
              </a>
              <a href={e.view} target="_blank" className="viewBox">
                <GoLinkExternal />
                {e.view}
              </a>
            </div>
            {/* 
            <div className="gitWrap"></div>
            <div>주요기능</div>
            <div>사용기능</div>
            <div className="comment">
              <ul>
                <li>리액트를 활용해서 작업</li>
              </ul>
            </div>
            <div className="ur">url</div> */}
          </div>
        ))}
    </>
  );
};

export default ProjectBox;
