const initialState = {
  cities: [
    {
      city: "Add City",
      hi: 6,
      lo: 4,
      temp:5,
      description: "partly cloudy",
    }
  ]
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case 'SET_CITIES': 
      return ({...state, cities: action.payload.cities})
    
    default:
      return state
  }
}

export default appReducer