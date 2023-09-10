import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  setaddTask, setCheck_Toggle, setDeleteeToggle, setEditTaskToggle, setModuleOpenToggle } from "../store/Slices/taskSlice";

import { useSelector, useDispatch } from "react-redux";
import {
  addTask12,
  dltTask,
  editTsk,
  fetchTask,
  setTaskEdit,
  setTaskEditRow,
} from "../store/Slices/taskSlice";
import { setHeaderHeading } from "../store/Slices/dashboardSlice";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import Nodatafound from "./Nodatafound";

const Task = () => {
  // const [btnToggle, setBtntoggle] = useState(false);
  const [addTask, setaddTask] = useState(); 
  // const [updatetask, setupdatetask] = useState();
  // const [tableData, settableData] = useState();
  // const [toggle, setToggle] = useState(false);
  // const [Index, setIndex] = useState();
  // const [edittaskToggle, setedittaskToggle] = useState(false);
  const [filter, handlefilter] = useState("");
  const [drop, handleDrop] = useState("All");
  // const [nodata , setNodata] = useState();
  const [pending_count, setpending_count] = useState();
  const [complete_cont, setcomplete_cont] = useState();
  // const [checktoggle, setchecktoggle] = useState();
  const dispatch = useDispatch();
  var tableData = useSelector((state) => state?.task?.task);
  var state = useSelector((state) => state?.task);

  const selector = useSelector((state) => state.task.getEditToggle);
  const deleteTog = useSelector((state)=> state?.task?.DeleteToggle);
  const Moudule_open = useSelector((state)=> state?.task?.ModuleOpenToggle);
  const check = useSelector((state) => state.task.Check_Toggle); 
  // const add = useSelector((state)=>state?.task?.addTAsk);
  // setCheck_Toggle
  // const addSelector = useSelector((state) => state.task.addTaskToggle);

  console.log(tableData, "tableData");

  // useEffect
  const user = {
    Task: addTask,
    status: "pending",
  };
  // const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(setHeaderHeading("Task"));
  }, []);

  const handleaddtasksubmit = () => {
    if (!user.Task) {
      toast.error("Please Enter Value", { theme: "colored" });
      // setModuleOpenToggle(false);
    } else {
      dispatch(
        addTask12(user),
       
        

        // toast.success("Task is Added Successfully", { theme: "colored" })
      );
      dispatch(setModuleOpenToggle(false))
      dispatch(setaddTask())

      // .then((res) => {
      //   console.log(res.data);
      //   setModuleOpenToggle(false);
      //   setaddTask()
      //   toast.success( res.data.Task + " is Added Successfully",{theme:"colored"})
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    }
  };

  const handleDelete = (id, Task) => {
    dispatch(dltTask(id));
    dispatch(setDeleteeToggle(!deleteTog));
  };

  const handleEdit = (value, index) => {
    dispatch(
      setTaskEditRow({
        rowIndex: index,
        previousData: value.Task,
        rowEditToggle: true,
      })
    );

    // setupdatetask(value.Task);
    // setIndex(index);
    // setedittaskToggle(true);
    // console.log("inside");
  };

  const handleeditSubmit = (value) => {
    const id = value.id;

    dispatch(editTsk());
    dispatch(setEditTaskToggle(false));
    // dispatch(editTsk(id, {
    //   Task: updatetask,
    //   status: "pending",
    // }),setedittaskToggle(false),
    // toast.success(value.Task + " is Updated Successfully",{theme:"colored"}))
  };

  const handlechecked = (e, id) => {
    console.log(e.target.checked);
    axios
      .patch("http://localhost:4200/Task-data/" + id, {
        status: "completed",
      })
      .then((res) => {
        dispatch(setCheck_Toggle(!check));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(fetchTask());
    state.error && toast.error("error");

    // getTaskk()
    //   .then((res) => {
    //     settableData(res.data);

    // var length_pending = res.data?.filter((item) => {
    //   return item.status === "pending";
    // });
    // setpending_count(length_pending.length);

    // var length_completed = tableData - length_pending;
    // setcomplete_cont(length_completed.length);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [Moudule_open, deleteTog, selector.rowEditToggle, check]);

  return (
    <>
      <div className="button_end">
        
        <button className="btn_accent" onClick={() => dispatch(setModuleOpenToggle(true))}>
          Add Task
        </button>
      </div>
      <div
        className="task_container_parent"
        onClick={() => {
          dispatch(setModuleOpenToggle(false));
        }}
      >
        <div className="button_cont">
          <span> All Data : {tableData?.length}</span>
          <span> Completed task : {complete_cont}</span>
          <span> Incompleted task : {pending_count}</span>
        </div>

        <div>
          <div
            className="input_cont"
            onClick={() => {
              dispatch(setModuleOpenToggle(false));
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                handlefilter(e.target.value);
              }}
              placeholder="Search"
            />
            <select
              onClick={(e) => {
                handleDrop(e.target.value);
              }}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>

          <table
            onClick={() => {
              dispatch(setModuleOpenToggle(false));
            }}
          >
            <thead>
              <tr>
                <th>Id</th>
                <th>Mark as Checked</th>
                <th>Task</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {tableData &&
              tableData
                .filter((items) => {
                  return items.Task?.toLowerCase().includes(filter);
                })
                .filter((item) => {
                  if (drop === "All") {
                    return item;
                  } else if (
                    item.status.toLowerCase() === drop?.toLowerCase()
                  ) {
                    return item;
                  }
                })
                .map((value, index) => {
                  return (
                    <tbody key={value.id.toString()}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            onClick={(e) => {
                              handlechecked(e, value.id);
                            }}
                            type="checkbox"
                            disabled={value.status === "completed"}
                            defaultChecked={value.status === "completed"}
                          />
                        </td>
                        <td
                          className={value.status === "completed" && "strike"}
                        >
                          {selector.rowEditToggle &&
                          index === selector.rowIndex ? (
                            <input
                              defaultValue={value.Task}
                              onChange={(e) => {
                                dispatch(
                                  setTaskEdit({
                                    id: value.id,
                                    task: e.target.value,
                                  })
                                );
                              }}
                            />
                          ) : (
                            value.Task
                          )}
                        </td>
                        <td
                          className={
                            value.status === "pending" ? "pending" : "completed"
                          }
                        >
                          {value.status}
                        </td>

                        {selector.rowEditToggle &&
                        index === selector.rowIndex ? (
                          <>
                            <td>
                              <button onClick={() => handleeditSubmit(value)}>
                                <i class="fa-solid fa-check"></i>
                              </button>
                            </td>

                            <td>
                              <button
                                onClick={() => {
                                  dispatch(
                                    setTaskEditRow({
                                      rowIndex: null,
                                      previousData: "",
                                      rowEditToggle: false,
                                    })
                                  );
                                }}
                              >
                                <i class="fa-sharp fa-solid fa-xmark"></i>
                              </button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>
                              <button
                                disabled={value.status === "completed"}
                                onClick={() =>
                                  handleEdit(value, index, value.Task)
                                }
                              >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </button>
                            </td>

                            <td>
                              <button
                                onClick={() => {
                                  handleDelete(value.id, value.Task);
                                }}
                              >
                                <i class="fa-solid fa-trash-can"></i>
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    </tbody>
                  );
                })}
          </table>
          {console.log(tableData)}
        </div>
      </div>
      {Moudule_open && Moudule_open && (
        <div className="floating_form">
          <label>Add new user</label>
          <br />
          <input
            className="inner_input"
            placeholder="Add Task"
            name="task"
            onChange={(e) => {
              dispatch(setaddTask(e.target.value));
            }}
            type="text"
          />
          <br />
          <br />

          <button
            onClick={() => {
              handleaddtasksubmit();
            }}
            className="btn_submit"
          >
            Submit
          </button>

          <button
            onClick={() => {
              dispatch(setModuleOpenToggle(false));
              dispatch(setaddTask());
            }}
            className="btn_cancel"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Task;
