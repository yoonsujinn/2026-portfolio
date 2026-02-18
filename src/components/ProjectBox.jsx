const ProjectBox = ({data}) => {
  console.log(data, "data~~~~~~");
  return (
    <>
      {data.type === "MainProject" &&
        data.items.map((e, idx) => (
          <div className="pjBox react-todo" key={idx}>
            <div className="img"></div>
            <div className="pjTextWrap">
              <div className="projectTitle">{e.name}</div>
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
