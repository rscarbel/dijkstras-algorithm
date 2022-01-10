import React from 'react';

interface NodeProps {
  name: string;
  x: number;
  y: number;
  selectStartNode: Function;
  selectEndNode: Function;
  startNode: string;
  endNode: string;
}

const Node: React.FC<NodeProps> = ({
  name,
  x,
  y,
  selectStartNode,
  selectEndNode,
  startNode,
  endNode,
}) => {
  let nodeBackgroundColor = '';

  if (name === startNode && name === endNode) {
    nodeBackgroundColor = '#1F4E79';
  } else if (name === startNode) {
    nodeBackgroundColor = '#385723';
  } else if (name === endNode) {
    nodeBackgroundColor = '#7F6000';
  } else {
    nodeBackgroundColor = '#282c34';
  }

  const divStyle = {
    top: y,
    left: x,
    zIndex: 2,
    display: 'grid',
    height: '80px',
    width: '80px',
  } as React.CSSProperties;

  const gridChild = {
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
    width: '100%',
  } as React.CSSProperties;

  const applyNodeSelection = () => {
    if (true) {
      if (!startNode) {
        selectStartNode(name);
      } else {
        selectEndNode(name);
      }
    }
  };

  return (
    <>
      <div className="node-circle" id={name} style={divStyle}>
        <svg style={gridChild}>
          <circle
            onClick={applyNodeSelection}
            className="node"
            cx="40"
            cy="40"
            r="40"
            fill={nodeBackgroundColor}
            opacity={0.8}
          />
        </svg>

        <div className="node-text-wrapper">
          <p className="node-text nonselectable">{name}</p>
        </div>
      </div>
    </>
  );
};

export default Node;
