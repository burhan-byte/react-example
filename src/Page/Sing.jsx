import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField,Box } from '@mui/material';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Sing() {
    const navigate = useNavigate();
    const [hospitalname,setHospitalname] =useState([]);

    useEffect(() => {
        axios.get('http://192.168.101.40:5000/api/test')
        .then((response)=>{
            const {data} =response;
            setHospitalname(data.result);
          })

        const token = localStorage.getItem('token');
        
        if (token !== "1") {
            console.log("fail");
            navigate("/");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
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
    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
    // const rows = [
    //     // createData('583c3ac3f38e84297c002546'),
    //     // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     // createData('Eclair', 262, 16.0, 24, 6.0),
    //     // createData('Cupcake', 305, 3.7, 67, 4.3),
    //     // createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
    const rows= hospitalname;
    console.log (rows)

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
    <Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="center">created_at</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">email_verified</TableCell>
            <TableCell align="center">family_name</TableCell>
            <TableCell align="center">given_name</TableCell>
            <TableCell align="center">last_ip</TableCell>
            <TableCell align="center">last_login</TableCell>
            <TableCell align="center">logins_count</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">nickname</TableCell>
            <TableCell align="center">updated_at</TableCell>
            <TableCell align="center">user_id</TableCell>

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
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="centert">{row.email}</TableCell>
              <TableCell align="center">{row.email_verified}</TableCell>
              <TableCell align="center">{row.family_name}</TableCell>
              <TableCell align="center">{row.given_name}</TableCell>
              <TableCell align="center">{row.last_ip}</TableCell>
              <TableCell align="center">{row.last_login}</TableCell>
              <TableCell align="center">{row.logins_count}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.nickname}</TableCell>
              <TableCell align="center">{row.updated_at}</TableCell>
              <TableCell align="center">{row.user_id}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Box>
    




            

            <button onClick={logout}>Log out</button>
        </div>
    );
}