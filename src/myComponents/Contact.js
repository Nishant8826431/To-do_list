
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer , toast} from "react-toastify";
import { useSelector , useDispatch } from "react-redux";
import { addTaskk_user, setOpenModelToggle, setRowIndex, seteditToggleButtons, seteye_toggle } from "../store/Slices/conatctSlice";
import { getTaskk_user } from "../store/Slices/conatctSlice";
import { setHeaderHeading } from '../store/Slices/dashboardSlice';
import { editTask_user } from "../Services/Services";



const add_user = {
  name: "",
  email: "",
  password: "",
  dob: "",
  contact: "",
  username:"",
};

const Contact = () => {
  // const [open_model, setBtntoggle] = useState(false);
  const [contacts, setContacts] = useState(add_user);
  const [editData , setEditData] = useState(add_user);
  // const [editToggle , seteditToggle] = useState(false);
  // const [tableData, settableData] = useState();
  const [Name , setName] = useState("");
  const [Email , setEmail] = useState("");
  const [Password , setPassword] = useState("");
  const [Date , setDate] = useState("");
  const [Contact , setContact] = useState("");
  const [Username , setUsername] = useState("");
  // const [eyetog , seteyetog] = useState(false);
  // const [studentToggle , setstudentToggle] = useState(false)
  // const [Index_edit , setIndex_edit] = useState()
  const [previous , setprevious] = useState()
  const dispatch = useDispatch();
  var tableData = useSelector((state)=> state?.contact?.contact);
  var state = useSelector ((state)=> state?.contact);
  let students_toggle = useSelector((state)=>state.contact.editToggleButtons);
  let Index_student = useSelector((state)=>state.contact.RowIndex);
  const open_model = useSelector((state)=>state.contact.OpenModelToggle);
  const eye_ = useSelector((state) => state.contact.eye_toggle);
  

  const handleContact  = (e) =>{
    const {name , value} = e.target;
    setContacts((prev)=>({...prev,[name]:value}))
  }
  console.log( "Data" ,  contacts);

  

  useEffect(()=>{
    dispatch(setHeaderHeading('Contact'));
  },[])
  const handleSubmit = () =>{

    if(Name === ""){

      toast.error("Please Enter Name", {theme:"colored"});

      

    }else if(Email === ""){
      toast.error("Please Enter Email", {theme:"colored"});
      
    }else if (Password === ""){
      toast.error("Please Enter password", {theme:"colored"});
      
    }else if(Date === ""){
      toast.error("Please Enter Date", {theme:"colored"});
      
    }else if(Contact === ""){
      toast.error("Please Enter Contact", {theme:"colored"});
      
    }else if(Username === ""){
      toast.error("Please Enter UserName", {theme:"colored"});
      
    }

    
    else{

      dispatch(addTaskk_user(contacts),toast.success( " Contact is Added" ,{theme:"colored"}) , setContacts('') , setName(""), setUsername(""), setContact(""),setContact(""),setDate(""),setPassword(""),setEmail(""),   dispatch(setOpenModelToggle(false)))  
    }
  
  }

  useEffect(()=>{
    dispatch(getTaskk_user())
    state.error  &&   toast.error('error')
  },[open_model, contacts, students_toggle])

  const handleEditData = (e) =>{

    const {name , value} = e.target;
    setEditData((prev)=>({...prev,[name]:value}))
    console.log("inside", name);
  }



  const handleEditSubmit = (value) =>{
    console.log(value);
    const {id} = value;
    
    editTask_user(id , {
      name:editData.name ? editData.name : previous.name,
      email: editData.email  ? editData.email : previous.email,
      dob:editData.dob  ? editData.dob : previous.dob, 
      contact: editData.contact  ? editData.contact : previous.contact,
      username: editData.username ? editData.username : previous.username,

    }).then((res)=>{dispatch(seteditToggleButtons(false)); toast.success("Contact has been updated",{theme:"colored"}); console.log(res , "Responsing");}).catch((err)=>{console.log(err);})  
  }


  const toggleButton = () =>{


    // console.log("Clicked");
      let eye = document.getElementById("icon_");
      // console.log(eye, " jgswhdijs");

      eye.type === "password" ?  eye.type = "text" :  eye.type = "password";

      dispatch(seteye_toggle(!eye_))

  }
  return (

    <>

<div className='button_cont_new'>
            <button className='btn_accent'  onClick={() => dispatch(setOpenModelToggle(true))}>Add contact</button>
        </div>
      <div onClick={() => dispatch(setOpenModelToggle(false))} className='contacts_cont'>
        

        

        <ToastContainer autoClose={1000} theme="dark"/>


        <div className='table-cont'>
            <table className="Scroll_css">

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>D O B</th>
                <th>Contact</th>
                <th>Username</th>
                <th>Action</th>
              </tr>

              
             {
              tableData && tableData.map((value, index)=>{
                return(
                  <tr>
                <td>{index + 1}</td>
                <td>{students_toggle && Index_student === index ? <input name="name" defaultValue={value.name} onChange={(e)=>{handleEditData(e)}}/> : value.name}</td>
                <td>{students_toggle && Index_student === index ? <input name="email"  defaultValue={value.email}onChange={(e)=>{handleEditData(e)}}  /> : value.email }</td>               
                <td>{students_toggle && Index_student === index ? <input name="dob" defaultValue={value.dob} onChange={(e)=>{handleEditData(e)}} /> : value.dob}</td>
                <td>{students_toggle && Index_student === index ? <input name="contact" defaultValue={value.contact} onChange={(e)=>{handleEditData(e)}}/> : value.contact}</td>
                <td>{students_toggle && Index_student === index ? <input name="username" defaultValue={value.username} onChange={(e)=>{handleEditData(e)}}/> : value.username}</td>


                {students_toggle && Index_student === index ? (<td><button onClick={()=>{{handleEditSubmit(value)}}}>Ok</button> <button onClick={()=>{dispatch(seteditToggleButtons(false))}}>Cancel</button></td>) : (<td><button onClick={()=>{{dispatch(seteditToggleButtons(true))}; dispatch(setRowIndex(index)); setEditData(); setprevious(value)}}> <i class="fa-solid fa-pen-to-square"></i></button></td>) } 
                
                
              </tr>
                )
              })
             } 

            </table>
        </div>



       
    </div>
    {open_model && open_model &&
            (<div className='floating_form New_form'>
            <label>Add new Contact</label>
            <input name="name" onChange={(e)=>{handleContact(e) ; setName(e.target.value)}} type="text" placeholder="Name"/>
            <input name="email" onChange={(e)=>{handleContact(e) ; setEmail(e.target.value)}}  type="email" placeholder="email"/>
            <input id="icon_" className="input_relat" name="password" onChange={(e)=>{handleContact(e) ; setPassword(e.target.value)}}  type="password" placeholder="Password"/>{eye_ ? (<i onClick={()=>{toggleButton()}} className="fa-regular fa-eye"></i>) : (<i onClick={()=>{toggleButton()}} className="fa-regular  fa-eye-slash"></i>)}
            <input name="dob" onChange={(e)=>{handleContact(e) ; setDate(e.target.value)}} type="date" placeholder="D O B "/>
            <input name="contact" onChange={(e)=>{handleContact(e) ; setContact(e.target.value)}} type="number" placeholder="Contact"/>
            <input name="username" onChange={(e)=>{handleContact(e) ; setUsername(e.target.value)}} type="type" placeholder="Username"/>
            <br/>
            <button className="btn_submit" onClick={() => {handleSubmit(); dispatch(seteye_toggle(false))}} >Submit</button><button className="btn_cancel" onClick={() => {dispatch(setOpenModelToggle(false));setContacts() ; setName(""); setUsername(""); setContact("");setContact("");setDate("");setPassword("");setEmail(""); dispatch(seteye_toggle(false) ) }}>Cancel</button>
          </div>)
        }
    </>
    
  )
}

export default Contact