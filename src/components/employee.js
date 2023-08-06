import React, { useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { employeColumnDef, users } from '../modals/app.properties';
import { useNavigate } from 'react-router-dom';


const Employee = () => {
    const containerStyle = useMemo(() => ({ width: '65%' }), []);
    const gridStyle = useMemo(() => ({ height: '87%', width: '93%' }), []);

    let navigate = useNavigate();

    const [rowData, setRowData] = useState(JSON.parse(window.localStorage.getItem('users')));

    const [columnDefs] = useState(employeColumnDef);

    const defaultColDef = useMemo(() => {
        return {
          //width: '25%',
          sortable: true,
        };
      }, []);


    useEffect(()=>{
        setRowData(window.localStorage.getItem('users'));
    },[window.localStorage.getItem('users'), rowData])
    
    return (
        <div className='vh-80 d-flex justify-content-center'>
            <div style={containerStyle}>
                <div style={{ height: '100%', boxSizing: 'border-box' }}>
                    <div style={gridStyle} className="ag-theme-alpine">
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            pagination={true}
                            paginationPageSize={10}
                        />
                    </div>
                    <div className='w-100 d-flex justify-content-end align-items-center' style={{'height':'12%'}}>
                        <button className='btn btn-outline-orange btn-lg px-4 fs-6' style={{"height": "6vh", "fontWeight": "600"}} onClick={(e)=> navigate('/add_employee') }>Add Employee</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee;