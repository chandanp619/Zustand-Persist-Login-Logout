import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import { useUserStore } from '../store/UserStore';

export default function LogoutComponent() {

  const setUserLoggedOut = useUserStore((state)=>state.setUserLoggedOut);
  const status = useUserStore((state)=> state.isLoggedIn)
  const navigate = useNavigate();

    useEffect(()=>{
        
        
        if(status === true){
          setUserLoggedOut();
            navigate('/');
        }
    },[navigate, status, setUserLoggedOut]);

  return (
    <>
    <HeaderComponent />
    </>
  )
}
