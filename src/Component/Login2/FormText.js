import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';





const FormText = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

// console.log(username);
// console.log(password);
if(username==="test" && password==="test"){
console.log("test")
localStorage.setItem('token',1)
navigate("/home")
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
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ backgroundColor: 'HotPink' }}>
              Log in
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        {/* Content for the second column goes here */}
        <img
          src= "https://www.eeci.or.th/wp-content/uploads/2021/07/09-Medical-Devices_1.png"
          alt="A beautiful landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
          Hi, Welcome
        </Typography>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
          Hi, Welcome back. Enter your credentials to continue
        </Typography>
      </Grid>

    </Grid>
  );
};

export default FormText;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { httpClient } from './../../utils/HttpClient'; 
// import { server } from '../../constant'; 
// import { register } from '../../constants/action.constant';
// import {
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';


// class Register extends Component  {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       errorUserName: "",
//       errorPassword: "",
//       showPassword: false,
//     };
//   }

//   setUsername = (username) => {
//     this.setState({ username, errorUserName: "" });
//   };

//   setPassword = (password) => {
//     this.setState({ password, errorPassword: "" });
//   };

//   toggleShowPassword = () => {
//     this.setState((prevState) => ({
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   onClickRegister = () => {
//     const { username, password } = this.state;
//     const { register } = this.props;

//     httpClient.post(server.REGISTER_URL, { username, password })
//       .then(Response => {
//         // ใช้ action ที่เชื่อมโยงกับ Redux ในการส่งข้อมูลที่ได้จากการลงทะเบียนไปยัง reducer
//         register(Response.data);
//         alert(JSON.stringify(Response.data));
//       })
//       .catch(error => {
//         console.error('Registration error: ', error);
//       });
//   };

//   render() {
//     const { username, password, errorUserName, errorPassword, showPassword } = this.state;

//     return (
//       <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
//         <Grid item xs={12} md={6} lg={5}>
//           <Paper
//             sx={{
//               padding: 2,
//               textAlign: 'center',
//               backgroundColor: '#ffff',
//               borderRadius: '5px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}
//           >
//             <Typography variant="h6" gutterBottom>
//               Hi, Welcome to BPL PATHOLOGIST
//             </Typography>
//             <Typography variant="subtitle1" gutterBottom>
//               Enter your credentials to continue
//             </Typography>
//             <form>
//               <TextField
//                 label="Username"
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 value={username}
//                 onChange={(e) => this.setUsername(e.target.value)}
//                 error={errorUserName !== ''}
//                 helperText={errorUserName}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton>
//                         <AccountCircle />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 label="Password"
//                 type={showPassword ? 'text' : 'password'}
//                 variant="outlined"
//                 margin="normal"
//                 fullWidth
//                 value={password}
//                 onChange={(e) => this.setPassword(e.target.value)}
//                 error={errorPassword !== ''}
//                 helperText={errorPassword}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={this.toggleShowPassword}>
//                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button onClick={this.onClickRegister} variant="contained" color="primary">
//                 Register
//               </Button>
//             </form>
//           </Paper>
//         </Grid>
//       </Grid>
//     );
//   }
// }

// const mapStateToProps = (registerReducer) => ({ registerReducer });

// const mapDispatchToProps = {
//   register,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Register);


// import React, { Component } from "react";
// import { connect } from "react-redux";
// // import axios from "axios";
// // import { server } from '../../constants';
// import { register } from "../../constants/action.constant";

// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }
  

//   showError = () => {
//     return (
//       <div className="alert alert-danger alert-dismissible">
//         <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
//         <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect username or password
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="login-box">
//         <div className="login-logo">
//           <a href="../../index2.html">
//             <b>CMStock</b>Login
//           </a>
//         </div>
//         {/* /.login-logo */}
//         <div 
//         style={{background: "whitesmoke", borderRadius: 10}}
//         className="login-box-body">
//           <p className="login-box-msg">Sign in to start your session</p>
//           <form>
//             <div className="form-group has-feedback">
//               <input
//                 onChange={e=>this.setState({username:e.target.value})}
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//               />
//               <span className="glyphicon glyphicon-envelope form-control-feedback" />
//             </div>
//             <div className="form-group has-feedback">
//               <input
//                 onChange={e=>this.setState({password:e.target.value})}
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//               />
//               <span className="glyphicon glyphicon-lock form-control-feedback" />
//             </div>

//             {this.props.loginReducer.isError ? this.showError() : null }

  
//             {/* Login */}
//             <div className="row">
//               <div className="col-xs-12">
//                 <button
//                  onClick={e=>{
//                    e.preventDefault();
//                    this.props.login(this.props.history,this.state)
//                  }}
//                   type="submit"
//                   className="btn btn-primary btn-block btn-flat"
//                 >
//                   Sign In
//                 </button>
//               </div>
//               {/* /.col */}
//             </div>

//             {/* Register */}
//             <div className="row">
//               <div className="col-xs-12">
//                 <button
//                 onClick={()=>this.props.history.push("/register")}
//                   type="submit"
//                   style={{marginTop: 8}}
//                   className="btn btn-block btn-default"
//                 >
//                   Register
//                 </button>
//               </div>
//               {/* /.col */}
//             </div>
//           </form>
//         </div>
//         {/* /.login-box-body */}
//       </div>
//     );
//   }
// }


// const mapStateToProps = ({ registerReducer }) => ({ registerReducer });

// const mapDispatchToProps = {
//   register
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Register);
