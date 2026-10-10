import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const FetchData = createAsyncThunk(
    // Action => type : payload
    "Coin/fetch",
    async (args, thunkAPI) => {
        try
        {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${args}`)

            const data = await response.json()

            return data;
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const slicer1 = createSlice( {
    name: "slice1",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(FetchData.pending , (state) => {state.loading = true
            state.error = null
        })
        .addCase(FetchData.fulfilled , (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error  = null
        })
        .addCase(FetchData.rejected , (state , action) => {
            state.error = action.payload
            state.loading = false
           
        })
    }
} )


export default slicer1.reducer
export {FetchData}
