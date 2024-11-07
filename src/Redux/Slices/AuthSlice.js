import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === "true",
    role: localStorage.getItem('role') || "",
    data: JSON.parse(localStorage.getItem('data')) || {},
};

export const createAccount = createAsyncThunk("auth/signup", async (data) => {
    try {
        const res = await axiosInstance.post("user/register", data); // Await the response
        toast.promise(res, {
            loading: "Wait! Creating your account...",
            success: (response) => response?.data?.message || "Account created successfully!",
            error: "Failed to create account",
        });
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Error creating account");
        throw error; // Re-throw to propagate error in createAsyncThunk
    }
});

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{},
});

export default authSlice.reducer;