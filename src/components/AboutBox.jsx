import AboutButton from "./AboutButton";
import {aboutButtonData} from "../data/aboutButtonData.js";

import {HiOutlineAnnotation} from "react-icons/hi";
import {FaAddressCard} from "react-icons/fa";
import {VscCode} from "react-icons/vsc";
import {TbCertificate} from "react-icons/tb";
import {HiOutlineUserCircle} from "react-icons/hi";

const AboutBox = ({data}) => {
  return (
    <>
      <div className={`aboutBox aboutBox_${data.type}`}>
        <div className="aboxBoxTitle">
          <div className="logo">
            {data.type === "howIwork" && <HiOutlineAnnotation />}
            {data.type === "cert" && <TbCertificate />}
            {data.type === "Skills" && <VscCode />}
            {data.type === "aboutMe" && <HiOutlineUserCircle />}
            {data.type === "experience" && <FaAddressCard />}
          </div>
          <div className="titleText">{data.title}</div>
        </div>
        <ul className="aboutUl">
          {data.type === "howIwork" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <p>{e.desc}</p>
              </li>
            ))}
          {data.type === "aboutMe" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <p>
                  {e.name} : {e.desc}
                </p>
              </li>
            ))}

          {data.type === "Skills" && (
            <>
              {data.items.map((e, idx) => (
                <li key={idx}>
                  <p>{e.name}</p>
                  <span>{e.desc}</span>
                </li>
              ))}
            </>
          )}

          {data.type === "cert" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <p>{e.desc}</p>
              </li>
            ))}
          {data.type === "experience" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <span className="dateWrap">
                  {e.date_1} ~ {e.date_2}
                </span>
                <p>{e.desc}</p>
              </li>
            ))}
        </ul>
        {data.type === "Skills" && (
          <div className="aboutButtonWrap">
            {aboutButtonData.items.map((data, idx) => (
              <AboutButton key={idx} data={data} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AboutBox;
