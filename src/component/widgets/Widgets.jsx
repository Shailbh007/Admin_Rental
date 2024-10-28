import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export default function Widgets({type}) {
    let data;
    switch(type)
    {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className='icon'
                style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
            };
        break;
        case "bookings":
            data={
                title:"BOOKINGS",
                isMoney:false,
                link:"View all bookings",
                icon:<HomeIcon className='icon'/>
            };
        break;
        case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletIcon className='icon'
                style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/>
            };
        break;
        default:
            break;  

    }
  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"} 2,415{data.isMoney && "k"}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="percentage ">
                    <KeyboardArrowUpIcon/>
                 20%
            </div>
                {data.icon}
            
        </div>
      
    </div>
  )
}
