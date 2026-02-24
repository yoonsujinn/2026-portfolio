import "../style/section.css";
import {FaGithub, TbArrowBigUpLine, MdOutlineEmail} from "../data/icon";

const Contact = ({clsName}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("yoonsujin2@naver.com");
    alert("이메일이 복사되었습니다.");
  };

  const clickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contactWrap">
      <div className="contactMainText">
        <p>
          다양한 기술을 능동적으로 학습하며 지속적으로
          <br />
          성장하는 프론트엔드 개발자가 되고자 합니다.
        </p>
        변화하는 기술 환경 속에서도 유연하게 대응하며,
        <br />
        완성도 높은 서비스를 구현하는 개발자로 발전해 나가겠습니다.
        <br />
        지금까지 저의 포트폴리오를 봐주셔서 감사합니다.
        <div className="iconWrap">
          <a onClick={handleCopy} target="blank">
            <MdOutlineEmail />
          </a>
          <a href="https://github.com/yoonsujinn" target="blank">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="contectBottom">
        <div className="bottomLeft">2026 yoonsujinn.github.io </div>
        <div className="bottomRight" onClick={clickTop}>
          <TbArrowBigUpLine />
        </div>
      </div>
    </div>
  );
};
export default Contact;
