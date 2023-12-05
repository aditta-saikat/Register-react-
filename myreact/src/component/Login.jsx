import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Login() {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
     e.preventDefault();
     axios.post('http://localhost:8080/login' , {email, password})
     .then(result=> {
      console.log(result)
      if(result.data === "Success!"){
        navigate('/home')
      }
    })
     .catch(err=> console.log(err))
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Sign in to continue</p>
            <div>              
              <label>Email</label>
              <input 
              type="email" 
              name="email" 
              placeholder='Email' 
              onChange={(e)=> setEmail(e.target.value)}
              />
              
              <label>Password</label>
              <input 
              type="password" 
              name="password" 
              placeholder='Password' 
              onChange={(e)=> setPassword(e.target.value)}
              />

              <button type='submit'> Sign in</button>
              
              </div>


        </form>
    </div>
  )
}

export default Login;
