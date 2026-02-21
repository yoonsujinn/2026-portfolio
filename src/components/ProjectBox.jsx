import {FaGithub} from "react-icons/fa";
import {GoLinkExternal} from "react-icons/go";
import {PiClipboardTextLight} from "react-icons/pi";

const ProjectBox = ({data}) => {
  return (
    <>
      {data.type === "MainProject" &&
        data.items.map((mItems, idx) => (
          <div className={`pjBox ${mItems.projectName}`} key={idx}>
            <div className={`img ${data.projectName}Img`}></div>
            <div className="pjTextWrap">
              <div className="projectTitle">{mItems.name}</div>
              <div className="stackListWrap">
                {mItems.techStack.map((t, tIdx) => (
                  <div className="stack" key={tIdx}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="members">
                {mItems.members === 1
                  ? "개인 프로젝트"
                  : `프로젝트 인원 : ${mItems.members} 명`}
              </div>
              <ul className="descUl">
                {mItems.desc.map((d, liIdx) => (
                  <li key={liIdx}>{d}</li>
                ))}
              </ul>
              {mItems.spec && (
                <a
                  href={mItems.spec}
                  target="blank"
                  className="iconBox specBox">
                  <PiClipboardTextLight />
                  {mItems.spec}
                </a>
              )}
              <a href={mItems.git} target="blank" className="iconBox gitBox">
                <FaGithub />
                {mItems.git}
              </a>
              <a href={mItems.view} target="_blank" className="iconBox viewBox">
                <GoLinkExternal />
                {mItems.view}
              </a>
            </div>
          </div>
        ))}
      {data.type === "SubProject" &&
        data.items.map((sItems, idx) => (
          <div key={idx} className="subPjWrap"></div>
        ))}
    </>
  );
};

export default ProjectBox;
