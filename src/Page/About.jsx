import  React, {useState} from 'react';
// import { useReducer } from 'react';
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
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {

  const [value, setValue] = useState(0); 
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
    const handleSave = () => {
      
      console.log('บันทึกข้อมูล');

    };


// // Define action types (optional)
// const actionTypes = {
//   SET_HOSPITAL: 'SET_HOSPITAL',
//   SET_PROVINCE: 'SET_PROVINCE',
//   // Add other action types...
// };

// // Define initial state
// const initialState = {
//   hospital: '',
//   province: '',
//   // Add other states...
// };

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.SET_HOSPITAL:
//       return { ...state, hospital: action.payload };
//     case actionTypes.SET_PROVINCE:
//       return { ...state, province: action.payload };
//     // Handle other actions...
//     default:
//       return state;
//   }
// };

// export default function About() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Usage example
//   const handleHospitalChange = (e) => {
//     dispatch({ type: actionTypes.SET_HOSPITAL, payload: e.target.value });
//   };

//   const handleProvinceChange = (e) => {
//     dispatch({ type: actionTypes.SET_PROVINCE, payload: e.target.value });
//   };

//   // Other handlers for state changes using dispatch...

//   return (
//     // Your JSX with text fields and handlers modified to use state from 'state' object
//   );
// }
    
  const [hospital, setHospital] = useState('');
  console.log(hospital);
  const [province, setProvince] = useState('');
  const [workdate, setWorkdate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [firsttimeinstallation, setFirsttimeinstallation] = useState('');
  const [yes, setYes] = useState('');
  const [no, setNo] = useState('');
  const [daywork, setDaywork] = useState('');
  const [yearwork, setYearwork] = useState('');
  const [dateofentryintowork, setDateofentryintowork] = useState('');
  const [yearr, setYearr] = useState('');
  const [by, setBy] = useState('');
  const [hOSxP, setHOSxP] = useState('');
  const [oshospital, setOShospital] = useState('');
  const [other, setOther] = useState('');
  const [lis, setLis] = useState('');
  const [gateway, setGateway] = useState('');
  const [nonegateway, setNonegateway] = useState('');
  const [computer, setComputer] = useState('');
  const [sn, setSN] = useState('');
  const [monitor, setMornitor] = useState('');
  const [sna, setSNA] = useState('');
  const [keyboard, setKeyboard] = useState('');
  const [snb, setSNB] = useState('');
  const [mouse, setMouse] = useState('');
  const [snc, setSNC] = useState('');
  const [ups, setUPS] = useState('');
  const [snd, setSND] = useState('');
  const [antivirus, setAntivirus] = useState('')
  const [sne, setSNE] = useState('');
  const [printerbarcode, setPrinterbarcode] = useState('');
  const [snf, setSNF] = useState('');
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
  const [sng, setSNG] = useState('');
  const [software, setSoftware] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [clis, setCLIS] = useState('');
  const [day, setDay] = useState('');
  const [dm, setDM] = useState('');
  const [dayone, setDayone] = useState('');
  const [signtheworker, setSigntheworker] = useState('');
  const [dayyy, setDayyy] = useState('');
  const [data, setData] = useState('');
  const [dayaa, setdayaa] = useState('');
  const [youropinion, setYouropiniona] = useState('');

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
      <TextField id="outlined-basic" 
      label="โรงพยาบาล" 
      value={hospital}
      onChange={(e) => setHospital(e.target.value)}
      variant="outlined" 
      />
      <TextField 
      id="filled-basic" 
      label="จังหวัด" 
      value={province}
      onChange={(e) => setProvince(e.target.value)}
      variant="filled" 
      />
      <TextField 
      id="outlined-basic" 
      label="วันที่เข้าปฏิบัติงาน" 
      value={workdate}
      onChange={(e) => setWorkdate(e.target.value)}
      variant="outlined" 
      />
      <TextField 
      id="filled-basic" 
      label="เดือน" 
      value={month}
      onChange={(e) => setMonth(e.target.value)}
      variant="filled" 
      />
      <TextField 
      id="filled-basic" 
      label="ปี" 
      value={year}
      onChange={(e) => setYear(e.target.value)}
      variant="filled" 
      />
      <TextField 
      id="filled-basic" 
      label="ติดตั้งครั้งเเรก" 
      value={firsttimeinstallation}
      onChange={(e) => setFirsttimeinstallation(e.target.value)}
      variant="filled"
      />

<FormControl component="fieldset">
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    style={{ display: 'flex', flexDirection: 'row' }} 
  >
    <FormControlLabel  control={<Checkbox />} label="Y" value={yes} onChange={(e) => setYes(e.target.value)} />
    <FormControlLabel  control={<Checkbox />} label="N" value={no} onChange={(e) => setNo(e.target.value)} />
  </RadioGroup>
</FormControl>
      <TextField 
      id="outlined-basic" 
      label="วันที่เข้าทำงานครั้งต่อไป เดือน" 
      value={daywork}
      onChange={(e) => setDaywork(e.target.value)} 
      variant="outlined" 
      />
      <TextField 
      id="filled-basic" 
      label="จังหวัด" 
      value={yearwork}
      onChange={(e) => setYearwork(e.target.value)} 
      variant="filled" 
      />
      <TextField 
      id="outlined-basic" 
      label="วันที่เข้าปฏิบัติงาน" 
      value={dateofentryintowork}
      onChange={(e) => setDateofentryintowork(e.target.value)} 
      variant="outlined" 
      />
      <TextField 
      id="filled-basic" 
      label="ปี" 
      value={yearr}
      onChange={(e) => setYearr(e.target.value)}
      variant="filled" 
      />
      <TextField 
      id="filled-basic" 
      label="โดย" 
      value={by}
      onChange={(e) => setBy(e.target.value)} 
      variant="filled" />

       <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel control={<Checkbox />} label="HOSxP" value={hOSxP}  onChange={(e) => setHOSxP(e.target.value)}/>
        <FormControlLabel control={<Checkbox />} label="HospitalOS" value={oshospital}  onChange={(e) => setOShospital(e.target.value)}/>
        <FormControlLabel control={<Checkbox/>} label="Other"  value={other} onChange={(e) => setOther(e.target.value)}/>
      </RadioGroup>
    </FormControl>
    <TextField 
    id="standard-basic" 
    label="LIS:" 
    value={lis}
    onChange={(e) => setLis(e.target.value)}
    variant="standard" 
    />
    <RadioGroup
    >
    <FormControlLabel control={<Checkbox />} label="Gateway" value={gateway}  onChange={(e) => setGateway(e.target.value)} />
    <FormControlLabel control={<Checkbox />} label="None Gateway" value={nonegateway} onChange={(e) => setNonegateway(e.target.value)}/>
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
    <TextField 
    id="standard-basic" 
    label="Computer"
    value={computer}  
    onChange={(e) => setComputer(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="S/N" 
    value={sn}  
    onChange={(e) => setSN(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="Montior" 
    value={monitor}  
    onChange={(e) => setMonth(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="S/N" 
    value={sna}  
    onChange={(e) => setSNA(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="Key Board" 
    value={keyboard}  
    onChange={(e) => setKeyboard(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic"
    label="S/N"
    value={snb}  
    onChange={(e) => setSNB(e.target.value)} 
    variant="standard" 
     />
      <TextField 
    id="standard-basic" 
    label="Mouse" 
    value={mouse}  
    onChange={(e) => setMouse(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="S/N"
    value={snc}  
    onChange={(e) => setSNC(e.target.value)} 
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="UPS" 
    value={ups}  
    onChange={(e) => setUPS(e.target.value)}
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="S/N" 
    value={snd}  
    onChange={(e) => setSN(e.target.value)} 
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="Antivirus" 
    value={antivirus}  
    onChange={(e) => setAntivirus(e.target.value)} 
    variant="standard"
    />
    <TextField 
    id="standard-basic"
    label="S/N" 
    value={sne}  
    onChange={(e) => setSNE(e.target.value)} 
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="Printer Barcode"
    value={printerbarcode}  
    onChange={(e) => setPrinterbarcode(e.target.value)}  
    variant="standard" 
    />
    <TextField 
    id="standard-basic" 
    label="S/N" 
    value={snf}  
    onChange={(e) => setSNF(e.target.value)} 
    variant="standard" 
    />
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">หัวข้องาน</FormLabel>
    {/* <RadioGroup
      
    > */}
     <FormGroup>
      <FormControlLabel control={<Checkbox />} label="INSTALL" value={install}  onChange={(e) => setInstall(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="MD" value={md}  onChange={(e) => setMD(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="PM" value={pm}  onChange={(e) => setPM(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="RE" value={re}  onChange={(e) => setRE(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="FM" value={fm}  onChange={(e) => setFM(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="CALL" value={call}  onChange={(e) => setCALL(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="SD" value={sd}  onChange={(e) => setSD(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="SOL" value={sol}  onChange={(e) => setSOL(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="TAKE-C" value={takec}  onChange={(e) => setTakec(e.target.value)} />
      <FormControlLabel control={<Checkbox />} label="CHECK" value={check}  onChange={(e) => setCHECK(e.target.value)} />
    </FormGroup>
    {/* </RadioGroup> */}
  </FormControl>
  <TextField 
  id="standard-basic" 
  label="ต่อกับเครื่อง" 
  value={connect}  
  onChange={(e) => setConnect(e.target.value)}
  variant="standard" 
  />
  <TextField 
  id="standard-basic"
  label="อาการเสีย" 
  value={brokensymptoms}  
  onChange={(e) => setBrokensymptoms(e.target.value)}
  variant="standard" 
  />
  <TextField 
  id="standard-basic" 
  label="การเเก้ไข" 
  value={editing}  
  onChange={(e) => setEditing(e.target.value)}
  variant="standard" 
  />
  <TextField 
  id="standard-basic" 
  label="ฺBarcode Scanner" 
  value={barcodescanner}  
  onChange={(e) => setBarcodescanner(e.target.value)}
  variant="standard" />
  <TextField 
  id="standard-basic" 
  label="S/N" 
  value={sng}  
  onChange={(e) => setSNG(e.target.value)}
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
      value={software}  
      onChange={(e) => setSoftware(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="Start" 
      value={start}  
      onChange={(e) => setStart(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="Finish"
      value={finish}  
      onChange={(e) => setFinish(e.target.value)}  
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="CLIS" 
      value={clis}  
      onChange={(e) => setCLIS(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="วันที่" 
      value={day}  
      onChange={(e) => setDay(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="DM"
      value={dm}  
      onChange={(e) => setDM(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="วันที่" 
      value={dayone}  
      onChange={(e) => setDayone(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="ลงชื่อผู้ปฏิบัติงาน"
      value={signtheworker}  
      onChange={(e) => setSigntheworker(e.target.value)}  
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="วันที่"
      value={dayyy}  
      onChange={(e) => setDayyy(e.target.value)}  
      variant="standard" 
      />
      <TextField id="standard-basic" 
      label="ลงชื่อหัวหน้า Lab/เจ้าหน้าที่ Lab" 
      value={data}  
      onChange={(e) => setData(e.target.value)}  
      variant="standard"
      />
      <TextField 
      id="standard-basic" 
      label="วันที่" 
      value={dayaa}  
      onChange={(e) => setdayaa(e.target.value)} 
      variant="standard" 
      />
      <TextField 
      id="standard-basic" 
      label="ข้อคิดเห็นของท่าน" 
      value={youropinion}  
      onChange={(e) => setYouropiniona(e.target.value)} 
      variant="standard" 
      />
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








