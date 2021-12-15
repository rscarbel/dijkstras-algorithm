const generateNumber = (max,min) => Math.ceil((Math.random() * max) + min);

/**
 * @description Function to generate weight of lines
 * @returns {Number} value for weight
 */
 const generateWeight = () => {
  let val = generateNumber(21, 0)
  if (val === 13 ) {
    return 7
  } else if (val === 12) {
    return 6
  }
  else if (val === 11) {
    return 5
  }
  else if (val === 10) {
    return 4
  }
  else if ((val === 9) || (val === 8)) {
    return 3
  }
  else if ((val <= 7) && (val >= 5)) {
    return 2
  }
  else {
    return 1
  }
}

export default generateWeight