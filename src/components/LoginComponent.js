import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  { useUserStore }  from '../store/UserStore';
import HeaderComponent from './HeaderComponent';

export default function LoginComponent() {

    const [email,setEamil] = useState();
    const [password, setPassword] =useState();
    const navigate = useNavigate();
    const setUserLoggedIn = useUserStore((state) => state.setUserLoggedIn);

    const updateEmail = (e)=>{
        setEamil(e.target.value);

    }

    const updatePassword = (e) =>{
        setPassword(e.target.value);
    }

    const processLogin = ()=>{

        if(email==="chandan@mail.com" && password === '123456'){
            
            setUserLoggedIn({email:'chandan@mail.com',fname:"Chandan", lname:"Pradhan"});
            navigate('/');
        }
    }

  return (
    <>
    <HeaderComponent />
    <div className='loginForm'>
        <p>
            <input type='email' placeholder='Email' onChange={updateEmail} />
        </p>
        <p>
            <input type='password' placeholder='Password' onChange={updatePassword} />
        </p>
        <p><button onClick={processLogin}>Login</button></p>
    </div>
    </>
    
  )
}
