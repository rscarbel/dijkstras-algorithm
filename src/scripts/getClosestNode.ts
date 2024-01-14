export const getClosestNode = (
  distances: { [key: string]: number },
  visitedNodes: { [key: string]: boolean }
) => {
  let closestNode: string | null = null;
  let closestDistance = Infinity;

  for (const nodeName in distances) {
    const distance = distances[nodeName];
    if (distance < closestDistance && !visitedNodes[nodeName]) {
      closestNode = nodeName;
      closestDistance = distance;
    }
  }

  return closestNode;
};
