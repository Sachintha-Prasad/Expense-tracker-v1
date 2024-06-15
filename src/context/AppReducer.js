export default (state, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload,
            }
        default:
            return state
    }
}
