import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    
    
    <Box xs={12} md={6} lg={5}>
      
      <Stack spacing={10} >
      
        <Item >
          
        <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 0.5 , width: '28ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left'  }}
            >
              
         <TextField

          id="filled-search"
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

<FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="a"
          control={<Checkbox />}
          label="Y"
          
        />
        <FormControlLabel
          value="b"
          control={<Checkbox />}
          label="N"
          
        />
      </FormGroup>
    </FormControl>
    <TextField
          required
          id="standard-required"
          label="วันที่เข้าทำงานครั้งต่อไป เดือน"
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
          label="โดย"
          defaultValue=""
          variant="standard"
        />
        
  <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="c"
          control={<Checkbox />}
          label="HOSxP"
          
        />
      </FormGroup>
    </FormControl>

    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
    <FormControlLabel
          value="d"
          control={<Checkbox />}
          label="HospitalOS"
          
          
        />
        
    </FormGroup>
    </FormControl>
    <FormControl component="fieldset">
  <FormGroup >
    <FormControlLabel
      value="e"
      control={<Checkbox />}
      label="Other"
      
      
    />
    
  </FormGroup>
</FormControl>





   
<FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="f"
          control={<Checkbox />}
          label="Gateway"
          style={{ display: 'flex', justifyContent: '' }}
        />
       
      </FormGroup>
    </FormControl>
    <FormGroup aria-label="position" row>
    <FormControlLabel
          value="g"
          control={<Checkbox />}
          label="None Gateway"
          style={{ display: 'flex', justifyContent: 'left' }}
          
        />
        </FormGroup>
    </Box>
    
          
        </Item>
        
        <Item>
        <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}
            >
      
    
       
         <TextField

          id="filled-search"
          label="Computer"
          defaultValue=""
          variant="standard"
        />
         <TextField
          required
          id="standard-required"
          label="Monitor"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Key board"
          defaultValue=""
          variant="standard"
        />
        <TextField

id="filled-search"
label="Mouse"
defaultValue=""
variant="standard"
/>
<TextField
          required
          id="standard-required"
          label="UPS"
          defaultValue=""
          variant="standard"
        />
         <TextField
          required
          id="standard-required"
          label="S/N"
          defaultValue=""
          variant="standard"
        />
        
          <TextField
          required
          id="standard-required"
          label="S/N"
          defaultValue=""
          variant="standard"
        />
        
         <TextField
          required
          id="standard-required"
          label="S/N"
          defaultValue=""
          variant="standard"
        />


         <TextField
          required
          id="standard-required"
          label="S/N"
          defaultValue=""
          variant="standard"
        />
        
         <TextField
          required
          id="standard-required"
          label="S/N"
          defaultValue=""
          variant="standard"
        /> 
        <TextField
        required
        id="standard-required"
        label=""
        defaultValue=""
        variant="standard"
      />
    </Box>
          

          
        </Item>
        <Item>

        </Item>

        
       
        
        
      </Stack>
    </Box>
  );
}








// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import { TextField, Checkbox, FormControlLabel, FormControl, FormGroup, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicStack() {
//   return (
//     <Box>
//       <Stack spacing={4}>
//         <Item>
//           <form
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//             }}
//           >
//             {/* ... โค้ดฟอร์ม ... */}
//           </form>
//         </Item>

//         <Item>
//           <form
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               flexWrap: 'wrap',
//               justifyContent: 'space-between',
//             }}
//           >
//             {/* ... โค้ดฟอร์ม ... */}
//           </form>
//         </Item>
//       </Stack>
//     </Box>
//   );
// }
