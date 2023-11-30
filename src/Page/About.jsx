import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
    const handleSave = () => {
      
      console.log('บันทึกข้อมูล');

    };
  


  return (
    
    
    <Box xs={12} md={6} lg={5}>
      
      <Stack spacing={10} >
      
        {/* <Item > */}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' } ,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="โรงพยาบาล" defaultValue="" variant="outlined" />
      <TextField id="filled-basic" label="จังหวัด" defaultValue="" variant="filled" />
      <TextField id="outlined-basic" label="วันที่เข้าปฏิบัติงาน" defaultValue="" variant="outlined" />
      <TextField id="filled-basic" label="เดือน" defaultValue="" variant="filled" />
      <TextField id="filled-basic" label="ปี" defaultValue="" variant="filled" />
      <TextField id="filled-basic" label="ติดตั้งครั้งเเรก" defaultValue="" variant="filled"/>

<FormControl component="fieldset">
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    style={{ display: 'flex', flexDirection: 'row' }} 
  >
    <FormControlLabel value="female" control={<Radio />} label="Y" />
    <FormControlLabel value="male" control={<Radio />} label="N" />
  </RadioGroup>
</FormControl>
      <TextField id="outlined-basic" label="วันที่เข้าทำงานครั้งต่อไป เดือน" defaultValue="" variant="outlined" />
      <TextField id="filled-basic" label="จังหวัด" defaultValue="" variant="filled" />
      <TextField id="outlined-basic" label="วันที่เข้าปฏิบัติงาน" defaultValue="" variant="outlined" />
      <TextField id="filled-basic" label="ปี" defaultValue="" variant="filled" />
      <TextField id="filled-basic" label="โดย" defaultValue="" variant="filled" />

       <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="HOSxP" control={<Radio />} label="HOSxP" />
        <FormControlLabel value="HospitalOS" control={<Radio />} label="HospitalOS" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <TextField id="standard-basic" label="LIS:" variant="standard" />
    <RadioGroup
    >
    <FormControlLabel value="Gateway" control={<Radio />} label="Gateway" />
    <FormControlLabel value="None Gateway" control={<Radio />} label="None Gateway" />
    </RadioGroup>
    </Box>
        
        {/* </Item>
        
        <Item> */}
  <Box
     component="form"
     sx={{
       '& > :not(style)': { m: 1, width: '25ch' },
     }}
     noValidate
     autoComplete="off"
  >
    <TextField id="standard-basic" label="Computer" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <TextField id="standard-basic" label="Montior" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <TextField id="standard-basic" label="Key Board" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <TextField id="standard-basic" label="UPS" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <TextField id="standard-basic" label="Antivirus" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <TextField id="standard-basic" label="Printer Barcode" variant="standard" />
    <TextField id="standard-basic" label="S/N" variant="standard" />
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">หัวข้องาน</FormLabel>
    <RadioGroup
      // row
      // aria-labelledby="demo-row-radio-buttons-group-label"
      // name="row-radio-buttons-group"
    >
     <FormGroup>
      <FormControlLabel control={<Checkbox />} label="INSTALL" />
      <FormControlLabel control={<Checkbox />} label="MD" />
      <FormControlLabel control={<Checkbox />} label="PM" />
      <FormControlLabel control={<Checkbox />} label="RE" />
      <FormControlLabel control={<Checkbox />} label="FM" />
      <FormControlLabel control={<Checkbox />} label="CALL" />
      <FormControlLabel control={<Checkbox />} label="SD" />
      <FormControlLabel control={<Checkbox />} label="SOL" />
      <FormControlLabel control={<Checkbox />} label="TAKE-C" />
      <FormControlLabel control={<Checkbox />} label="CHECK" />
    </FormGroup>
    </RadioGroup>
  </FormControl>
  <TextField id="standard-basic" label="ต่อกับเครื่อง" variant="standard" />
  <TextField id="standard-basic" label="อาการเสีย" variant="standard" />
  <TextField id="standard-basic" label="การเเก้ไข" variant="standard" />
  <TextField id="standard-basic" label="ฺBarcode Scanner" variant="standard" />
  <TextField id="standard-basic" label="S/N" variant="standard" />
  </Box>
  {/* <Box
  component="form"
   sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
   }}
//   noValidate
//   autoComplete="off"
 >
  <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">หัวข้องาน</FormLabel>
    <RadioGroup
      // row
      // aria-labelledby="demo-row-radio-buttons-group-label"
      // name="row-radio-buttons-group"
    >
     <FormGroup>
      <FormControlLabel control={<Checkbox />} label="INSTALL" />
      <FormControlLabel control={<Checkbox />} label="MD" />
      <FormControlLabel control={<Checkbox />} label="PM" />
      <FormControlLabel control={<Checkbox />} label="RE" />
      <FormControlLabel control={<Checkbox />} label="FM" />
      <FormControlLabel control={<Checkbox />} label="CALL" />
      <FormControlLabel control={<Checkbox />} label="SD" />
      <FormControlLabel control={<Checkbox />} label="SOL" />
      <FormControlLabel control={<Checkbox />} label="TAKE-C" />
      <FormControlLabel control={<Checkbox />} label="CHECK" />
    </FormGroup>
    </RadioGroup>
  </FormControl>
  <TextField id="standard-basic" label="ต่อกับเครื่อง" variant="standard" />
  <TextField id="standard-basic" label="อาการเสีย" variant="standard" />
  <TextField id="standard-basic" label="การเเก้ไข" variant="standard" />
  <TextField id="standard-basic" label="ฺBarcode Scanner" variant="standard" />
  <TextField id="standard-basic" label="S/N" variant="standard" />
</Box>
 */}


       
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Software" variant="standard" />
      <TextField id="standard-basic" label="Start" variant="standard" />
      <TextField id="standard-basic" label="Finish" variant="standard" />
      <TextField id="standard-basic" label="CLIS" variant="standard" />
      <TextField id="standard-basic" label="วันที่" variant="standard" />
      <TextField id="standard-basic" label="DM" variant="standard" />
      <TextField id="standard-basic" label="วันที่" variant="standard" />
      <TextField id="standard-basic" label="ลงชื่อผู้ปฏิบัติงาน" variant="standard" />
      <TextField id="standard-basic" label="วันที่" variant="standard" />
      <TextField id="standard-basic" label="ลงชื่อหัวหน้า Lab/เจ้าหน้าที่ Lab" variant="standard"/>
      <TextField id="standard-basic" label="วันที่" variant="standard" />
      <TextField id="standard-basic" label="ข้อคิดเห็นของท่าน" variant="standard" />
    </Box>
    {/* <Button variant="contained" color="primary" fullWidth onClick={handleSave} style={{ backgroundColor: 'HotPink' }}>
              บันทึก
            </Button> */}
        {/* </Item>
        <Item> */}
        <Button variant="contained" color="primary" fullWidth onClick={handleSave} style={{ backgroundColor: 'HotPink' }}>
              บันทึก
            </Button>
        {/* </Item> */}

        
       
        
        
      </Stack>
    </Box>
  );
}








