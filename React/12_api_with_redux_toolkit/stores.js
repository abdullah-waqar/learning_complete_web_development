import { configureStore } from '@reduxjs/toolkit'
import slicer1Reducer from "./slicer1"
export const store = configureStore({
  reducer: {
    slice1: slicer1Reducer,

  },
})

export default slicer1Reducer