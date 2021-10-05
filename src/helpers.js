

/**
 * 
 * @param {Number} temp - Int or Float
 * @param {'f' | 'c'} unit - The unit that's being converted from
 * @returns {Number}
 */
export const convertTemp = (temp, unit) => {
  let newTemp;

  if (unit === 'c') {
    newTemp = (9 * temp / 5) + 32
  } else {
    newTemp = (5 * temp / 9) - 32
  }

  return newTemp
}