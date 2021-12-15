
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
      cx='50'
      cy='50'
      r='50'
      fill='#282c34'
      opacity={0.8}
      />

      <text
      fontSize={name.length === 1
        ? '1em'
        : name.lenth < 6 ? '1.5em'
        : name.length < 8 ? '20px'
        : name.length < 11 ? '15px'
        : name.length < 13 ? '14px'
        : '12px' }
      x={name.length === 1
        ? '40'
        : name.length < 7 ? '20'
        : '10'}
      y='51.5'
      fill='white'
      >{name}</text>
    </svg>
  </div>
  </>
}

export default Node