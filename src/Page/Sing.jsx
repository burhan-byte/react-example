import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Sing() {
  const [value, setValue] = React.useState(0);

  const [hospital, setHospital] = useState('');
  console.log(hospital);

  const [province, setProvince] = useState('');
  console.log(province);

  const [workdate, setWorkdate] = useState('');
  console.log(workdate);

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
  const [monitor, setMornitor] = useState('');
  const [snb, setSNB] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [snd, setSND] = useState('');
  const [mouse, setMouse] = useState('');
  const [sne, setSNE] = useState('');
  const [ups, setUPS] = useState('');
  const [snf, setSNF] = useState('');
  const [antivirus, setAntivirus] = useState('');
  const [snc, setSNC] = useState('');
  const [printerbarcode, setPrinterbarcode] = useState('');
  const [snh, setSNH] = useState('');
  const [software, setSoftware] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [clis, setCLIS] = useState('');
  const [dateA, setDateA] = useState('');
  const [dm, setDM] = useState('');
  const [dateB, setDateB] = useState('');
  const [signtheworker, setSigntheworker] = useState('');
  const [dateC, setDateC] = useState('');
  const [labsignature, setLabsignature] = useState('');
  const [dateD, setDateD] = useState('');
  const [install, setInstall] = useState('');
  const [md, setMD] = useState('');
  const [pm, setPM] = useState('');
  const [re, setRE] = useState('');
  const [fm, setFM] = useState('');
  const [call, setCALL] = useState('');
  const [sd, setSD] = useState('');
  const [sol, setSOL] = useState('');
  const [takec, setTakec] = useState('');
  const [check, setCHECK] = useState('');
  const [connect, setConnect] = useState('');
  const [brokensymptoms, setBrokensymptoms] = useState('');
  const [editing, setEditing] = useState('');
  const [barcodescanner, setBarcodescanner] = useState('');
  const [snz, setSNZ] = useState('');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="LIS FORM" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
                <TextField
                  id="filled-search"
                  label="โรงพยาบาล"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="จังหวัด"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่ปฏิบัติงาน"
                  value={workdate}
                  onChange={(e) => setWorkdate(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="เดือน"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


                />
                <TextField
                  required
                  id="standard-required"
                  label="ปี"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ติดตั้งครั้งแรก"
                  value={firsttimeinstallation}
                  onChange={(e) => setFirsttimeinstallation(e.target.value)}
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
                  <FormControlLabel control={<Checkbox />} label="Y" value={yes} onChange={(e) => setYes(e.target.value)} />
                  <FormControlLabel control={<Checkbox />} label="N" value={no} onChange={(e) => setNo(e.target.value)} />
                </FormGroup>

                <TextField
                  required
                  id="standard-required"
                  label="วันที่เข้าทำงานครั้งต่อไป เดือน"
                  value={daywork}
                  onChange={(e) => setDaywork(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ปี"
                  value={yearwork}
                  onChange={(e) => setYearwork(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="โดย"
                  value={by}
                  onChange={(e) => setBy(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="HOSxP" value={hOSxP}
                    onChange={(e) => setHOSxP(e.target.value)} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="HospitalOS" value={oshospital}
                    onChange={(e) => setOShospital(e.target.value)} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Other" value={other}
                    onChange={(e) => setOther(e.target.value)} />
                  <TextField required id="standard-required" variant="standard" value={ot}
                    onChange={(e) => setOT(e.target.value)} sx={{ width: '300px', marginRight: '8px' }} />
                  <TextField required label="LIS" id="standard-required" variant="standard" value={lis}
                    onChange={(e) => setLis(e.target.value)} sx={{ width: '300px', marginRight: '8px' }} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Gateway" value={gateway}
                    onChange={(e) => setGateway(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="None Gateway" value={nonegateway}
                    onChange={(e) => setNonegateway(e.target.value)} />
                </FormGroup>

              </div>

          


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
                  onChange={(e) => setMornitor(e.target.value)}
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
                <TextField
                  required
                  id="standard-required"
                  label="S/N"
                  value={snf}
                  onChange={(e) => setSNF(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="Antivirus"
                  value={antivirus}
                  onChange={(e) => setAntivirus(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="S/N"
                  value={snc}
                  onChange={(e) => setSNC(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="Printer Barcode"
                  value={printerbarcode}
                  onChange={(e) => setPrinterbarcode(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="S/N"
                  value={snh}
                  onChange={(e) => setSNH(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
                <FormGroup style={{ marginRight: '20px' }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="INSTALL"
                    value={install}
                    onChange={(e) => setInstall(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="MD"
                    value={md}
                    onChange={(e) => setMD(e.target.value)}
                  />
                </FormGroup>


                <FormGroup style={{ marginRight: '20px' }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="PM"
                    value={pm}
                    onChange={(e) => setPM(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="RE"
                    value={re}
                    onChange={(e) => setRE(e.target.value)}
                  />
                </FormGroup>


                <FormGroup style={{ marginRight: '20px' }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="FM"
                    value={fm}
                    onChange={(e) => setFM(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="CALL"
                    value={call}
                    onChange={(e) => setCALL(e.target.value)}
                  />
                </FormGroup>


                <FormGroup style={{ marginRight: '20px' }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="SD"
                    value={sd}
                    onChange={(e) => setSD(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="SOL"
                    value={sol}
                    onChange={(e) => setSOL(e.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="TAKE-C"
                    value={takec}
                    onChange={(e) => setTakec(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="CHECK"
                    value={check}
                    onChange={(e) => setCHECK(e.target.value)}
                  />
                </FormGroup>
                <TextField
                  required
                  id="standard-required"
                  label="ต่อกับเครื่อง"
                  value={connect}
                  onChange={(e) => setConnect(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="อาการเสีย"
                  value={brokensymptoms}
                  onChange={(e) => setBrokensymptoms(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="การแก้ไข"
                  value={editing}
                  onChange={(e) => setEditing(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Barcode Scanner"
                  value={barcodescanner}
                  onChange={(e) => setBarcodescanner(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="S/N"
                  value={snz}
                  onChange={(e) => setSNZ(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />
              </div>
           
          </Box>
          <Box>
           

              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
                <TextField
                  id="filled-search"
                  label="software"
                  value={software}
                  onChange={(e) => setSoftware(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="Start"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="Finish"
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="CLIS"
                  value={clis}
                  onChange={(e) => setCLIS(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่"
                  value={dateA}
                  onChange={(e) => setDateA(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="DM"
                  value={dm}
                  onChange={(e) => setDM(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่"
                  value={dateB}
                  onChange={(e) => setDateB(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ลงชื่อผู้ปฏิบัติงาน"
                  value={signtheworker}
                  onChange={(e) => setSigntheworker(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่"
                  value={dateC}
                  onChange={(e) => setDateC(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ลงชื่อหัวหน้า Lab"
                  value={labsignature}
                  onChange={(e) => setLabsignature(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่"
                  value={dateD}
                  onChange={(e) => setDateD(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
              </div>
            
          </Box>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>


    </Box>
  );
}