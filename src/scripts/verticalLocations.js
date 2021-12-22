const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

const verticalLocations = (nodeAmount) => {
  const values = [];


  let height = window.innerHeight - 120;

  let yCoordinate = 0;

  let distanceToWindowEdge = yCoordinate < (height / 2)
  ? height - yCoordinate - 100
  : yCoordinate - 150;

  //Anything less than this just isn't interesting, and anything more starts to be too predictable
  let minimumVerticalChange = height / 3.2 > 100
  ? height / 5
  : 100;

  for (let i = 99; i > 0; i--) {
    let verticalChange = generateNumber(distanceToWindowEdge/2, minimumVerticalChange)
    //keep nodes from being created above the top of the page
    if ((yCoordinate - verticalChange) < 100) {
    yCoordinate += verticalChange;
    }
    //keep nodes from being created below the bottom of the page
    else if ((yCoordinate + verticalChange) > (height - 100)){
    yCoordinate -= verticalChange;
    } else {
      if (generateNumber(1,0)) {
      yCoordinate += verticalChange;
    } else {
      yCoordinate -= verticalChange;
    }
  };
  values.push(yCoordinate);
}
  return values;
};

export default verticalLocations;