const ProjectBox = ({data}) => {
  console.log(data, "data~~~~~~");
  return (
    <>
      <div className="pjBox react-todo">
        <div className="projectType">MainProject</div>
        <div className="projectTitle">Todo</div>
        <div className="img"></div>
        <div className="gitWrap"></div>
        <div>주요기능</div>
        <div>사용기능</div>
        <div className="comment">
          <ul>
            <li>리액트를 활용해서 작업</li>
          </ul>
        </div>
        <div className="ur">url</div>
      </div>
    </>
  );
};

export default ProjectBox;
