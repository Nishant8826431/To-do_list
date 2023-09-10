import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headerHeading:"Dashboard"
}

const dashboardSlice = createSlice({
    name:"dashboardSlice",
    initialState,
    reducers:{
        setHeaderHeading:(state, action)=>{
            state.headerHeading = action.payload
        }
    }
})
export const {
    setHeaderHeading

} = dashboardSlice.actions  
export default dashboardSlice.reducer;