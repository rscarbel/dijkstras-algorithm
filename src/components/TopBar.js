const componentStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '999',
  borderBottom: '1px solid #000000',
  margin: 'auto',
}

const h1Style = {
  fontSize: '2.5em',
  margin: '0 1.3em',
  zIndex: '999',
}

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
}

const newGraphButton = {
  ...buttonStyles,
  backgroundColor: '#dc3545',
  borderColor: '#dc3545',
}

const selectButton = {
  ...buttonStyles,
  backgroundColor: '#28a745',
  borderColor: '#28a745',
}

const textStyle = {
  margin: '0 2em',
  textAlign: 'left',
}

const TopBar = ({
  reloadAction,
  startNode,
  endNode,
  path,
  toggleSelectionMode,
  selectionMode
  }) => {

  return <div style={componentStyle}>

    <h1 style={h1Style}>Dijkstra's<br />Algorithm</h1>
    <div style={{display:'flex',flexWrap:'wrap',flexDirection: 'column',alignContent: 'space-around', justifyContent: 'space-around'}}>
      <button onClick={reloadAction} style={newGraphButton}>New Graph</button>

      <button onClick={!selectionMode ? toggleSelectionMode : () => ''} style={selectButton}>Select Nodes</button>
    </div>

    <div style={textStyle}>
      <p><strong>Start Node</strong><br />{startNode}</p>
      <p><strong>End Node</strong><br />{endNode}</p>
    </div>

    <p style={textStyle}><strong>Path:</strong> {path ? path.print().join(' -> ') : 'No Path Exists'}</p>
    <div>
    <p style={{marginRight: '5px',textAlign:'left'}}><strong>Total weight</strong><br />{path?.length ? path.weight : 'n/a'}</p>
    <br />
    <p style={{marginRight: '5px',textAlign:'left'}}><strong>Number of paths</strong><br />{path?.length ? path.length - 1 : 'n/a'}</p>
    </div>

  </div>
}

export default TopBar