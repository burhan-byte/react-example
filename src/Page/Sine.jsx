import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Sine () {
    const navigate = useNavigate();
    const [hospitalname,setHospitalname] =useState([]);
    
    useEffect(() => {
        axios.get('http://192.168.101.40:5000/api/test')
        .then((response)=>{
            const {data} =response;
            setHospitalname(data.result);
          })})

    //     const token = localStorage.getItem('token');
        
    //     if (token !== "1") {
    //         console.log("fail");
    //         navigate("/");
    //     }
    // }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
    };

   
    
    const rows= hospitalname;
    console.log (rows)
  return (
    
    <TableContainer component={Paper} sx={{ background: '#FFFFFF' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ background: '#FFCC99	' }}>
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
  );
          }


