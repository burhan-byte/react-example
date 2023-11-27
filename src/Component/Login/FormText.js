// import React from "react";
// import './FormText'
// import {useState} from "react"
// import "./FormText.css"





// const FormText = ()=>{
//     const [userName,setUserName] = useState('')
//     // const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')
//     //const [repassword,setRepassword] = useState('')

//     const [errorUserName,setErrorUserName] = useState('')
//     // const [errorEmail,setErrorEmail] = useState('')
//     const [errorPassword,setErrorPassword] = useState('')
//     //const [errorRePassword,setErrorRePassword] = useState('')

//     const [userNameColor,setUserNameColor] = useState('')
//     // const [emailColor,setEmailColor] = useState('')
//     const [passwordColor,setPasswordColor] = useState('')
//     //const [repasswordColor,setRePasswordColor] = useState('')
    

//     const validateForm = (e)=>{
//         e.preventDefault()

//         if(userName.includes("@")){
//             setErrorUserName('')
//             setUserNameColor('green')
//         }else{
//             setErrorUserName('ป้อนอีเมลให้ถูกต้อง')
//             setUserNameColor('red')
//         }

//         // if(email.includes("@")){
//         //     setErrorEmail('')
//         //     setEmailColor('green')
//         // }else{
//         //     setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
//         //     setEmailColor('red')
//         // }
        
//         if(password.length>=5){
//             // setErrorRePassword('')
//             setPasswordColor('green')
            
//         }else{
//             setErrorPassword('ป้อนรหัสผ่าน')
//             setPasswordColor('red')
            
//         }

//         // if(repassword != "" && repassword === password){
//         //     setErrorRePassword('')
//         //     setRePasswordColor('green')
            
//         // }else{
//         //     setErrorRePassword('รหัสผ่านไม่ตรงกัน')
//         //     setRePasswordColor('red')
            
//         // }

//     }


//     return(
//       <div> 
//        <img src="./nnn.png" alt="" className="side-image" />
//         <div className="container">
//             <form className="form" onSubmit={validateForm}>
//                 <h2 className='text-center'>Hi,Welcome to BPL LAB ONLINE</h2>
//                 <h3 className='text-center'>Enter your credentials to continue</h3>
//                 <div className="form-control">
//                 <label variant="UserName"></label>
//                 <input type="username" placeholder='User Name'  onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
//                 <small style={{color:userNameColor}}>{errorUserName}</small>
//                 </div>
//                 {/* <div className="form-control">
//                     <label>email</label>
//                     <input type="test"value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
//                     <small style={{color:emailColor}}>{errorEmail}</small>
//                 </div> */}
//                 <div className="form-control">
//                 <label variant="Password"></label>
//                 <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}style={{borderColor:passwordColor}}/>
//                 <small style={{Color:passwordColor}}>{errorPassword}</small>
//                 </div>
//                 {/* <div className="form-control">
//                     <label>repassword</label>
//                     <input type="password"value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}}/>
//                     <small style={{Color:repasswordColor}}>{errorRePassword}</small>
//                 </div> */}
//                 <button type="submit">SIGN IN</button>

//             </form>
//             </div>
//             </div>
            
        
//     )

// }

// export default FormText






// src/FormText.js
// import React from "react";
// import './FormText.css';
// import { useState } from "react";

// const FormText = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorUserName, setErrorUserName] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');
//   const [userNameColor, setUserNameColor] = useState('');
//   const [passwordColor, setPasswordColor] = useState('');

//   const validateForm = (e) => {
//     e.preventDefault();

//     if (userName.includes("@")) {
//       setErrorUserName('');
//       setUserNameColor('green');
//     } else {
//       setErrorUserName('ป้อนอีเมลให้ถูกต้อง');
//       setUserNameColor('red');
//     }

//     if (password.length >= 5) {
//       setPasswordColor('green');
//     } else {
//       setErrorPassword('ป้อนรหัสผ่าน');
//       setPasswordColor('red');
//     }
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={validateForm}>
//         <h2 className='text-center'>Hi, Welcome to BPL LAB ONLINE</h2>
//         <h3 className='text-center'>Enter your credentials to continue</h3>
//         <div className="form-control">
//           <label htmlFor="userName"></label>
//           <input
//             type="text"
//             id="userName"
//             placeholder='User Name'
//             onChange={(e) => setUserName(e.target.value)}
//             style={{ borderColor: userNameColor }}
//           />
//           <small style={{ color: userNameColor }}>{errorUserName}</small>
//         </div>
//         <div className="form-control">
//           <label htmlFor="password"></label>
//           <input
//             type="password"
//             id="password"
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ borderColor: passwordColor }}
//           />
//           <small style={{ color: passwordColor }}>{errorPassword}</small>
//         </div>
//         <button type="submit">SIGN IN</button>
//       </form>
//  </div>
//   );
// };

// export default FormText;



// const FormText = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorUserName, setErrorUserName] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');
//   const [userNameColor, setUserNameColor] = useState('');
//   const [passwordColor, setPasswordColor] = useState('');

//   const validateForm = (e) => {
//     e.preventDefault();

//     if (userName.includes("@")) {
//       setErrorUserName('');
//       setUserNameColor('green');
//     } else {
//       setErrorUserName('ป้อนอีเมลให้ถูกต้อง');
//       setUserNameColor('red');
//     }

//     if (password.length >= 5) {
//       setPasswordColor('green');
//     } else {
//       setErrorPassword('ป้อนรหัสผ่าน');
//       setPasswordColor('red');
//     }
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={validateForm}>
//         <h2 className='text-center'>Hi, Welcome to BPL LAB ONLINE</h2>
//         <h3 className='text-center'>Enter your credentials to continue</h3>
//         <div className="form-control">
//           <label htmlFor="userName"></label>
//           <input
//             type="text"
//             id="userName"
//             placeholder='User Name'
//             onChange={(e) => setUserName(e.target.value)}
//             style={{ borderColor: userNameColor }}
//           />
//           <small style={{ color: userNameColor }}>{errorUserName}</small>
//         </div>

//         <div className="form-control">
//           <label htmlFor="password"></label>
//           <input
//             type="password"
//             id="password"
//             placeholder='Password'
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ borderColor: passwordColor }}
//           />
//           <small style={{ color: passwordColor }}>{errorPassword}</small>
//         </div>

//         <button type="submit">SIGN IN</button>
//       </form>
//     </div>
//   );
// };

// export default FormText;






// import React, { useState } from 'react';
// import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';

// export default function FormText() {
//   const spacing = 2; // Assuming you have defined spacing
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Logging in with:', username, password);
//   };

//   return (
    
//         <div>
//           <Grid container direction="row" justifyContent="center" alignItems="center">
           
//                 <Paper elevation={0} 
//                 ฒฬxs={12} md={6} 
//                 sx={{
//                   padding: 2,
//                   textAlign: 'center',
//                   backgroundColor: '#ffff',
//                   borderRadius: 'px',
//                 }}
//               >
          
//                 <Typography variant='h5'>Hi,Welcome to BPL PATHOLOGIST</Typography>
//                 <form>
//                   <TextField
//                     label="Username"
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <TextField
//                     label="Password"
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <Button variant="contained" color="primary" onClick={handleLogin}>
//                     Login
//                   </Button>
//                 </form>
//               </Paper>

                
            
         
            
//               </Grid>
      
//         </div>
        
      
  
//   );
// }







// import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import swal from 'sweetalert';

// const useStyles = makeStyles((theme) => ({
//   // ... (your existing styles)
// }));

// const FormText = () => {
//   const classes = useStyles();
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Assuming lo() is a function for making an authentication request
//     const response = await lo({
//       username,
//       password,
//     });

//     if ('accessToken' in response) {
//       swal("Success", response.message, "success", {
//         buttons: false,
//         timer: 2000,
//       }).then((value) => {
//         localStorage.setItem('accessToken', response['accessToken']);
//         localStorage.setItem('user', JSON.stringify(response['user']));
//         window.location.href = "/profile";
//       });
//     } else {
//       swal("Failed", response.message, "error");
//     }
//   };

//   return (
//     <Grid container className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} md={7} className={classes.image} />
//       <Grid item xs={12} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="username"
//               label="Email Address"
//               name="email"
//               autoComplete="username"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default FormText;




// import React, { useState } from 'react';
// import { Grid, Paper, TextField, Button, Typography } from '@mui/material';

// const FormText = () => {
//   const spacing = 2; // Assuming you have defined spacing
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Logging in with:', username, password);
//     // Optionally, you can include the following to clear the form after login
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <Grid container spacing={spacing} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//       <Grid item xs={12} md={6} lg={4}>
//         <Paper
//           sx={{
//             padding: 2,
//             textAlign: 'center',
//             backgroundColor: '#ffff',
//             borderRadius: '8px',
//           }}
//         >
//           <Typography variant="h5" gutterBottom>
//             Hi, Welcome to BPL PATHOLOGIST
//             Enter your credentials to continue
//           </Typography>
//           <form>
//             <TextField
//               label="Username"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
//               Login
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//       <Grid item xs={12} md={6} lg={4}>
//         hhhhhhhhhhhh
//         {/* Content for the second column goes here */}
//       </Grid>
//     </Grid>
//   );
// };

// export default FormText;





import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const FormText = () => {
  const navigate =useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  


  const handleLogin = () => {

// console.log(username);
// console.log(password);
if(username==="Nurda" && password==="1234"){
console.log("Nurda")
localStorage.setItem('token',1)
navigate("/Sing") 
}else{
console.log("fail")
}

  };
  
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6} lg={5}>
        <Paper
          sx={{
            padding: 2,
            textAlign: 'center',
            backgroundColor: '#ffff',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Hi, Welcome to BPL PATHOLOGIST
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Enter your credentials to continue
          </Typography>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errorUserName !== ''}
              helperText={errorUserName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errorPassword !== ''}
              helperText={errorPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ backgroundColor: 'purple' }}>
              Log in
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        {/* Content for the second column goes here */}
        <img
          src="https://www.สอบเทียบเครื่องมือแพทย์.com/images/content/original-1465153121899.png"
          alt="A beautiful landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Hi, Welcome
        </Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
          Hi, Welcome back. To Logins Medical 
        </Typography>
      </Grid>
      
    </Grid>
  );
};

export default FormText;
