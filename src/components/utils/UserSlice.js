import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name : "user",
    initialState : {
        users : null,
        error : null
    },
    reducers : {
        addUsers : (state , action )=>{
            state.users = action.payload
        },
        userError : (state , action) =>{
            state.error = action.payload
        },
        removeUser : (state , action) =>{
            state.users = null
        }
    }
})
export const {addUsers , userError , removeUser} = UserSlice.actions;
export default UserSlice.reducer;