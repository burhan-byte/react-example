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

    const centerText = {
        textAlign: 'center',
        margin: '5px 0', // Add margin between paragraphs
    };

    const horizontalLayout = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    };


    const paragraphStyle = {
        ...centerText,
        margin: '0 10px', // Adjust the horizontal spacing between paragraphs
    };

    return (
        <div>
            <h1 style={centerText}>LIS INSTRUMENTS MAINTENANCE REPORT FORM</h1>
            <div style={horizontalLayout}>
                <p style={paragraphStyle}>โรงพยาบาล</p>
                <p style={paragraphStyle}>จังหวัด</p>
                <p style={paragraphStyle}>วันที่ปฏิบัติงาน</p>
                <p style={paragraphStyle}>เดือน</p>
                <p style={paragraphStyle}>ปี</p>
            </div>
            <div style={horizontalLayout}>
                <p style={paragraphStyle}>วันที่ติดตั้ง</p>
                <p style={paragraphStyle}>เดือน</p>
                <p style={paragraphStyle}>ปี</p>
            </div>
            <button onClick={logout}>Log out</button>
        </div>
    );
}
