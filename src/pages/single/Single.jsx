import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import './single.scss'
import Chart from '../../component/chart/Chart'
import List from '../../component/table/Table'

export default function Single() {
  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Anupama</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">anumpama@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91 2345 67 89</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  123 Main Street Ranchi , Jharkhand
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
      <h1 className="title">Last Transactions</h1>
        <List/>
      </div>
    </div>
  </div>
);
};