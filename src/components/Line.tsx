import React from 'react';

interface LineProps {
  startingX: number;
  startingY: number;
  endingX: number;
  endingY: number;
  width: number;
  weight: number;
  isPartOfPath: boolean;
}

const Line: React.FC<LineProps> = ({
  startingX,
  startingY,
  endingX,
  endingY,
  width,
  weight,
  isPartOfPath,
}) => {
  let rgbVal = width * 36;
  const svgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
  } as React.CSSProperties;
  const lineStyle = {
    zIndex: -1,
  } as React.CSSProperties;
  const textStyle = {
    fontSize: '18px',
    zIndex: 3,
  } as React.CSSProperties;
  const circleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  } as React.CSSProperties;

  return (
    <>
      <svg
        className="line"
        style={svgStyle}
        width={`${endingX + 7}px`}
        height={endingY > startingY ? `${endingY + 7}px` : `${startingY + 7}px`}
      >
        <line
          style={lineStyle}
          fill="none"
          stroke={isPartOfPath ? '#6CA644' : `rgb(${rgbVal},0,0)`}
          strokeWidth={isPartOfPath ? '8px' : width}
          x1={startingX}
          y1={startingY}
          x2={endingX}
          y2={endingY}
        />
      </svg>
      {width ? (
        <svg
          className="line"
          style={circleStyle}
          width={`${endingX + 11}px`}
          height={
            endingY > startingY ? `${endingY + 11}px` : `${startingY + 11}px`
          }
        >
          <circle
            style={circleStyle}
            cx={(endingX + startingX) / 2}
            cy={(endingY + startingY) / 2}
            r="12px"
            fill={isPartOfPath ? '#6CA644' : `rgb(${rgbVal},0,0)`}
            stroke="#000000"
          />

          <text
            className="nonselectable"
            style={textStyle}
            x={(endingX + startingX) / 2 - 5.5}
            y={(endingY + startingY) / 2 + 5.5}
            fill="#FFFFFF"
          >
            {weight ? weight : ''}
          </text>
        </svg>
      ) : (
        ''
      )}
    </>
  );
};

export default Line;
