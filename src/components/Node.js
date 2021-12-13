
const Node = ({ name, x, y }) => {
  const divStyle = {
    top: y,
    left: x,
    zIndex: 2
  };

  return <>
  <div className='node-circle' id={name}  style={divStyle}>
    <svg>
      <circle className='node' cx='25' cy='25' r='25' fill='#282c34' opacity={0.8} />
      <text x='20' y='29.5' fill='white'>{name}</text>
    </svg>
  </div>
  </>
}

export default Node