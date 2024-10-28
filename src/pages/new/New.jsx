import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import './new.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
export default function New() {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New House Details</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
             src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
             alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file" style={{display:"flex",flexDirection:"row",gap:"10px",color:"black"}}>Upload Aadhar<DriveFolderUploadOutlinedIcon/></label>
                <input type="file" id='file' required style={{display:"none"}} />
              </div>
              <div className="formInput">
                <label htmlFor="name">House Name</label>
                <input type="text" id='name' placeholder='Urmila Niwas ' />
              </div>
              <div className="formInput">
                <label htmlFor="owner">Owner Name </label>
                <input type="text" id='owner' placeholder='N Kumar' />
              </div>
              <div className="formInput">
                <label htmlFor="state">State</label>
                <input type="text" id='state' placeholder='Jharkhand' />
              </div>
              <div className="formInput">
                <label htmlFor="city">City</label>
                <input type="text" id='city' placeholder='Ranchi' />
              </div>
              <div className="formInput">
                <label htmlFor="landmark">Landmark</label>
                <input type="text" id='landmark' placeholder='Near Railway' />
              </div>
              <div className="formInput">
                <label htmlFor="contact">Contact Number</label>
                <input type="number" id='contact' required min={0} placeholder='+91 7456372829' />
              </div>
            <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
