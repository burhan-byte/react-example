import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { TextField, Checkbox, FormGroup, FormControlLabel, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(8),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box>
      <Stack spacing={3}>
        <Item>
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
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="จังหวัด"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="วันที่ปฏิบัติงาน"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="เดือน"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="ปี"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="ติดตั้งครั้งแรก"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />

            <FormGroup
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Y" value="a" />
              <FormControlLabel control={<Checkbox />} label="N" value="b" />
            </FormGroup>

            <TextField
              required
              id="standard-required"
              label="วันที่เข้าทำงานครั้งต่อไป เดือน"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="ปี"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />
            <TextField
              required
              id="standard-required"
              label="โดย"
              defaultValue=""
              variant="standard"
              sx={{ width: '300px' }}
            />

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="HOSxP" value="c" />
            </FormGroup>

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="HospitalOS" value="d" />
            </FormGroup>

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Other" value="e" />
              <TextField required id="standard-required" defaultValue="" variant="standard" />
              <TextField required label="LIS" id="standard-required" defaultValue="" variant="standard" />
            </FormGroup>

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Gateway" value="f" />
            </FormGroup>

            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="None Gateway" value="g" />
            </FormGroup>
          </Box>
        </Item>



        <Box>
        <Item>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
              <TextField
                id="filled-search"
                label="Computer"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="Monitor"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
                

              />

              <TextField
                required
                id="standard-required"
                label="Key board"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px' ,margin: '8px'}}
              />

              <TextField
                required
                id="standard-required"
                label="Mouse"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="UPS"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="Antivirus"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="Printer Barcode"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px' ,margin: '8px'}}
              />
            </div>
          </Item>
          </Box>

          <Box>
          <Item>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' }}>
              <TextField
                id="filled-search"
                label="Software"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="Start"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />

              <TextField
                required
                id="standard-required"
                label="Finish"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="CLIS"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
                

              />

              <TextField
                required
                id="standard-required"
                label="วันที่"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px' ,margin: '8px'}}
              />
              <TextField
                required
                id="standard-required"
                label="DM"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="วันที่"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="ลงชื่อผู้ปฏิบัติงาน"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="วันที่"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="S/N"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              <TextField
                required
                id="standard-required"
                label="ลงชื่อหัวหน้า Lab/เจ้าหน้าที่ Lab"
                defaultValue=""
                variant="standard"
                sx={{ width: '300px',margin: '8px' }}
              />
              <TextField
                required
                id="standard-required"
                label="วันที่"
                defaultValue=""
                variant="standard"
                sx={{ textAlign: 'right', width: '300px',margin: '8px' }}
              />

              
            </div>
          </Item>
          </Box>
        

     


      </Stack>
    </Box>
  );
}
