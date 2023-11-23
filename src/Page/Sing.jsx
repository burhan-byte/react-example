import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField,Box } from '@mui/material';

export default function Sing() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token === "1") {
            console.log("Login");
        } else { 
            console.log("fail");
            navigate("/Login");
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login");
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
            <Box
                component="form"
                sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <div>
         <TextField
          required
          id="standard-required"
          label="โรงพยาบาล"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="จังหวัด"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="วันที่ปฏิบัติงาน"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="เดือน"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="ปี"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="ติดตั้งครั้งแรก"
          defaultValue=""
          variant="standard"
        />

        </div>

    </Box>
            

            <button onClick={logout}>Log out</button>
        </div>
    );
}