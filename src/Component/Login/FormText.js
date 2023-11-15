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






import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';

export default function FormText() {
  const spacing = 2; // Assuming you have defined spacing
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    
        <div>
          <Grid container direction="row" justifyContent="center" alignItems="center">
           
                <Paper elevation={0} 
                ฒฬxs={12} md={6} 
                sx={{
                  padding: 2,
                  textAlign: 'center',
                  backgroundColor: '#ffff',
                  borderRadius: 'px',
                }}
              >
          
                <Typography variant='h5'>Hi,Welcome to BPL PATHOLOGIST</Typography>
                <form>
                  <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                  </Button>
                </form>
              </Paper>

                
            
         
            
              </Grid>
      
        </div>
        
      
  
  );
}







