const Icon = ({ name, width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ color }}>
      <use href={`#${name}`} />
    </svg>
  );
};

export default Icon;
