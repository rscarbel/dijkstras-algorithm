import sampleGraph from "./sampleGraph";


const DijkstrasAlorithm = (props) => {
  let exampleGraph = JSON.stringify(sampleGraph,null,2)
  return <p>
    {exampleGraph}
    </p>
};

export default DijkstrasAlorithm;