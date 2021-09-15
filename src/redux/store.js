import reducer from './slicers'
const { configureStore } = require('@reduxjs/toolkit')
const store = configureStore({
  reducer: reducer,
})
export default store
