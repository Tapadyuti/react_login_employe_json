export const users = [
    {
        "emp_name": "Employee 01",
        "emp_id": '0001',
        "department": "Admin",
        "doj": '01/01/2023'
    }, {
        "emp_name": "Employee 02",
        "emp_id": '0002',
        "department": "Developer",
        "doj": '01/02/2023'
    }, {
        "emp_name": "Employee 03",
        "emp_id": '0003',
        "department": "Manager",
        "doj": '01/03/2023'
    }, {
        "emp_name": "Employee 04",
        "emp_id": '0004',
        "department": "Helper",
        "doj": '01/04/2023'
    },
];

export const employeColumnDef = [
    { field: 'emp_name', headerName:'Name' },
    { field: 'emp_id',  headerName:'Id' },
    { field: 'department',  headerName:'Department' },
    { field: 'doj',  headerName:'Date of joining' }
]

export const department = ['Admin', 'Developer', 'Manager', 'Helper'];

export const addEmployeeTemplate = [
    { field: 'emp_name', headerName:'Name', type:'text' },
    { field: 'emp_id',  headerName:'Id', type:'text' },
    { field: 'department',  headerName:'Department', type:'dropdown' },
    { field: 'doj',  headerName:'Date of joining', type:'date' }
]