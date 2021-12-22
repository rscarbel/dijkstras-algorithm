const Node = ({
  name,
  x,
  y,
  selectionMode,
  toggleSelectionMode,
  selectStartNode,
  selectEndNode
  }) => {
  const divStyle = {
    top: y,
    left: x,
    zIndex: 2,
    display: 'grid',
    height: '100px',
    width: '100px',
  };

  const gridChild = {
    gridColumn: 1,
    gridRow: 1,
    height: '100%',
    width: '100%',
  }

  return <>
  <div className='node-circle' id={name}  style={divStyle}>

    <svg style={gridChild}>
      <circle
      className='node'
      cx='50'
      cy='50'
      r='50'
      fill='#282c34'
      opacity={0.8}
      />
    </svg>

    <div className="node-text-wrapper">
      <p className='node-text'>{name}</p>
    </div>

  </div>
  </>
}

export default Node