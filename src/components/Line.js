const Line = ({left1, left2, right1, right2, width, weight }) => {
  let rgbVal = width * 36;
  const svgStyle = {
    position: 'absolute',
    top: 0,
    left: 0
  }
  const lineStyle = {
    zIndex: -1
  }
  const textStyle = {
    fontSize: '0.5em',
    zIndex: 3
  }
  const circleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  }
  return<>
    <svg style={svgStyle} width='100%' height='100%'>
      <line style={lineStyle} fill="none" stroke={`rgb(${rgbVal},0,0)`} strokeWidth={width}
      x1={left1}
      y1={left2}
      x2={right1}
      y2={right2} />


      </svg>
      {width ? <svg style={circleStyle} width='100%' height='100%'>
      <circle style={circleStyle} cx={(right1 + left1)/2} cy={(right2 + left2)/2} r='0.4em' fill={`rgb(${rgbVal},0,0)`} stroke='#000000'/>
      <text style={textStyle} x={(right1 + left1)/2 - 2.5} y={(right2 + left2)/2 + 2.5} fill='#FFFFFF'>{weight ? weight : ''}</text>
      </svg> : ''}
    </>
};

export default Line;