const horizontalLocations = (nodeAmount) => {

  const values = []

  const generateNumber = (max,min) => Math.ceil((Math.random() * (max - min + 1)) + min);

  let horizontalSpacing = (window.innerWidth / nodeAmount) - (300 / nodeAmount);

  let xCoordinate = 0;

  for (let i = 99; i > 0; i--) {
    xCoordinate += generateNumber(horizontalSpacing,100);
    values.push(xCoordinate)
  }

  return values;
};

export default horizontalLocations;