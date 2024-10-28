import React from 'react'
import './sidebar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '@mui/icons-material/Dashboard';
import PersonOutlineIcons from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from '@mui/material';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import { columnsStateInitializer } from '@mui/x-data-grid/internals';
export default  function Sidebar() {
    const {dispatch}=useContext(DarkModeContext);
    const {darkMode}=useContext(DarkModeContext);
  return (
    <>
   <div className="sidebar" >
    <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Admin</span>
        </Link>
    </div>
    <hr/>
    <div className="center">
        <ul>
        <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
                <Dashboard/>
                <span>Dashboard</span>
            </li>
          </Link>
            <li>
                <Link to="/users" style={{ textDecoration: "none" }}>
            <PersonOutlineIcons className="icon" />
                <span>Users</span>
                </Link>
            </li>
          <Link to="/house" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Rent Booking</span>
            </li>
          </Link>
          <Link to="/house/new" style={ {textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Registration</span>
          </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Booked House</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
    </div>
    <div className="bottom" >
       <Button className='mode_btn' onClick={() => dispatch({type:"TOGGLE"})
       }>{darkMode? <LightModeIcon/>:<DarkModeIcon/>}</Button>
       
    </div>
   </div>
   </>

  )
}

