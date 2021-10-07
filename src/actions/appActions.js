
/**
 * 
 * @param {'f' | 'c'} tempUnit 
 * @returns 
 */
export const setTempUnit = (tempUnit) => {
  return dispatch => {
    dispatch({type: 'SET_TEMP_UNIT', payload: {tempUnit}})
  }
} 