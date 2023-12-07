import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box, Button} from '@mui/material';
import { TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as Sing_action from "../action/sing.action"
import { useDispatch } from 'react-redux';




const Sing = () => {
  const dispatch = useDispatch();


  return (
        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* <Button onClick={
            dispatch(Sing_action.connects())
          }>กด</Button> */}
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
                <TextField
                  id="filled-search"
                  label="Hospital"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={hospital}
                  // onChange={(e) => setHospital(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="จังหวัด"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={province}
                  // onChange={(e) => setProvince(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />

                <TextField
                  required
                  id="standard-required"
                  label="วันที่ปฏิบัติงาน"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={workdate}
                  // onChange={(e) => setWorkdate(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="เดือน"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={month}
                  // onChange={(e) => setMonth(e.target.value)}
                  variant="standard"
                  sx={{ textAlign: 'right', width: '300px', margin: '8px' }}


                />
                <TextField
                  required
                  id="standard-required"
                  label="ปี"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={year}
                  // onChange={(e) => setYear(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', margin: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ติดตั้งครั้งแรก"
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={firsttimeinstallation}
                  // onChange={(e) => setFirsttimeinstallation(e.target.value)}
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
                  onClick={() => dispatch(Sing_action.connects())}
                  // value={yes} 
                  // onChange={(e) => setYes(e.target.value)} 
                  />

                  <FormControlLabel control={<Checkbox />} label="N" 
                  // value={no} 
                  // onChange={(e) => setNo(e.target.value)} 
                  />
                </FormGroup>

                <TextField
                  required
                  id="standard-required"
                  label="วันที่เข้าทำงานครั้งต่อไป เดือน"
                  // value={daywork}
                  // onChange={(e) => setDaywork(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="ปี"
                  // value={yearwork}
                  // onChange={(e) => setYearwork(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />
                <TextField
                  required
                  id="standard-required"
                  label="โดย"
                  // value={by}
                  // onChange={(e) => setBy(e.target.value)}
                  variant="standard"
                  sx={{ width: '300px', marginRight: '8px' }}
                />

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="HOSxP"
                  //  value={hOSxP}
                    // onChange={(e) => setHOSxP(e.target.value)} 
                    />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="HospitalOS"
                  // value={oshospital}
                    // onChange={(e) => setOShospital(e.target.value)} 
                    />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Other" 
                  // value={other}
                    // onChange={(e) => setOther(e.target.value)}
                     />
                  <TextField required id="standard-required" variant="standard" 
                  // value={ot}
                    // onChange={(e) => setOT(e.target.value)}
                     sx={{ width: '300px', marginRight: '8px' }} 
                    />
                  <TextField required label="LIS" id="standard-required" variant="standard"
                  //  value={lis}
                    // onChange={(e) => setLis(e.target.value)} 
                    sx={{ width: '300px', marginRight: '8px' }} />
                </FormGroup>

                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Gateway" 
                  // value={gateway}
                    // onChange={(e) => setGateway(e.target.value)}
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
           
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
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
           

              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
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

export default Sing;