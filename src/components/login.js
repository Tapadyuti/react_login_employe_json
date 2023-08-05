import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../utils/auth';

const Login = () => {
    const [user, setUser] = useState('');
    //const auth = useAuth();

    //const navigate = useNavigate();

    const handleLogin = () => {
        //auth.login(user);
        //navigate('/', {replace: true});
    }
    return (
        <div>
            {/* <label for="" className="form-label">User Name</label>
            <input type="text" className="form-control" name="" id="" onChange={(e) => setUser(e.target.value)} />
            <a name="" id="" className="btn btn-primary" href="#" role="button" onClick={handleLogin}>login</a> */}
            {/* ------------------ */}

            <section className="vh-80 gradient-custom">
                <div className="container py-5 h-50">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                            <div className="card bg-light" style={{ "borderRadius": "1rem" }}>
                                <div className="card-body p-3 text-center">

                                    <div className="mb-md-3 mt-md-3 pb-2">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <div className="form-outline  mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg fs-6" placeholder="User name" />

                                        </div>

                                        <div className="form-outline  mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg fs-6" placeholder='Password' />
                                        </div>
                                        <div className="form-outline  mb-4 d-flex justify-content-evenly">
                                            <button className="btn btn-outline-light-orange btn-lg px-3 fs-6" type="submit">Sign Up</button>
                                            <button className="btn btn-outline-orange btn-lg px-4 fs-6" type="submit">Login</button>
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