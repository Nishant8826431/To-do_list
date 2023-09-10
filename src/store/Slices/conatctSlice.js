import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addTask_user , getTask_user } from "../../Services/Services";
// import { addTaskk, deletetaskk, editTaskk, getTaskk } from "../../Services/Services";


const initialState = {
    contact:[],
    editToggleButtons:false,
    RowIndex : null,
    OpenModelToggle : false,
    editContact:{
        name:"",
        email:"",
        dob:"",
        contact:"",
        username:""
    },
    eye_toggle:false
    
}


export const addTaskk_user = createAsyncThunk('user/addTask_user' , async(data , {getState}) =>{
    const response = await addTask_user(data).then((res)=>{}).catch((err)=>{toast.error("Something went wrong")})
    return response
})

export const getTaskk_user = createAsyncThunk('user/getTask_user' , async(data , {getState})=>{
    const response = await getTask_user().then((res)=>{
        const {data} = res;

        return{
            data
        }
        // toast.success("Data has been added")
    }).catch((err)=>{toast.error("Something went Wrong")})
    return response 
})

const contactSlice = createSlice({
    name:"contactSlice",
    initialState,
    reducers:{
        setEditContact:(state, action)=>{
            
        },
        seteditToggleButtons:(state, action)=>{
            state.editToggleButtons = action.payload;
        },
        setRowIndex:(state,action)=>{
            state.RowIndex = action.payload
        },
        setOpenModelToggle:(state,action)=>{
            state.OpenModelToggle = action.payload
        },
        seteye_toggle:(state,action)=>{
            state.eye_toggle = action.payload
        }

    },
    extraReducers:{
        [addTaskk_user.fulfilled]:(state,action)=>{
            console.log(action.payload.data , "post data");
            

        },
        [addTaskk_user.rejected]:(state,_)=>{
            state.contact = [];
            
        },
        [addTaskk_user.pending]:(state,_)=>{
            state.contact = [];
            
        },
        [getTaskk_user.fulfilled]:(state,action)=>{
            
            state.contact = action.payload.data;
            console.log(action.payload.data , "Get Data");
        },
        [getTaskk_user.rejected]:(state,_)=>{
            state.contact = [];
        },
        [getTaskk_user.pending]:(state,_)=>{
            state.contact = [];
        },
        

    }
})

export const {
    seteditToggleButtons,
    setRowIndex,
    setOpenModelToggle,
    seteye_toggle,
} = contactSlice.actions;

export default contactSlice.reducer;