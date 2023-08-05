import { useState } from "react";
import { addEmployeeTemplate, department } from "../modals/app.properties";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [tableData] = useState(addEmployeeTemplate);

    const [formData, setformData] = useState({ emp_name: '', emp_id: '', department: '', doj: '' });

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    let date = new Date();
    let dt = [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-') +
        ' ' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
        ].join(':');
    const [maxDate] = useState(dt);

    const [currentDate, setCurrentDate] = useState(dt);

    const handleChange = (e) => {
        console.log('.. handle change e : ', e);
        if (e.target) {
            const { name, value } = e.target;
            setformData({ ...formData, [name]: value });
            
        } else {
            setformData({ ...formData, department: e.value });
        }
        
        console.log('formData : ', formData);
    };

    let deptDD = [];
    department.forEach(item => deptDD.push({ label: item, value: item }))

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let userData = JSON.parse(localStorage.getItem('users'));
        userData.push(formData);
        localStorage.setItem('users', JSON.stringify(userData));
        navigate('/employee');
    }

    return (
        <div className='vh-80 pt-3'>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {tableData ?
                        tableData.map((item, index) =>
                            <div className="mb-3 row" key={item.field}>
                                <label htmlFor={item.field} className="col-4 col-form-label">{item.headerName}</label>
                                <div className="col-8">
                                    {item.type === 'text' ?
                                        <input type="text" className="form-control" name={item.field} id={item.field} placeholder={item.headerName} onChange={handleChange} value={formData[item.field]} />
                                        : item.type === 'dropdown' ? <>
                                            <Select name={item.field} id={item.field} options={deptDD} onChange={handleChange} />
                                        </>
                                            : item.type === 'date' ? <>
                                                <input
                                                    type="datetime-local"
                                                    id="meeting-time"
                                                    name="doj"
                                                    value={formData[item.field]}
                                                    min="1990-01-01T00:00"
                                                    max={maxDate}
                                                    onChange={handleChange}
                                                />
                                            </> : ''}
                                </div>
                            </div>
                        ) : null}

                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8 d-flex justify-content-end">
                            <button type="submit" className="btn btn-outline-orange">submit</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AddEmployee;