import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate =useNavigate();
    useEffect(() => {
       const token= localStorage.getItem('laila');
       
        if(token=== "1"){
            console.log("Login")
        }else
        {
            console.log("home")
            navigate("/login2")
        }
    }, []);

    const logout=()=>{
        localStorage.removeItem('laila'); 
        navigate("/login2")
    } 
    
    return (
    <div>LIS INSTRUMENTS MAINTENANCE REPORT FORM

        <button onClick={()=>{
            logout();
        }}>log out</button>

    </div>
  )
}
