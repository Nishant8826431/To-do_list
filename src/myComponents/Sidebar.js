import React from "react";
import "../App.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Sidebar = () => {

  const headerHeading = useSelector((state)=> state.dashboard.headerHeading)
  return (
    <>
      <div className="container">
        
        <div className="innerContainer">
          <div className="sas">
            <h3 className="Saas-kit">{headerHeading}</h3>
          </div>
          <div className="image-wrapper">
            <div className="img-container">
              <img src="../images/image 2.svg" alt="icon" />
            </div>
            <div className="text-wrapper">
              <h3 className="head-txt">Sierra Ferguson</h3>
              <p className="sub-txt">ferguson@gmail.com</p>
            </div>
          </div>
          <div className="lists">
          <ul>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/">
                
                Dashboard
              </Link>
            </li>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/tasks">
                
                Tasks
              </Link>
            </li>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/email">
                
                Email
              </Link>
            </li>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/contact">
                
                Contact
              </Link>
            </li>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/chat">
                
                Chat
              </Link>
            </li>
            <li className="items">
              <img src="../icons/Tasks.svg" />
              <Link className="link_txt" to="/deals">
                
                Deals
              </Link>
            </li>
            <li className="items"></li>
          </ul>
        </div>
        <div className="items padding_setting">
          <img src="../icons/setting.svg" />
          Settings
        </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
