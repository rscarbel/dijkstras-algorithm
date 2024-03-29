import React from 'react';

interface TopBarProps {
  reloadAction: any;
  startNode: string;
  endNode: string;
  path: string[];
  clearSelections: any;
  totalWeight: number;
}

const TopBar: React.FC<TopBarProps> = ({
  reloadAction,
  startNode,
  endNode,
  path,
  clearSelections,
  totalWeight,
}) => {
  const componentStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
    borderBottom: '1px solid #000000',
    margin: 'auto',
  } as React.CSSProperties;

  const h1Style = {
    fontSize: '2em',
    zIndex: '999',
  } as React.CSSProperties;

  const buttonStyles = {
    flexGrow: '1',
    margin: '0.3em 0',
    padding: '.5em 2em',
    borderRadius: '10px',
    color: '#FFFFFF',
    fontSize: '1em',
    cursor: 'pointer',
    textAlign: 'center',
    userSelect: 'none',
    zIndex: '999',
  } as React.CSSProperties;

  const newGraphButton = {
    ...buttonStyles,
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
  } as React.CSSProperties;

  const selectButton = {
    ...buttonStyles,
    backgroundColor: startNode ? '#28a745' : '#C9C9C9',
    borderColor: startNode ? '#28a745' : '#C9C9C9',
    color: startNode ? '#FFFFFF' : '#E4E4E4',
    pointerEvents: startNode ? '' : 'none',
  } as React.CSSProperties;

  const textStyle = {
    margin: '0 2em',
    textAlign: 'left',
  } as React.CSSProperties;

  return (
    <div style={componentStyle}>
      <div style={{ margin: '0 1.3em', flexGrow: 1 }}>
        <h1 style={h1Style}>
          Dijkstra's
          <br />
          Algorithm
        </h1>
        <p>Just click nodes to get started!</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignContent: 'space-around',
          justifyContent: 'space-around',
          flexGrow: 1,
        }}
      >
        <button onClick={reloadAction} style={newGraphButton}>
          New Graph
        </button>
        <button
          onClick={true ? clearSelections : () => ''}
          style={selectButton}
        >
          Clear Selections
        </button>
      </div>

      <div style={{ ...textStyle, flexGrow: 1 }}>
        <p>
          <strong>Start Node</strong>
          <br />
          {startNode}
        </p>
        <p>
          <strong>End Node</strong>
          <br />
          {endNode}
        </p>
      </div>

      <p
        style={{ ...textStyle, flexGrow: 5, height: '100%', flexWrap: 'wrap' }}
      >
        <strong>Path:</strong>{' '}
        {path.length ? path.join(' -> ') : 'No Path Exists'}
      </p>
      <div style={{ flexGrow: 1 }}>
        <p style={{ marginRight: '5px', textAlign: 'left' }}>
          <strong>Total weight</strong>
          <br />
          {totalWeight}
        </p>
        <br />
        <p style={{ marginRight: '5px', textAlign: 'left' }}>
          <strong>Number of paths</strong>
          <br />
          {path.length ? path.length - 1 : 'n/a'}
        </p>
      </div>
    </div>
  );
};

export default TopBar;
