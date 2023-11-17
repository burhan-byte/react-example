import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token === "1") {
            console.log("Login");
        } else {
            console.log("fail");
            navigate("/login2");
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login2");
    };

    return (
        <div>
            <h1>LIS INSTRUMENTS MAINTENANCE REPORT FORM</h1>

            <button onClick={logout}>Log out</button>
        </div>
    );
}
