import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Routes_cont from "./Routes";
import Sidebar from "./Sidebar";
// import Sidebar from "./myComponents/Sidebar";

const Align = () => {
  return (
    <div>
      
      
          <BrowserRouter>
            <div className="cont_wrapper">
              <div className="right_cont">
                <Sidebar />
              </div>

              <div className="left_cont">
                <Header />
                <Routes_cont/>
              </div>
            </div>
          </BrowserRouter>
      
    </div>
  );
};

export default Align;
