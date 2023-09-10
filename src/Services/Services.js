import axios from "axios";

const api = "http://localhost:4200/" ; 

export const addTaskk = async (body) => {
    return await axios.post(api + "Task-data",body)
};

export const getTaskk = async ()=>{
    return await axios.get(api  + "Task-data")
}

export const deletetaskk = async(id)=>{
    return await axios.delete(api + "Task-data" + "/" + id)
}
export const editTaskk = async(body)=>{
    console.log(body , "bodyyyyyyy");
    const {id,task} = body;
    return await axios.patch(api + "Task-data" + "/" +id,{
        Task : task
    })
}



                    // User Data 


export const addTask_user = async (body) =>{
    return await axios.post(api + "User-data" , body)
}

export const getTask_user = async () =>{
    return await axios.get(api + "User-data")
}

export const deleteTask_user = async (id) => {
    return await axios.delete(api + "User-data" + "/" + id)
}

export const editTask_user = async(id,body)=>{
    return await axios.put(api + "User-data" + "/" +id,body)
}



