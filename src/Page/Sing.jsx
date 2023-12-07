import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as Singaction from "../action/sing.action"
import { useDispatch } from 'react-redux';




const Sing = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    hospital: '',
    province: '',
    workdate: '',
    month: '',
    year: '',
    firsttimeinstallation: '',
    yes: '',
    no: '',
    daywork: '',
    yearwork: '',
    by: '',
    hOSxP: '',
    oshospital: '',
    other: '',
    ot: '',
    lis: '',
    gateway: '',
    nonegateway: '',
    computer: '',
    sna: '',
    monitor: '',
    snb: '',
    keyboard: '',
    snd: '',
    mouse: '',
    sne: '',
    ups: '',
    snf: '',
    antivirus: '',
    snc: '',
    printerbarcode: '',
    snh: '',
    software: '',
    start: '',
    finish: '',
    clis: '',
    dateA: '',
    dm: '',
    dateB: '',
    signtheworker: '',
    dateC: '',
    labsignature: '',
    dateD: '',
    install: '',
    md: '',
    pm: '',
    re: '',
    fm: '',
    call: '',
    sd: '',
    sol: '',
    takec: '',
    check: '',
    connect: '',
    brokensymptoms: '',
    editing: '',
    barcodescanner: '',
    snz: ''
  });

  console.log(Data.hospital);
const handleSing = () => {
  const history = {
    hospital: Data,
    province: Data,
  };
  // dispatch(Singaction.sing(history));

  return (
    <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {/* <Button onClick={
            dispatch(Sing_action.connects())
          }>กด</Button> */}
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <TextField
          id="filled-search"
          label="โรงพยาบาล"
          fullWidth onClick={handleSing}
          value={Data.hospital}
          onChange={(e) => setData({ ...Data, hospital: e.target.value })}
          variant="standard"
          sx={{ width: '300px', margin: '8px' }}
        />

        <TextField
          required
          id="standard-required"
          label="จังหวัด"
          fullWidth onClick={handleSing}
          value={Data.province}
          onChange={(e) => setData({ ...Data,province : e.target.value })}
          variant="standard"
          sx={{ width: '300px', margin: '8px' }}
        />

        <TextField
          required
          id="standard-required"
          label="วันที่ปฏิบัติงาน"
          fullWidth onClick={handleSing}
          value={Data.workdate}
          onChange={(e) => setData({ ...Data,workdate : e.target.value })}
          variant="standard"
          sx={{ width: '300px', margin: '8px' }}
        />
        <TextField
          required
          id="standard-required"
          label="เดือน"
          fullWidth onClick={handleSing}
          value={Data.month}
          onChange={(e) => setData({ ...Data,month : e.target.value })}
          variant="standard"
          sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
        />
        <TextField
          required
          id="standard-required"
          label="ปี"
          fullWidth onClick={handleSing}
          value={Data.year}
          onChange={(e) => setData({ ...Data,year : e.target.value })}
          variant="standard"
          sx={{ width: '300px', margin: '8px' }}
        />
        <TextField
          required
          id="standard-required"
          label="ติดตั้งครั้งแรก"
          fullWidth onClick={handleSing}
          value={Data.firsttimeinstallation}
          onChange={(e) => setData({ ...Data,firsttimeinstallation: e.target.value })}
          variant="standard"
          sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
        />

        <FormGroup
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Y"
            fullWidth onClick={handleSing}
          value={Data.yes} 
          onChange={(e) => setData({ ...Data,yes: e.target.value })}
          />

          <FormControlLabel control={<Checkbox />} label="N"
          value={Data.no} 
          onChange={(e) => setData({ ...Data,no: e.target.value })} 
          fullWidth onClick={handleSing}
          />
        </FormGroup>

        <TextField
          required
          id="standard-required"
          label="วันที่เข้าทำงานครั้งต่อไป เดือน"
          value={Data.daywork}
          onChange={(e) => setData({ ...Data,daywork: e.target.value })} 
          fullWidth onClick={handleSing}
          variant="standard"
          sx={{ width: '300px', marginRight: '8px' }}
        />
        <TextField
          required
          id="standard-required"
          label="ปี"
          value={Data.yearwork}
          onChange={(e) => setData({ ...Data,yearwork: e.target.value })} 
          fullWidth onClick={handleSing}
          variant="standard"
          sx={{ width: '300px', marginRight: '8px' }}
        />
        <TextField
          required
          id="standard-required"
          label="โดย"
          value={Data.by}
          onChange={(e) => setData({ ...Data,by: e.target.value })} 
          fullWidth onClick={handleSing}
          variant="standard"
          sx={{ width: '300px', marginRight: '8px' }}
        />

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="HOSxP"
           value={Data.hOSxP}
           onChange={(e) => setData({ ...Data,hOSxP: e.target.value })} 
           fullWidth onClick={handleSing}
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="HospitalOS"
          value={Data.oshospital}
          onChange={(e) => setData({ ...Data,oshospital: e.target.value })} 
          fullWidth onClick={handleSing}
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Other"
          value={Data.other}
          onChange={(e) => setData({ ...Data,other: e.target.value })} 
          fullWidth onClick={handleSing}
          />
          <TextField required id="standard-required" variant="standard"
            value={Data.ot}
            onChange={(e) => setData({ ...Data,ot: e.target.value })} 
            fullWidth onClick={handleSing}
            sx={{ width: '300px', marginRight: '8px' }}
          />
          <TextField required label="LIS" id="standard-required" variant="standard"
             value={Data.lis}
             onChange={(e) => setData({ ...Data,lis: e.target.value })} 
             fullWidth onClick={handleSing}
            sx={{ width: '300px', marginRight: '8px' }} />
        </FormGroup>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Gateway"
          value={Data.gateway}
          onChange={(e) => setData({ ...Data,gateway: e.target.value })} 
          fullWidth onClick={handleSing}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="None Gateway"
          //  value={nonegateway}

          // onChange={(e) => setNonegateway(e.target.value)}
          />
        </FormGroup>

      </div>




      <Box>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextField
            id="filled-search"
            label="Computer"
            // value={computer}
            // onChange={(e) => setComputer(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={sna}
            // onChange={(e) => setSNA(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Monitor"
            // value={monitor}
            // onChange={(e) => setMornitor(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snb}
            // onChange={(e) => setSNB(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


          />

          <TextField
            required
            id="standard-required"
            label="Key board"
            // value={keyboard}
            // onChange={(e) => setKeyboard(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snd}
            // onChange={(e) => setSND(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Mouse"
            // value={mouse}
            // onChange={(e) => setMouse(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={sne}
            // onChange={(e) => setSNE(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="UPS"
            // value={ups}
            // onChange={(e) => setUPS(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snf}
            // onChange={(e) => setSNF(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Antivirus"
            // value={antivirus}
            // onChange={(e) => setAntivirus(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snc}
            // onChange={(e) => setSNC(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Printer Barcode"
            // value={printerbarcode}
            // onChange={(e) => setPrinterbarcode(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snh}
            // onChange={(e) => setSNH(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
          <FormGroup style={{ marginRight: '20px' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="INSTALL"
            // value={install}
            // onChange={(e) => setInstall(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="MD"
            // value={md}
            // onChange={(e) => setMD(e.target.value)}
            />
          </FormGroup>


          <FormGroup style={{ marginRight: '20px' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="PM"
            // value={pm}
            // onChange={(e) => setPM(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="RE"
            // value={re}
            // onChange={(e) => setRE(e.target.value)}
            />
          </FormGroup>


          <FormGroup style={{ marginRight: '20px' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="FM"
            // value={fm}
            // onChange={(e) => setFM(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="CALL"
            // value={call}
            // onChange={(e) => setCALL(e.target.value)}
            />
          </FormGroup>


          <FormGroup style={{ marginRight: '20px' }}>
            <FormControlLabel
              control={<Checkbox />}
              label="SD"
            // value={sd}
            // onChange={(e) => setSD(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="SOL"
            // value={sol}
            // onChange={(e) => setSOL(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="TAKE-C"
            // value={takec}
            // onChange={(e) => setTakec(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="CHECK"
            // value={check}
            // onChange={(e) => setCHECK(e.target.value)}
            />
          </FormGroup>
          <TextField
            required
            id="standard-required"
            label="ต่อกับเครื่อง"
            // value={connect}
            // onChange={(e) => setConnect(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="อาการเสีย"
            // value={brokensymptoms}
            // onChange={(e) => setBrokensymptoms(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="การแก้ไข"
            // value={editing}
            // onChange={(e) => setEditing(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="Barcode Scanner"
            // value={barcodescanner}
            // onChange={(e) => setBarcodescanner(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="S/N"
            // value={snz}
            // onChange={(e) => setSNZ(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />
        </div>

      </Box>
      <Box>


        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextField
            id="filled-search"
            label="software"
            // value={software}
            // onChange={(e) => setSoftware(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="Start"
            // value={start}
            // onChange={(e) => setStart(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="Finish"
            // value={finish}
            // onChange={(e) => setFinish(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="CLIS"
            // value={clis}
            // onChange={(e) => setCLIS(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


          />

          <TextField
            required
            id="standard-required"
            label="วันที่"
            // value={dateA}
            // onChange={(e) => setDateA(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="DM"
            // value={dm}
            // onChange={(e) => setDM(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="วันที่"
            // value={dateB}
            // onChange={(e) => setDateB(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="ลงชื่อผู้ปฏิบัติงาน"
            // value={signtheworker}
            // onChange={(e) => setSigntheworker(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="วันที่"
            // value={dateC}
            // onChange={(e) => setDateC(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
          <TextField
            required
            id="standard-required"
            label="ลงชื่อหัวหน้า Lab"
            // value={labsignature}
            // onChange={(e) => setLabsignature(e.target.value)}
            variant="standard"
            sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
          />

          <TextField
            required
            id="standard-required"
            label="วันที่"
            // value={dateD}
            // onChange={(e) => setDateD(e.target.value)}
            variant="standard"
            sx={{ width: '300px', margin: '8px' }}
          />
        </div>

      </Box>
    </Box>




  );
}
}

export default Sing;