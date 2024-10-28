import React from 'react'
import './home.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Widgets from '../../component/widgets/Widgets'
import Featured from '../../component/featured/Featured'
import Chart from '../../component/chart/Chart'
import Table from '../../component/table/Table'
export default function Home() {
  return (
    <div className='home'>
     <Sidebar className="Sidebar"/> 
     <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widgets type="user"/>
        <Widgets type="bookings"/>
        <Widgets type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Last Transaction</div>
        <Table/>
      </div>
      
    </div>
    </div>
  )
}
