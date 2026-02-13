const AboutButton = ({data}) => {
  console.log(data, "data~~~");
  return (
    <button>
      {data.name}
      <div className="comm">{data.desc}</div>
    </button>
  );
};

export default AboutButton;
