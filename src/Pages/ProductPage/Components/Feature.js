

const Feature = ({ imgSrc, title, description, style }) => {
  return (
    <div className="features-frame" style={style}>
      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Feature;
