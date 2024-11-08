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

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log in"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
        })

// const authSlice =createSlice({
//     name:'auth',
//     initialState,
//     reducers:{},

    }
});

export default authSlice.reducer;