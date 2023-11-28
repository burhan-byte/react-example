import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Radio, FormControlLabel, RadioGroup } from '@mui/material';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FolderIcon from '@mui/icons-material/Folder';


export default function Home() {
    const navigate = useNavigate();
    const [hospitalName, setHospitalName] = useState([]);
    const [value, setValue] = useState(0); // assuming this state for BottomNavigation

    
    useEffect(() => {
        axios.get('http://192.168.101.40:5000/api/test')
        .then((response)=>{
            const {data} =response;
            setHospitalName(data.result);
        })

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


    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    // const horizontalLayout = {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    // };
    const rows = hospitalName
    console.log (rows)

    return (
        <div >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                 <TextField
                id="outlined-basic1"
                label="โรงพยาบาล"
                variant="outlined"
               
            />
                <TextField 
                id="filled-basic1" 
                label="จังหวัด" 
                variant="filled" 
                
            />
                <TextField 
                id="outlined-basic2" 
                label="วันที่เข้าปฏิบัติงาน" 
                variant="outlined" 
            />
                <TextField 
                id="filled-basic2" 
                label="เดือน" 
                variant="filled" 
            />
                <TextField 
                id="outlined-basic3" 
                label="ปี" 
                variant="outlined" 
            />
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
                <TextField 
                id="outlined-basic4" 
                label="ติดตั้งครั้งเเรก" 
                variant="outlined" 
            />
                Service
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

                <TextField 
                id="outlined-basic5" 
                label="วันที่เข้าทำงานครั้งต่อไป เดือน" 
                variant="outlined" 
            />
                <TextField 
                id="filled-basic4" 
                label="ปี" 
                variant="filled" 
            />
                <TextField 
                id="outlined-basic6" 
                label="โดย" 
                variant="outlined" 
            />
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
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
                    <TextField 
                    id="outlined-basic6" 
                    label="LIS" 
                    variant="outlined" 
                />
                    <FormControlLabel value="f" control={<Radio />} label="Gateway" />
                    <FormControlLabel value="g" control={<Radio />} label="None Gateway" />
                </RadioGroup> 
            </Box>
            <Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">user_id</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">given_name</TableCell>
            <TableCell align="center">family_name</TableCell>
            <TableCell align="center">nickname</TableCell>
            <TableCell align="center">last_ip</TableCell>
            <TableCell align="center">logins_count</TableCell>
            <TableCell align="center">created_at</TableCell>
            <TableCell align="center">updated_at</TableCell>
            <TableCell align="center">last_login</TableCell>
            <TableCell align="center">email_verified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={row.user_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="center">{row.user_id}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.given_name}</TableCell>
              <TableCell align="center">{row.family_name}</TableCell>
              <TableCell align="center">{row.nickname}</TableCell>
              <TableCell align="center">{row.logins_count}</TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="center">{row.updated_at}</TableCell>
              <TableCell align="center">{row.last_login}</TableCell>
              <TableCell align="center">{row.email_verified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <BottomNavigation sx={{ width: 1500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    {/* <button onClick={logout} style={{ marginTop: '10px' }}  >Log out</button> */}
            </Box>
        </div>
    );
}
