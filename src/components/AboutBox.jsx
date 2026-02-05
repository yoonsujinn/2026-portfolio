const AboutBox = () => {
  return (
    <>
      <div className="aboutBox">
        <div className="aboxBoxTitle">
          <div className="logo"></div>
          <div className="titleText">Skills</div>
        </div>
        <ul className="aboutUL">
          <li>
            <span>HTML / CSS</span>
            <p>
              웹 표준과 접근성을 고려한 시맨틱 마크업과
              <br />
              유지보수를 고려한 스타일링을 합니다.
            </p>
          </li>
          <li>
            <span>JAVASCIPT</span>
            <p>ES6+ 문법을 활용해 UI 로직을 구현하고 기능을 구조화합니다.</p>
          </li>
          <li>
            <span>React</span>
            <p>
              컴포넌트 구조와 상태 흐름을 이해하고 개인 프로젝트에 적용합니다.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutBox;
