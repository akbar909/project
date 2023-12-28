import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    numOfApple: 20,
}

const appleSlice = createSlice({
    name: 'Apple' ,
    initialState,
    reducers: {
    ordered : (state) =>{
        state.numOfApple--;
    },
    restoreApple : (state) =>{
        state.numOfApple++;
    }
}})

export default appleSlice.reducer
export const {ordered, restoreApple} = appleSlice.actions