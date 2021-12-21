const componentStyle = {
  height: '100px',
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '999',
  borderBottom: '1px solid #000000',
  margin: 'auto',
}

const h1Style = {
  fontSize: '3em',
  margin: '0 1.3em',
  zIndex: '999',
}

const buttonStyles = {
  margin: '0 .5em',
  padding: '.5em 2em',
  borderRadius: '10px',
  color: '#FFFFFF',
  fontSize: '1.2em',
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
  backgroundColor: '#ffc107',
  color: '#000000',
  borderColor: '#ffc107',
}

const findPathButton = {
  ...buttonStyles,
  backgroundColor: '#28a745',
  borderColor: '#28a745',
}

const textStyle = {
  fontSize: '1.2em',
  margin: '0 2em',
  textAlign: 'left',
}

const TopBar = ({ reloadAction, startNode, endNode, path }) => {
  return <div style={componentStyle}>
    <h1 style={h1Style}>Dijkstra's Algorithm</h1>
    <button onClick={reloadAction} style={newGraphButton}>New Graph</button>
    <button style={selectButton}>Select Nodes</button>
    <button style={findPathButton}>Find Path</button>
    <div style={textStyle}>
      <p>Start Node: {startNode}</p>
      <p>End Node: {endNode}</p>
    </div>
    <p style={textStyle}>Path: {path}</p>

  </div>
}

export default TopBar