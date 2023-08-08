import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {url, setHeaders} from "./api";
import {toast} from "react-toastify";

const initialState = {
    list: [],
    status: null,
    deleteStatus: null,
};

export const usersFetch = createAsyncThunk("users/usersFetch", async () => {
    try{
        const response = await axios.get(`${url}/users`, setHeaders());
        return response.data;
    } catch(err){
        console.log(err);
    }
});
export const usersDelete = createAsyncThunk("users/usersDelete", async(id) => {
    try{
        const response = await axios.delete(`${url}/users/${id}`, setHeaders());
        return response.data;
    }catch(err){
        console.log(err);
        toast.error(err.response?.data);
    }
})
const userSlice = createSlice({
    name: "users",
    initialState,
     reducers: {},
     extraReducers: {
        [usersFetch.pending]: (state, action) => {
            state.status = "pending";
          },
        [usersFetch.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = "success";
          },
        [usersFetch.rejected]: (state, action) => {
            state.status = "rejected";
          },
        [usersDelete.pending]: (state, action) => {
            state.deleteStatus = "pending";
          },
          [usersDelete.fulfilled]: (state, action) => {
            // state.items.push(action.payload);
            const newList = state.list.filter((list) => list._id !== action.payload._id)
            state.items = newList
            state.deleteStatus = "success";
            toast.error("Da xoa nguoi dung!");
          },
          [usersDelete.rejected]: (state, action) => {
            state.deleteStatus = "rejected";
          },
     },
});
 export default userSlice.reducer;