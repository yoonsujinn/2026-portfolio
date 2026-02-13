import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrap">
        <div className="headerLeft">
          <p>YOONSUJIN PORTFOLIO</p>
        </div>
        <div className="headerRight">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CONTECT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
