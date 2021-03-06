const horizontalLocations = (nodeAmount: number) => {
  const values = [];

  const generateNumber: (max: number, min: number) => number = (max, min) =>
    Math.ceil(Math.random() * (max - min + 1) + min);

  let horizontalSpacing = window.innerWidth / nodeAmount - 300 / nodeAmount;

  let xCoordinate = 0;

  for (let i = nodeAmount + 1; i > 0; i--) {
    xCoordinate += generateNumber(horizontalSpacing, 100);
    values.push(xCoordinate);
  }

  return values;
};

export default horizontalLocations;
