// import { createSlice, configureStore } from '@reduxjs/toolkit'


// const counterSlice = createSlice({
//   name: 'product',
//   initialState: {
//     value: []
//   },
//   reducers: {
//     add: state => product => {
//         state.value.push(product)
//     },
//     load: state => {
      
//     //   state.value = storageItems 
//     },
//     deleted: state => {
//       state.value -= 1
//     },
//     products: state => state 
//   }
// })

// export const { add, deleted, products } = counterSlice.actions

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// export {store}; 

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// {value: 1}
// store.dispatch(incremented())
// {value: 2}
// store.dispatch(decremented())
// {value: 1}