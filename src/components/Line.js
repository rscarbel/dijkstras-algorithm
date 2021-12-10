const Line = ({left1, left2, right1, right2}) => {
  const elementStyle = {
    zIndex: -1,
    position: 'absolute',
    top: left1,
    left: left2
  }
  return <svg style={elementStyle}>
    <polyline fill="none" stroke="#000000" strokeWidth="1"
    points={`${0},${0},${right1},${right2}`} />
    </svg>
};

export default Line;