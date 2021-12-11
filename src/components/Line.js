const Line = ({left1, left2, right1, right2}) => {
  const elementStyle = {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0
  }
  return <svg style={elementStyle} width='100%' height='100%'>
    <line fill="none" stroke="#000000" strokeWidth="1"
    x1={left1}
    y1={left2}
    x2={right1}
    y2={right2} />
    </svg>
};

export default Line;