import {FaGithub} from "react-icons/fa";
import {GoLinkExternal} from "react-icons/go";
import {PiClipboardTextLight} from "react-icons/pi";

const ProjectBox = ({data}) => {
  return (
    <>
      {data.type === "MainProject" &&
        data.items.map((e, idx) => (
          <div className={`pjBox ${e.projectName}`} key={idx}>
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
              <div className="members">
                {e.members === 1
                  ? "개인 프로젝트"
                  : `프로젝트 인원 : ${e.members} 명`}
              </div>
              <ul className="descUl">
                {e.desc.map((d, liIdx) => (
                  <li key={liIdx}>{d}</li>
                ))}
              </ul>
              {e.spec && (
                <a href={e.spec} target="blank" className="iconBox specBox">
                  <PiClipboardTextLight />
                  {e.spec}
                </a>
              )}
              <a href={e.git} target="blank" className="iconBox gitBox">
                <FaGithub />
                {e.git}
              </a>
              <a href={e.view} target="_blank" className="iconBox viewBox">
                <GoLinkExternal />
                {e.view}
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProjectBox;
