import sampleGraph from "./sampleGraph";


const DikstrasAlorithm = (props) => {
  let exampleGraph = JSON.stringify(sampleGraph,null,2)
  return <p>
    {exampleGraph}
    </p>
};

export default DikstrasAlorithm;