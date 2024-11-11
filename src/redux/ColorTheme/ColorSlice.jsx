import {createSlice} from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name : "colorTheme",
    initialState : {
        theme : "pink",
    },
    reducers: {
        changeTheme : (state,action) =>{
            state.theme = action.payload;
        }
    }
})


export const {changeTheme} = colorSlice.actions;
export default colorSlice.reducer;