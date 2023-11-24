import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={15}>
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
        


    </Box>
          
        </Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Stack>
    </Box>
  );
}





// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { TextField } from '@mui/material';
// import InputAdornment from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function RowAndColumnSpacing() {
//   return (
//     <Box sx={{ width: '100%' }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={6}>
//           <Item>
//           <Box
//                 component="form"
//                 sx={{
//                     '& > :not(style)': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//                 style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}
//             >
      
    
//          <div>
//          <TextField

//           id="filled-search"
//           label="โรงพยาบาล"
//           defaultValue=""
//           variant="standard"
//         />
        
        

//         </div>

//     </Box>

//           </Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }