
const Node = ({ name, x, y, r, g, b }) => {
  const divStyle = {
    top: y,
    left: x,
  };
  return <>
  <div className='node-circle' id={name}  style={divStyle}>
    <svg width='50' height='50'>
      <circle cx='25' cy='25' r='25' fill={`rgb(${r},${g},${b})`} />
      <text x="20" y="29" fill={(r + g + b >= 350 ? '#00000' : '#FFFFFF')}>{name}</text>
    </svg>
  </div>
  </>
}

export default Node