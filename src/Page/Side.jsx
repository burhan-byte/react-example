// import React, { useState } from 'react';
// import { Box, Button, MenuItem } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import { TextField, Checkbox, FormGroup, FormControlLabel, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Add } from '@mui/icons-material';



// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(8),
//   textAlign: 'left',
//   color: theme.palette.text.secondary,
// }));



// export default function Side() {


//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   const handleSave = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const hospital = [
//     {
//       value: 'USD',
//       label: 'นราธิวาส',
//     },
//     {
//       value: 'USD',
//       label: 'ระยอง',
//     },

//   ]
//   const province = [
//     {
//       value: 'USD',
//       label: 'กรุงเทพ',
//     },
//     {
//       value: 'USD',
//       label: 'ระนอง',
//     },

//   ]

//   const form = [
//     {
//       value: 'USD',
//       label: 'กระบี่',
//     },
//     {
//       value: 'USD',
//       label: 'ระนอง',
//     },

//   ]




//   // const {data, setData}=useState({
//   //   hospital:"",
//   //   province:""
//   // });(data);
//   // console.log



//   return (


//     <Box style={{
//       display: 'flex',
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'left',
//     }}>


//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField
//             id="outlined-select-currency"
//             select
//             label="โรงพยาบาล"
//             defaultValue=""
//             helperText="กรุณากรอกชื่อโรงพยาบาล"
//           >
//             {hospital.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
        
//       </Box>

//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField
//             id="outlined-select-currency"
//             select
//             label="จังหวัด"
//             defaultValue=""
//             helperText="กรุณากรอกจังหวัด"
//           >
//             {province.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//       </Box>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div>
//           <TextField
//             id="outlined-select-currency"
//             select
//             label="จังหวัด"
//             defaultValue=""
//             helperText="กรุณากรอกจังหวัด"
//           >
//             {form.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
//         </div>
//       </Box>




//     </Box>

//   );
// }




import React from 'react';
import { Box, Button } from '@mui/material';
import * as Side_action from "../action/side.action";
import { useDispatch } from 'react-redux';

const Side = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(Side_action.connects())}>กด</Button>

  );
}

export default Side;
