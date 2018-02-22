import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  app: (state = {}, action) => {
    switch (action.type) {
      default:
        return state
    }
  },
})

export default rootReducer
