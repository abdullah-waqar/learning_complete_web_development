import { configureStore } from '@reduxjs/toolkit'
import reactSlicer from "./Slicer1"
export const store = configureStore({
  reducer: {
    slice1: reactSlicer
  },
})

console.log(store)