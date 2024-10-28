import React from 'react'
import './datatable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Datatable() {
  const rows =[
    { id: 1, lastName: "Sharma", firstName: "Aman", age: 28, status: "pending" },
    { id: 2, lastName: "Singh", firstName: "Neha", age: 32, status: "in-review" },
    { id: 3, lastName: "Patel", firstName: "Rohan", age: 25, status: "booked" },
    { id: 4, lastName: "Kumar", firstName: "Priya", age: 27, status: "pending" },
    { id: 5, lastName: "Mehta", firstName: "Suresh", age: 35, status: "in-review" },
    { id: 6, lastName: "Gupta", firstName: "Anjali", age: 24, status: "booked" },
    { id: 7, lastName: "Verma", firstName: "Manish", age: 29, status: "pending" },
    { id: 8, lastName: "Reddy", firstName: "Divya", age: 30, status: "in-review" },
    { id: 9, lastName: "Jain", firstName: "Karan", age: 31, status: "booked" },
    { id: 10, lastName: "Chauhan", firstName: "Sneha", age: 26, status: "pending" },
  ];
  const [data, setData] = useState(rows);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
          valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        }, 
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        }
    ];
        const actionColumn = [
          {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                  <Link to="/users/test" style={{ textDecoration: "none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                  <div
                    className="deleteButton"
                    onClick={() => handleDelete(params.row.id)}
                  >
                    Delete
                  </div>
                </div>
              );
            },
          },
        ];
      

      
   
        const handleDelete = (id) => {
          setData(data.filter((item) => item.id !== id));   
        };
      
  return (
    <div className='datatable' style={{height: '100vh', width: '100%' }}>
      <div className="datatableTitle">

        <Link to="/users/new" className="link" style={{textDecoration: 'none'}}>
          Add New
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
