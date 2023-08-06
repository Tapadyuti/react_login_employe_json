import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

import logo from "./../assets/image/logo.png";

const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();

    const navigate = useNavigate();
    const [loginForm, setloginForm] = useState({user:"", password:""});

    const handelChange = (e) => {
        const {name, value} = e.target;
        setloginForm({...loginForm, [name]:value});
    }

    const handleLogin = () => {
        auth.login(loginForm.user);
        navigate('/employee', {replace: true});
    }
    return (
        <div>
            <section className="vh-80 gradient-custom">
                <div className="container py-5 h-50">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <div className="card bg-light" style={{ "borderRadius": "1rem" }}>
                                <div className="card-body p-3 text-center">

                                    <div className="mb-md-3 mt-md-3 pb-2">
                                        <img src={logo} style={{"width": "30px"}}/>
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <div className="form-outline  mb-4">
                                            <input type="email" id="typeEmailX" required className="form-control form-control-lg fs-6" name='user' placeholder="User name" value={loginForm.name} onChange={handelChange} />
                                        </div>

                                        <div className="form-outline  mb-4">
                                            <input type="password" id="password" required className="form-control form-control-lg fs-6" name='password' placeholder='Password' value={loginForm.password} onChange={handelChange}/>
                                        </div>
                                        <div className="form-outline  mb-4 d-flex justify-content-evenly">
                                            <button className="btn btn-outline-light-orange btn-lg px-3 fs-6" type="submit">Sign Up</button>
                                            <input className="btn btn-outline-orange btn-lg px-4 fs-6" type="submit" onClick={handleLogin} value="Login"/>{/* Login</button> */}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="small mb-5 pb-lg-2"><a className="" href="#!">Forgot password?</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login;