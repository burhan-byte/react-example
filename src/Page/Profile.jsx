import React, { useReducer, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  FormLabel,
  Box,
  TextField,
  Stack,
  RadioGroup,
  Grid,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import * as Profile_action from "../action1/register.action";

// const initialState = {
//     result: null,
//     isFetching: false,
//     isError: false,
//   };

const Profile = (state, action) => {
  function Profile() {
    const dispatch = useDispatch();
  }

  const [form, setForm] = useState({
    insatll: null,
  });

  const dispatch = useDispatch();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}></Grid>
      <Button
        onClick={() => {
          dispatch(Profile_action.connects());
        }}
      >
        กด
      </Button>
      <div>
        <FormLabel id="demo-row-radio-buttons-group-label">หัวข้องาน</FormLabel>
        <FormControlLabel
          control={<Checkbox />}
          label="INSTALL"
          checked={state.install}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="MD"
          checked={state.md}
          // onChange={() => handleToggle("md")}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="PM"
          checked={state.pm}
          // onChange={() => handleToggle('PM')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="RE"
          checked={state.re}
          // onChange={() => handleToggle('RE')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="FM"
          checked={state.fm}
          // onChange={() => handleToggle('FM')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="CALL"
          checked={state.call}
          // onChange={() => handleToggle('CALL')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="SD"
          checked={state.sd}
          // onChange={() => handleToggle('SD')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="SOL"
          checked={state.sol}
          // onChange={() =>handleToggle('SOL')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="TAKEC"
          checked={state.takec}
          // onChange={() =>handleToggle('TAKE-C')}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="CHECK"
          checked={state.check}
          // onChange={() => handleToggle('CHECK')}
        />

        <Box xs={12} md={6} lg={5}>
          <Stack spacing={10}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="โรงพยาบาล"
                // onChange={handleHospitalChange}
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="จังหวัด"
                // onChange={handleProvinceChange}
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                label="วันที่เข้าปฏิบัติงาน"
                // onChange={handlePworkdateChange}
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="เดือน"
                // onChange={handleMonthChange}
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="ปี"
                // onChange={handleYearChange}
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="ติดตั้งครั้งเเรก"
                // onChange={handleFirsttimeinstallationChange}
                variant="filled"
              />
              <RadioGroup
                style={{ display: "flex", flexDirection: "row" }}
              ></RadioGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Y"
                checked={state.yes}
                // onChange={() => handleToggle('SOL')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="N"
                checked={state.no}
                // onChange={() => handleToggle('NO')}
              />
              <TextField
                id="outlined-basic"
                label="วันที่เข้าทำงานครั้งต่อไป เดือน"
                // onChange={handleDayworkChange}
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="จังหวัด"
                // onChange={handleYearworkChange}
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                label="วันที่เข้าปฏิบัติงาน"
                // onChange={handlDateofentryintoworkChange}
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="ปี"
                // onChange={handleYearrChange}
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="โดย"
                // onChange={handleByChange }
                variant="filled"
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Computer"
                // onChange={handleComputerChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Montior"
                // onChange={handleMontiorChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNAChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Key Board"
                // onChange={handleKeyBoardChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNBChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Mouse"
                // onChange={handleMouseChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNCChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="UPS"
                // onChange={handleUPSChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNDChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Antivirus"
                // onChange={handleAntivirusChange }
                variant="standard"
              />
              <TextField id="standard-basic" label="S/N" variant="standard" />
              <TextField // onChange={handleSNEChange }
                id="standard-basic"
                label="Printer Barcode"
                // onChange={handlePrinterBarcodeChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="S/N"
                // onChange={handleSNFChange }
                variant="standard"
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Software"
                // onChange={handleSoftwareChange }
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Start"
                // onChange={handleStartChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Finish"
                // onChange={handleFinishChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="CLIS"
                // onChange={handleCLISChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="วันที่"
                // onChange={handleDayChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="DM"
                // onChange={handleDMChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="วันที่"
                // onChange={handleDayoneChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="ลงชื่อผู้ปฏิบัติงาน"
                // onChange={handleSigntheworkerChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="วันที่"
                // onChange={handleDayyChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="ลงชื่อหัวหน้า Lab/เจ้าหน้าที่ Lab"
                // onChange={handleData}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="วันที่"
                // onChange={handleDayyyChange}
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="ข้อคิดเห็นของท่าน"
                // onChange={handleYouropinionaChange }
                variant="standard"
              />
            </Box>
          </Stack>
        </Box>
      </div>
    </Grid>
  );
};

export default Profile;
