const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                weatherData: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default: 
            return state
    }
}

export default weatherReducer