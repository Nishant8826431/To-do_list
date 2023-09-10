import React from "react";
import { setHeaderHeading } from '../store/Slices/dashboardSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Dashboard = () => {
  const dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(setHeaderHeading('Dashboard'));
  },[])
  
  return (
    <div className="routes_container">
      <div className="flex-box">
        <div className="calander_cont">
          <div className="flex_cont padding_cont">
            <div>8 Tasks Completed out of 10</div>
            <div>
              Show : <span className="txt_color">This week </span>
            </div>
          </div>
          <div className="line ">
            <div className="inline"></div>
          </div>

          <div className="dates_cont date_edit">
            <h2>23 December, Sunday</h2>

            <div className="date_lists m_t">
              <table>
                <tr>
                  <td>sun</td>
                  <td> <span className="txt_color">Mon</span></td>
                  <td>tue</td>
                  <td>wed</td>
                  <td>thu</td>
                  <td>Fri</td>
                  <td>sat</td>
                </tr>

                <tr class="m-down">
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="dashbord_cards m-top">
            <div className="card_head padding_cont_card">
              <h3>Send benefit review by Sunday</h3>
              <p>Reminder</p>
            </div>
            <div className="mid_card padding_cont_card">
              Due date: December 23, 2018
            </div>
            <div className="card_img_cont padding_cont_card">
              <div className="d_flex width">
                <div>
                  <img className="img_container" src="../images/image 2.svg" />
                </div>
                <p> George Fields</p>
              </div>
              <div>
                <button className="btn_green">Completed</button>
              </div>
            </div>
          </div>

          <div className="dashbord_cards ">
            <div className="card_head padding_cont_card">
              <h3>Send benefit review by Sunday</h3>
              <p>Reminder</p>
            </div>
            <div className="mid_card padding_cont_card">
              Due date: December 23, 2018
            </div>
            <div className="card_img_cont padding_cont_card">
              <div className="d_flex width">
                <div>
                  <img className="img_container" src="../images/image 2.svg" />
                </div>
                <p> George Fields</p>
              </div>
              <div>
                <button className="btn_yellow">Completed</button>
              </div>
            </div>
          </div>

          <div className="btn_Tertiary">Show More</div>
        </div>

        <div>
          <div className="deals_cont">
          <div className="flex_cont borders padding_cont">
            <div>Deals</div>
            <div>
              Show : <span className="txt_color">Monthly </span>
            </div>
          </div>

          <div className="position_img">
            <img className="graph_img" src="../images/color.svg" alt="color"/>
            <img className="line_img" src="../images/line.svg" alt="line"/>
            
          </div>

          </div>

          <div className="pie_chat_cont"><div className="flex_cont borders padding_cont">
            <div>Tasks</div>
            <div>
              Show : <span className="txt_color">Monthly </span>
            </div>
          </div> 

          <div className="pie_chat_container">
              <div className="inner_pie">
                  <img src="../images/Screenshot 2023-02-13 221320.png"/>
              </div>

              <div>
                <ul>
                  <li>
                  Active
                  </li>
                  <li>
                  Completed
                    </li>
                    <li>
                    Ended
                    </li>
                </ul>
              </div>
          </div>
          
          </div>
          


          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
