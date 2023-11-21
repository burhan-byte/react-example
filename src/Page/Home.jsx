import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Radio, FormControlLabel, RadioGroup } from '@mui/material';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (token !== "1") {
            console.log("fail");
            navigate("/login2");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login2");
    };

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h5 style={{ textAlign: 'center', margin: '5px 0' }}>LIS INSTRUMENTS MAINTENANCE REPORT FORM</h5>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <TextField id="outlined-basic1" label="โรงพยาบาล" variant="outlined" />
                <TextField id="filled-basic1" label="จังหวัด" variant="filled" />
                <TextField id="outlined-basic2" label="วันที่เข้าปฏิบัติงาน" variant="outlined" />
                <TextField id="filled-basic2" label="เดือน" variant="filled" />
                <TextField id="outlined-basic3" label="ปี" variant="outlined" />
                {/* Add more text fields as needed */}
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <TextField id="outlined-basic4" label="ติดตั้งครั้งเเรก" variant="outlined" />
                <TextField id="filled-basic3" label="Service" variant="filled" />

                {/* Radio buttons */}
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={selectedValue}
                    onChange={handleChange}
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <FormControlLabel value="a" control={<Radio />} label="Y" />
                    <FormControlLabel value="b" control={<Radio />} label="N" />
                </RadioGroup>

                <TextField id="outlined-basic5" label="วันที่เข้าทำงานครั้งต่อไป เดือน" variant="outlined" />
                <TextField id="filled-basic4" label="ปี" variant="filled" />
                <TextField id="outlined-basic6" label="โดย" variant="outlined" />
            </Box>
            <Box>
            <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={selectedValue}
                    onChange={handleChange}
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <FormControlLabel value="c" control={<Radio />} label="HOSxP" />
                    <FormControlLabel value="d" control={<Radio />} label="HospitalIOS" />
                    <FormControlLabel value="e" control={<Radio />} label="Other" />
                    <TextField id="outlined-basic6" label="LIS" variant="outlined" />
                    <FormControlLabel value="f" control={<Radio />} label="Gateway" />
                    <FormControlLabel value="g" control={<Radio />} label="None Gateway" />
                </RadioGroup> 
            </Box>
            <button onClick={logout} style={{ marginTop: '10px' }}  >Log out</button>
        </div>
    );
}
