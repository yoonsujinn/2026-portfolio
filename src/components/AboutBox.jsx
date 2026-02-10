import "../style/aboutBox.css";

const AboutBox = ({data}) => {
  console.log(data, "data~~~");
  return (
    <>
      <div className={`aboutBox aboutBox_${data.type}`}>
        <div className="aboxBoxTitle">
          <div className="logo"></div>
          <div className="titleText">{data.title}</div>
        </div>
        <ul className="aboutUl">
          {data.type === "aboutMe" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <p>
                  {e.name} : {e.desc}
                </p>
              </li>
            ))}

          {data.type === "Skills" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <span>{e.name}</span>
                <p>{e.desc}</p>
              </li>
            ))}
          {data.type === "howIwork" &&
            data.items.map((e, idx) => (
              <li key={idx}>
                <p>{e.desc}</p>
              </li>
            ))}
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
                  <span className="date_1">{e.date_1}</span>
                  <i>~</i>
                  <span className="date_2">{e.date_2}</span>
                </span>
                <p>{e.desc}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default AboutBox;
