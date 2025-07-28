import {createStore} from 'redux';

// initial state
const initialState = {
    user: {
        wallet: 5000
    }
}

const UPDATE_WALLET = "UPDATE_WALLET"

// 'i think' this like "action"
export const updateWallet = (amount) => ({
    type: UPDATE_WALLET,
    payload: amount
})

// reducer function which takes 'action' and 'initial state' as input, and outputs the 'updated state'
function reducer(state = initialState, action) {  // looked like a weired syntax!! Don't know what it does..
    switch(action.type) {
        case UPDATE_WALLET:
            return {
                user: {
                    wallet: state.user.wallet - action.payload
                }
            }
        
        default:
            return state
    }
}


const store = createStore(reducer)



export default store;