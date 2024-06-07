

const Section = ({ title, children, style }) => {
  return (
    <div>
      <div className="title" style={style}>{title}</div>
      <div className="underTitle">{children}</div>
    </div>
  );
};

export default Section;
