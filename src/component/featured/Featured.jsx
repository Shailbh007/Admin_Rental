import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Featured() {
  return (
<div className='featured'>
     
      <div className="bottom">
      <div className="top">
        <h1 className="title">New Booking</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
        <div className="featuredChart">
        <CircularProgressbarWithChildren className="chartValue" value={21} text={"21"} strokeWidth={10} styles={{
          path: {
            stroke: "Green",
          },
          trail: {
            stroke: "LightGray",
            strokeWidth: 10,
          },
          text: {
            fill: "Green",
            fontSize: "15px",
          }}}/>
         
        </div>
        <h1 className="title">Total: 21</h1>
      </div>
      <div className="bottom">
      <div className="top">
        <h1 className="title">Registration</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
        <div className="featuredChart">
        <CircularProgressbarWithChildren className="chartValue" value={21} text={"21"} strokeWidth={10} styles={{
          path: {
            stroke: "Orange",
          },
          trail: {
            stroke: "LightGray",
            strokeWidth: 10,
          },
          text: {
            fill: "Green",
            fontSize: "15px",
          }}}/>
         
        </div>
        <h1 className="title">Total: 21</h1>
      </div>
      <div className="bottom">
      <div className="top">
      <h1 className="title">Booked House</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
        <div className="featuredChart">
        <CircularProgressbarWithChildren className="chartValue" value={82} text={"82"} strokeWidth={10} styles={{
          path: {
            stroke: "blue",
          },
          trail: {
            stroke: "LightGray",
            strokeWidth: 10,
          },
          text: {
            fill: "Green",
            fontSize: "15px",
          }}}/>
         
        </div>
        <h1 className="title">Total: 82</h1>
      </div>
      <div className="bottom">
      <div className="top">
        <h1 className="title">Schedule Homes</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
        <div className="featuredChart">
        <CircularProgressbarWithChildren className="chartValue" value={21} text={"21"} strokeWidth={10} styles={{
          path: {
            stroke: "crimson",
          },
          trail: {
            stroke: "LightGray",
            strokeWidth: 10,
          },
          text: {
            fill: "Green",
            fontSize: "15px",
          }}}/>
         
        </div>
        <h1 className="title">Total: 21</h1>
      </div>
     
    
    </div>
    
  )
}
