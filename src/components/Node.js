
const Node = ({ name, x, y }) => {
  const divStyle = {
    top: y,
    left: x,
    zIndex: 1
  };

  return <>
  <div className='node-circle' id={name}  style={divStyle}>
    <svg width='100%' height='100%'>
      <circle className='node' cx='25' cy='25' r='25' fill='gray' />
      <text x='20' y='29.5' fill='white'>{name}</text>
    </svg>
  </div>
  </>
}

export default Node