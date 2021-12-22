const Line = ({startingX,
    startingY,
    endingX,
    endingY,
    width,
    weight,
    isPartOfPath,
    selectionMode
  }) => {

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
    fontSize: '18px',
    zIndex: 3
  }
  const circleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  }
  return<>
    <svg
    style={svgStyle}
    width='100%'
    height='100%'>

      <line
      style={lineStyle}
      fill="none"
      stroke={isPartOfPath && !selectionMode ? '#6CA644' : `rgb(${rgbVal},0,0)`}
      strokeWidth={isPartOfPath && !selectionMode ? '8px' : width}
      x1={startingX}
      y1={startingY}
      x2={endingX}
      y2={endingY} />


      </svg>
      {width ? <svg style={circleStyle} width='100%' height='100%'>
      <circle
      style={circleStyle}
      cx={(endingX + startingX)/2}
      cy={(endingY + startingY)/2}
      r='12px'
      fill={isPartOfPath && !selectionMode ? '#6CA644' : `rgb(${rgbVal},0,0)`}
      stroke='#000000'/>

      <text
      style={textStyle}
      x={(endingX + startingX)/2 - 5.5}
      y={(endingY + startingY)/2 + 5.5}
      fill='#FFFFFF'>{weight ? weight : ''}</text>
      </svg> : ''}
    </>
};

export default Line;