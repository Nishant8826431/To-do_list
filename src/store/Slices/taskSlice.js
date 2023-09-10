import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addTaskk, deletetaskk, editTaskk, getTaskk } from "../../Services/Services";


const initialState = {
    task:[],
    
    taskEdit:{
        id:'',
        task:''
    },

    editTaskToggle : false,
    DeleteToggle : false,
    addTAsk : '',

    ModuleOpenToggle : false,
    Check_Toggle : false ,

    // editSubmitTogglle:false,
    getEditToggle:{
        rowIndex:null,
        previousData:"",
        rowEditToggle: false,
    },

    dropData: "All",

   
}
export const fetchTask = createAsyncThunk('data/fetchTask',async(data,{getState}) =>{
    const response = await getTaskk().then((res)=>{

       
        const data = res.data ;
        
        return{
            data
        }
    }).catch((err)=>{
        toast.error("Something went wrong", {timeOut : 5000});
}
)
return response 
})


export const addTask12 = createAsyncThunk('user/addTask12', async (data , {getState}) => {
        
        const response = await addTaskk(data).then((res)=>{
            
                toast.success("Task Added sucessfully", {theme:"colored"});
            
        }).catch((err)=>{
        toast.error('Something went wrong', { timeOut: 5000 });
        })
        return response
    })

export const dltTask = createAsyncThunk('user/dltTask', async(id , {getState}) =>{
    const response = await deletetaskk(id).then((res)=>{
        toast.error( "Task is Deleted",{ theme: "colored" })
    }).catch((err)=>{toast.error("Something went wrong")});
    return response
})

export const editTsk = createAsyncThunk('user/editTsk' , async( body , {getState})=>{
    console.log(getState());
    const {task} = getState();
    const {taskEdit} = task;
    
    const response = await editTaskk(taskEdit).then((res)=>{ toast.success("Task is updated" , {theme:"colored"})}).catch((err)=>{toast.error("Something went wrong")});
    return response
})

const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers:{
        setTaskEdit :(state , action )=>{
            console.log(action.payload)
            const {id , task} = action.payload
            state.taskEdit.id = id
            state.taskEdit.task = task

        },

        // editSubmitTogglle:(state, action)=>{

            
        // },


        setTaskEditRow :(state,action)=>{
            console.log(action.payload);
            state.getEditToggle = action.payload
        },

        setaddTask : (state,action)=>{
            state.addTAsk = action.payload;
        },
        setEditTaskToggle :(state, action)=>{
            state.editTaskToggle = action.payload
        },
        setDeleteeToggle : (state ,action) =>{
            state.DeleteToggle = action.payload
        },
        setModuleOpenToggle :(state, action)=>{
            state.ModuleOpenToggle = action.payload
        },
        setCheck_Toggle: (state,action) =>{
            state.Check_Toggle = action.payload
        },
        setdropData : (state,action) =>{
            state.dropData = action.payload
        }
        

    },
    extraReducers:{
        [fetchTask.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state.task = action.payload.data;
            state.loading = false;
            state.error = false;
        },
        [fetchTask.rejected]:(state, _)=>{
            state.task =[];
            state.loading = false;
            state.error = true;
        },
        [fetchTask.pending]:(state, _)=>{
            state.task =[];
            state.loading = true;
            state.error = false;
        },
        [addTask12.fulfilled]:(state, action)=>{
            // state.task = action.payload.data;  
        },
        [addTask12.rejected]: (state, _) => {
            state.task = [];
          },
          [addTask12.pending]: (state, _) => {
            state.task = [];
          },
          [dltTask.fulfilled]:(state, action)=>{
             
        },
        [dltTask.rejected]: (state, _) => {
            state.task = [];
          },
          [dltTask.pending]: (state, _) => {
            state.task = [];
          },
          [editTsk.fulfilled]:(state, action)=>{
            // editSubmitTogglle = true;
            // state.task = action.payload.data;
            state.getEditToggle={
                rowIndex:null,
                previousData:"",
                rowEditToggle: false,
            } 
        },
        [editTsk.rejected]: (state, _) => {
            state.task = [];
          },
          [editTsk.pending]: (state, _) => {
            state.task = [];
          },
          
    }
})

export const {
    setTaskEdit,
    setTaskEditRow,
    setaddTaskToggle,
    setEditTaskToggle,
    setDeleteeToggle,
    setModuleOpenToggle,
    setCheck_Toggle,
    setaddTask,
    setdropData
} = taskSlice.actions;

export default taskSlice.reducer;

