
const Node = ({ name, x, y }) => {
  const divStyle = {
    top: y,
    left: x,
    zIndex: 1
  };
  return <>
  <div className='node-circle' id={name}  style={divStyle}>
    <svg width='50' height='50'>
      <circle cx='25' cy='25' r='25' fill='gray' />
      <text x='20' y='29' fill='white'>{name}</text>
    </svg>
  </div>
  </>
}

export default Node