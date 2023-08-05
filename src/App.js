import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './utils/auth';
import Login from './components/login';
import SignUp from './components/signUp';
import NavBar from './components/NavBar';
//import RequireAuth from './utils/requireAuth';
import Home from './components/Home';
import Employee from './components/employee';
import { Footer } from './components/Footer';
import { employeColumnDef, users } from './modals/app.properties';
import { useEffect } from 'react';
import AddEmployee from './components/addEmployee';


const App = () => {

  useEffect(() => {
    let userString = JSON.stringify(users);
    window.localStorage.setItem('users', userString);
  }, [users])
  

  return (
    <div >
      {/* <AuthProvider> */}
      <Router >
        <NavBar />
        <Routes>
          <Route path='/signup' element={<SignUp />} ></Route>
          <Route path='/employee' element={<Employee />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/add_employee' element={<AddEmployee />} ></Route>
          <Route path='*' element={<Home />} ></Route>
        </Routes>
      </Router>
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
}

export default App;
