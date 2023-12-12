import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import * as  actionSide from "./../action/side.action"
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Side() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hospital, setHospital] = useState('');
  const [province, setProvince] = useState('');
  const [workdate, setWorkdate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [firsttimeinstallation, setFirsttimeinstallation] = useState('');
  const [yes, setYes] = useState('');
  const [no, setNo] = useState('');
  const [daywork, setDaywork] = useState('');
  const [yearwork, setYearwork] = useState('');
  const [by, setBy] = useState('');
  const [hOSxP, setHOSxP] = useState('');
  const [oshospital, setOShospital] = useState('');
  const [other, setOther] = useState('');
  const [ot, setOT] = useState('');
  const [lis, setLis] = useState('');
  const [gateway, setGateway] = useState('');
  const [nonegateway, setNonegateway] = useState('');
  const [computer, setComputer] = useState('');
  const [sna, setSNA] = useState('');
  const [monitor, setMonitor] = useState('');
  const [snb, setSNB] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [snd, setSND] = useState('');
  const [mouse, setMouse] = useState('');
  const [sne, setSNE] = useState('');
  const [ups, setUPS] = useState('');
  // const [snf, setSNF] = useState('');
  // const [antivirus, setAntivirus] = useState('');
  // const [snc, setSNC] = useState('');
  // const [printerbarcode, setPrinterbarcode] = useState('');
  // const [snh, setSNH] = useState('');
  // const [software, setSoftware] = useState('');
  // const [start, setStart] = useState('');
  // const [finish, setFinish] = useState('');
  // const [clis, setCLIS] = useState('');
  // const [dateA, setDateA] = useState('');
  // const [dm, setDM] = useState('');
  // const [dateB, setDateB] = useState('');
  // const [signtheworker, setSigntheworker] = useState('');
  // const [dateC, setDateC] = useState('');
  // const [labsignature, setLabsignature] = useState('');
  // const [dateD, setDateD] = useState('');
  // const [install, setInstall] = useState('');
  // const [md, setMD] = useState('');
  // const [pm, setPM] = useState('');
  // const [re, setRE] = useState('');
  // const [fm, setFM] = useState('');
  // const [call, setCALL] = useState('');
  // const [sd, setSD] = useState('');
  // const [sol, setSOL] = useState('');
  // const [takec, setTakec] = useState('');
  // const [check, setCHECK] = useState('');
  // const [connect, setConnect] = useState('');
  // const [brokensymptoms, setBrokensymptoms] = useState('');
  // const [editing, setEditing] = useState('');
  // const [barcodescanner, setBarcodescanner] = useState('');
  // const [snz, setSNZ] = useState('');
  const handleSide = () => {
    const valuesside = {
      hospital: hospital,
      province: province,
      workdate: workdate,
      month: month,
      year: year,
      firsttimeinstallation: firsttimeinstallation,
      yes: yes,
      no: no,
      daywork: daywork,
      yearwork: yearwork,
      by: by,
      // hOSxP: '',
      // oshospital: '',
      // other: '',
      // ot: '',
      // lis: '',
      // gateway: '',
      // nonegateway: '',
      computer: computer,
      sna: sna,
      monitor: monitor,
      snb: snb,
      keyboard: keyboard,
      snd: snd,
      mouse: mouse,
      sne: sne,
      ups: ups
    };

    dispatch(actionSide.Side(valuesside, navigate));
  };
  return (

    <Box sx={{ padding: '15px', margin: '10px' }}>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'left',
        }}
      >
        <TextField
          id="filled-search"
          label="โรงพยาบาล"
          variant="standard"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          label="จังหวัด"
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          value={workdate}
          onChange={(e) => setWorkdate(e.target.value)}
          label="วันที่ปฏิบัติงาน"
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          label="เดือน"
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          label="ปี"
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          value={firsttimeinstallation}
          onChange={(e) => setFirsttimeinstallation(e.target.value)}
          label="ติดตั้งครั้งแรก"
          variant="standard"
          sx={{ width: '300px' }}
        />
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value={yes}
              onChange={(e) => setYes(e.target.value)}
              control={<Checkbox />}
              label="Y"
            />
            <FormControlLabel
              value={no}
              onChange={(e) => setNo(e.target.value)}
              control={<Checkbox />}
              label="N"
            />
          </FormGroup>
        </FormControl>
        <TextField
          required
          id="standard-required"
          label="วันที่เข้าทำงานครั้งต่อไป เดือน"
          value={daywork}
          onChange={(e) => setDaywork(e.target.value)}
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          label="ปี"
          value={yearwork}
          onChange={(e) => setYearwork(e.target.value)}
          variant="standard"
          sx={{ width: '300px' }}
        />
        <TextField
          required
          id="standard-required"
          label="โดย"
          value={by}
          onChange={(e) => setBy(e.target.value)}
          variant="standard"
          sx={{ width: '300px' }}
        />
         <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
      <FormControlLabel
          value={hOSxP}
          onChange={(e) => setHOSxP( e.target.value )}
          control={<Checkbox />}
          label="HOSxP"
        />
        <FormControlLabel
          value={oshospital}
          onChange={(e) => setOShospital( e.target.value )}
          control={<Checkbox />}
          label="HospitalOS"
        />
      </FormGroup>
      </FormControl>



      </Box>


      <Box>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
          <TextField
            id="filled-search"
            label="Computer"
            value={computer}
            onChange={(e) => setComputer(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            value={sna}
            onChange={(e) => setSNA(e.target.value)}

            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Monitor"
            value={monitor}
            onChange={(e) => setMonitor(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            value={snb}
            onChange={(e) => setSNB(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


          />

          <TextField
            required
            id="standard-required"
            label="Key board"
            value={keyboard}
            onChange={(e) => setKeyboard(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            value={snd}
            onChange={(e) => setSND(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Mouse"
            value={mouse}
            onChange={(e) => setMouse(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            value={sne}
            onChange={(e) => setSNE(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="UPS"
            value={ups}
            onChange={(e) => setUPS(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />

        </div>


      </Box>
      <Button variant="contained" onClick={handleSide}>
        Save
      </Button>

    </Box>

  );
}
