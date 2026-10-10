import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
    name: "slice1",
    initialState: {count: 0},

    reducers: {
        Increment: (state)=> {state.count = state.count + 1},

        Decrement: (state) => {
            if(state.count > 0)
                state.count = state.count - 1
        },

        Reset: (state) => {
            state.count = 0
        }
    }
})

console.log(reactSlicer)


export const { Increment, Decrement, Reset } = reactSlicer.actions

export default reactSlicer.reducer
