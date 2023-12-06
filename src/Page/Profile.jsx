import React, { useReducer, useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel, Box, TextField, Stack, RadioGroup, Grid } from "@mui/material";
import { Button } from "bootstrap";
import { useDispatch } from "react-redux";
// import * as action_constant from "../constants/action.constant.js";

const initialState = {
    result: null,
    isFetching: false,
    isError: false,
  };
  
 

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, [action.name]: !state[action.name] };
    case 'SET_HOSPITAL':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_PROVINCE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_PWORKDATE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_MONTH':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_YEAR':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_FIRSTTIMENSTALLATION':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DAYWORK':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_YEARWORK':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DATEOFENTRYINTOWORK':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_YEARR':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_BY':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_COMPUTER':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SN':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_MONTIOR':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SNA':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_KEYBOARD':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SNB':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_MOUSE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SNC':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_UPS':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SND':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SET_ANTIVIRUS':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SNE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SET_PRINTERBARCODE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SNF':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SOFTWARE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_START':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_FINISH':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_CLIS':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DAY':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DM':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DAYONE':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_SIGNTHEWORKER':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DAYY':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DATA':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_DAYYY':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    case 'SET_YOUROPINIONA':
      return { ...state, result: action.payload, isFetching: false, isError: false };
    default:
      return state;
  }
};

function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggle = (name) => {
    dispatch({ type: "TOGGLE", name });
  };
  const handleHospitalChange = (event) => {
    dispatch({ type: "SET_HOSPITAL", payload: event.target.value });
  };
  const handleProvinceChange = (event) => {
    dispatch({ type: "SET_PROVINCE", payload: event.target.value });
  };
  const handlePworkdateChange = (event) => {
    dispatch({ type: "SET_PWORKDATE", payload: event.target.value });
  };
  const handleMonthChange = (event) => {
    dispatch({ type: "SET_MONTH", payload: event.target.value });
  };
  const handleYearChange = (event) => {
    dispatch({ type: "SET_YEAR", payload: event.target.value });
  };
  const handleFirsttimeinstallationChange = (event) => {
    dispatch({ type: "SET_FIRSTTIMENSTALLATION", payload: event.target.value });
  };
  const handleDayworkChange = (event) => {
    dispatch({ type: "SET_DAYWORK", payload: event.target.value });
  };
  const handleYearworkChange = (event) => {
    dispatch({ type: "SET_YEARWORK", payload: event.target.value });
  };
  const handlDateofentryintoworkChange = (event) => {
    dispatch({ type: "SET_DATEOFENTRYINTOWORK", payload: event.target.value });
  };
  const handleYearrChange = (event) => {
    dispatch({ type: "SET_YEARR", payload: event.target.value });
  };
  const handleByChange = (event) => {
    dispatch({ type: "SET_BY", payload: event.target.value });
  };
  const handleComputerChange = (event) => {
    dispatch({ type: "SET_COMPUTER", payload: event.target.value });
  };
  const handleSNChange = (event) => {
    dispatch({ type: "SET_SN", payload: event.target.value });
  };
  const handleMontiorChange = (event) => {
    dispatch({ type: "SET_MONTIOR", payload: event.target.value });
  };
  const handleSNAChange = (event) => {
    dispatch({ type: "SET_SNA", payload: event.target.value });
  };
  const handleKeyBoardChange = (event) => {
    dispatch({ type: "SET_KEYBOARD", payload: event.target.value });
  };
  const handleSNBChange = (event) => {
    dispatch({ type: "SET_SNB", payload: event.target.value });
  };
  const handleMouseChange = (event) => {
      dispatch({ type: "SET_MOUSE", payload: event.target.value });
  };
  const handleSNCChange = (event) => {
    dispatch({ type: "SET_SNC", payload: event.target.value });
  };
  const handleUPSChange = (event) => {
  dispatch({ type: "SET_UPS", payload: event.target.value });
  };
  const handleSNDChange = (event) => {
    dispatch({ type: "SET_SND", payload: event.target.value });
  };
  const handleAntivirusChange = (event) => {
    dispatch({ type: "SET_ANTIVIRUS", payload: event.target.value });
  };
  const handleSNEChange = (event) => {
    dispatch({ type: "SET_SNE", payload: event.target.value });
  };
  const handlePrinterBarcodeChange = (event) => {
    dispatch({ type: "SET_PRINTERBARCODE", payload: event.target.value });
  };
  const handleSNFChange = (event) => {
    dispatch({ type: "SET_SNF", payload: event.target.value });
  };
  const handleSoftwareChange = (event) => {
    dispatch({ type: "SET_SOFTWARE", payload: event.target.value });
  };
  const handleStartChange = (event) => {
    dispatch({ type: "SET_START", payload: event.target.value });
  };
  const handleFinishChange = (event) => {
    dispatch({ type: "SET_FINISH", payload: event.target.value });
  };
  const handleCLISChange = (event) => {
    dispatch({ type: "SET_CLIS", payload: event.target.value });
  };
  const handleDayChange = (event) => {
    dispatch({ type: "SET_DAY", payload: event.target.value });
  };
  const handleDMChange = (event) => {
    dispatch({ type: "SET_DM", payload: event.target.value });
  };
  const handleDayoneChange = (event) => {
    dispatch({ type: "SET_DAYONE", payload: event.target.value });
  };
  const handleSigntheworkerChange = (event) => {
    dispatch({ type: "SET_SIGNTHEWORKER", payload: event.target.value });
  };
  const handleDayyChange = (event) => {
    dispatch({ type: "SET_DAYY", payload: event.target.value });
  };
  const handleData = (event) => {
    dispatch({ type: "SET_DATA", payload: event.target.value });
  };
  const handleDayyyChange = (event) => {
    dispatch({ type: "SET_DAYYY", payload: event.target.value });
  };
  const handleYouropinionaChange = (event) => {
    dispatch({ type: "SET_YOUROPINIONA", payload: event.target.value });
  };



const [form, setForm]=useState({
  insatll:null,
})

  console.log(state)
  // const dispatch1 =useDispatch();
  return (
    <Grid container justifyContent="center">
    <Grid item xs={12} md={8} lg={6}></Grid>
    {/* <Button onClick={
      dispatch1(action_constant.connects())
     
    }>กด</Button> */}
    <div>
       <FormLabel id="demo-row-radio-buttons-group-label">หัวข้องาน</FormLabel>
      <FormControlLabel
        control={<Checkbox />}
        label="INSTALL"
        checked={state.install}
        onChange={() => handleToggle("install")}
      />
      <FormControlLabel
        control={<Checkbox />}
        label="MD"
        checked={state.md}
        onChange={() => handleToggle("md")}
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="PM" 
      checked={state.pm} 
      onChange={() => handleToggle('PM')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="RE" 
      checked={state.re} 
      onChange={() => handleToggle('RE')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="FM" 
      checked={state.fm} 
      onChange={() => handleToggle('FM')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="CALL" 
      checked={state.call} 
      onChange={() => handleToggle('CALL')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="SD" 
      checked={state.sd} 
      onChange={() => handleToggle('SD')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="SOL" 
      checked={state.sol} 
      onChange={() =>handleToggle('SOL')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="TAKEC" 
      checked={state.takec} 
      onChange={() =>handleToggle('TAKE-C')} 
      />
      <FormControlLabel 
      control={<Checkbox />} 
      label="CHECK" 
      checked={state.check} 
      onChange={() => handleToggle('CHECK')} 
      />

      <Box xs={12} md={6} lg={5}>
        <Stack spacing={10}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="โรงพยาบาล"
              onChange={handleHospitalChange}
              variant="outlined"
            />
            <TextField 
              id="filled-basic" 
              label="จังหวัด" 
              onChange={handleProvinceChange}
              variant="filled" 
            />
            <TextField 
              id="outlined-basic" 
              label="วันที่เข้าปฏิบัติงาน" 
              onChange={handlePworkdateChange}
              variant="outlined" 
            />
            <TextField 
              id="filled-basic" 
              label="เดือน" 
              onChange={handleMonthChange}
              variant="filled" 
            />
            <TextField 
              id="filled-basic" 
              label="ปี" 
              onChange={handleYearChange}
              variant="outlined" 
            />
            <TextField 
              id="filled-basic" 
              label="ติดตั้งครั้งเเรก"  
              onChange={handleFirsttimeinstallationChange} 
              variant="filled"
            />
            <RadioGroup
              style={{ display: 'flex', flexDirection: 'row' }} 
            >
            </RadioGroup>
            <FormControlLabel  
            control={<Checkbox />} 
            label="Y" 
            checked={state.yes} 
            onChange={() => handleToggle('SOL')} 
            />
            <FormControlLabel  
            control={<Checkbox />} 
            label="N" 
            checked={state.no} 
            onChange={() => handleToggle('NO')} />
          <TextField 
            id="outlined-basic" 
            label="วันที่เข้าทำงานครั้งต่อไป เดือน" 
            onChange={handleDayworkChange} 
            variant="outlined" 
          />
          <TextField 
            id="filled-basic" 
            label="จังหวัด" 
            onChange={handleYearworkChange} 
            variant="filled" 
          />
          <TextField 
            id="outlined-basic" 
            label="วันที่เข้าปฏิบัติงาน" 
            onChange={handlDateofentryintoworkChange} 
            variant="outlined" 
          />
          <TextField 
            id="filled-basic" 
            label="ปี" 
            onChange={handleYearrChange}
            variant="filled" 
          />
          <TextField 
            id="filled-basic" 
            label="โดย" 
            onChange={handleByChange } 
            variant="filled" 
          />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
        
          <TextField 
            id="standard-basic" 
            label="Computer"
            onChange={handleComputerChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="S/N" 
            onChange={handleSNChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Montior"  
            onChange={handleMontiorChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="S/N"  
            onChange={handleSNAChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Key Board" 
            onChange={handleKeyBoardChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic"
            label="S/N"  
            onChange={handleSNBChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Mouse"  
            onChange={handleMouseChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="S/N" 
            onChange={handleSNCChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="UPS"  
            onChange={handleUPSChange}
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="S/N" 
            onChange={handleSNDChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Antivirus"   
            onChange={handleAntivirusChange } 
            variant="standard"
          />
          <TextField 
            id="standard-basic"
            label="S/N" 
            onChange={handleSNEChange } 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Printer Barcode"
            onChange={handlePrinterBarcodeChange}  
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="S/N" 
            onChange={handleSNFChange } 
            variant="standard" 
          />
          </Box>
          
          <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
            noValidate
            autoComplete="off"
          >
          <TextField 
            id="standard-basic"
            label="Software"
            onChange={handleSoftwareChange } 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Start" 
            onChange={handleStartChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="Finish" 
            onChange={handleFinishChange}  
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="CLIS" 
            onChange={handleCLISChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="วันที่" 
            onChange={handleDayChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="DM"
            onChange={handleDMChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="วันที่" 
            onChange={handleDayoneChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="ลงชื่อผู้ปฏิบัติงาน"
            onChange={handleSigntheworkerChange}  
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="วันที่" 
            onChange={handleDayyChange}  
            variant="standard" 
          />
          <TextField id="standard-basic" 
            label="ลงชื่อหัวหน้า Lab/เจ้าหน้าที่ Lab" 
            onChange={handleData}  
            variant="standard"
          />
          <TextField 
            id="standard-basic" 
            label="วันที่" 
            onChange={handleDayyyChange} 
            variant="standard" 
          />
          <TextField 
            id="standard-basic" 
            label="ข้อคิดเห็นของท่าน"   
            onChange={handleYouropinionaChange } 
            variant="standard" 
          />
    </Box>
        </Stack>
      </Box>
    </div>
    </Grid>
  );
}

export default Profile;
