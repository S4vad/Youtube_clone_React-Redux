import { createSlice } from "@reduxjs/toolkit";

const navSlice=createSlice({
  name:"navSlice",
  initialState:{
    showMenuBar:true
  },
  reducers:{
    toggleMenuBar:(state)=>{state.showMenuBar = !state.showMenuBar},
    closeMenu:(state)=>{state.showMenuBar=false}
  }
})

export default navSlice.reducer;
export const {toggleMenuBar,closeMenu}=navSlice.actions