import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import './list.scss'
import Datatable from '../../component/datatable/Datatable'
export default function List() {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable/>
    </div>
    </div>
  )
}
