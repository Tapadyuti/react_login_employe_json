import React from 'react'
import { useAuth } from '../utils/auth';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


const NavBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const logout = () =>{
        auth.logout();
        navigate('/');
    }

    const onClickNavigate = (navlink) =>{
        navigate(navlink);
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    {auth.user && <>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>onClickNavigate("/employee")}>Employee</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={()=>onClickNavigate("/add_employee")}>Add Employee</a>
                            </li>
                        </ul>
                    </>

                    }
                    {auth.user && <form className="d-flex" role="search">
                        <a className="btn btn-outline" onClick={logout}>Logout</a>
                    </form>
                    }
                    {!auth.user && <form className="d-flex" role="search">
                        <a className="btn btn-outline" href="/login">Login</a>
                    </form>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;