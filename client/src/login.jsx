import React from "react";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios'



function Login (){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()

    axios.defaults.withCredentials=true;

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
           if(result.data.status==="Success"){
             if(result.data.role==="admin"){
                navigate('/Dashboard')
            }else{
                navigate('/')
            }
           }
        }).catch(err => console.log(err))
    }
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder="Enter password" name="password" className="form-control rounded-0" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            </form>
            <p>Already have an account</p>
            <Link to="/register" className="btn btn-default w-100 bg-light rounded-0">Register</Link>

        </div>
      </div>
    );
}

export default Login;