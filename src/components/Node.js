const Node = ({ name }) => {
  return <>
    <svg width='50' height='50'>
      <circle cx='25' cy='25' r='25' fill='gray' />
      <text x="20" y="29" fill="white">{name}</text>
    </svg>
  </>
}

export default Node