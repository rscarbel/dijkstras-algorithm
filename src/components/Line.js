const Line = ({left1, left2, right1, right2, width }) => {
  let rgbVal = 70 + width * 8;
  const elementStyle = {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0
  }
  return <svg style={elementStyle} width='100%' height='100%'>
    <line fill="none" stroke={`rgb(${rgbVal},0,0)`} strokeWidth={width}
    x1={left1}
    y1={left2}
    x2={right1}
    y2={right2} />
    </svg>
};

export default Line;