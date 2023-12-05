import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
     e.preventDefault();
     axios.post('http://localhost:8080/register' , {name , email, password})
     .then(result=> {console.log(result)
      navigate('/login')
    })
     .catch(err=> console.log(err))
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Create new Account </h1>
            <p>Already registered? <Link to='/login'>Login</Link></p>
              <div>
               <label>Name</label>
               <input 
               type="text" 
               name="name" 
               placeholder='Name'  
               onChange={(e)=> setName(e.target.value)}
               />
              
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

              <button type='submit'> Register</button>
              
              </div>

        </form>
    </div>
  )
}

export default Register;
