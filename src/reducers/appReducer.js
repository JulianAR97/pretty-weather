const initialState = {
  cities: [
    {
      city: "Add City",
      hi: 6,
      lo: 4,
      temp:5,
      description: "partly cloudy",
    }
  ], 
  tempUnit: 'f'
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET_CITIES': 
      return ({...state, cities: action.payload.cities})

    case 'SET_TEMP_UNIT':
      return ({...state, tempUnit: action.payload.tempUnit })
    
    default:
      return state
  }
}

export default appReducer