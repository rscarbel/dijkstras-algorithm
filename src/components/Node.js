
const Node = ({ name, x, y }) => {
  const divStyle = {
    top: y,
    left: x,
    zIndex: 2
  };

  return <>
  <div className='node-circle' id={name}  style={divStyle}>
    <svg>
      <circle
      className='node'
      cx='25'
      cy='25'
      r='25'
      fill='#282c34'
      opacity={0.8}
      />

      <text
      fontSize={name.length === 1
        ? '1em'
        : name.lenth < 6 ? '16px'
        : name.length < 8 ? '10.5px'
        : name.length < 11 ? '8px'
        : name.length < 13 ? '7.5px'
        : name.length < 15 ? '7px'
        : '7px' }
      x={name.length > 1 ? '5': '20'}
      y='29.5'
      fill='white'
      >{name}</text>
    </svg>
  </div>
  </>
}

export default Node