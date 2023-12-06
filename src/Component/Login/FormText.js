import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, AccountCircle, KeyboardControlKeyOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#fff', 
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', 
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF6666', 
  color: '#fff',
  '&:hover': {
    backgroundColor: '#FFCCFF',
  },
  marginTop: theme.spacing(2), 
}));


const FormText = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = () => {
    if (username === 'Nurda' && password === '1234') {
      console.log('Nurda');
      localStorage.setItem('token', 1);
      navigate('/Sine');
    } else {
      console.log('fail');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6} lg={5}>
        <StyledPaper>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
  Hi, Welcome to BPL PATHOLOGIST
</Typography>
<Typography variant="subtitle1" gutterBottom style={{ color: '#555' }}>
  Enter your credentials to continue
</Typography>

          <form>
            <StyledTextField
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
            <StyledTextField
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
            <StyledButton variant="contained" fullWidth onClick={handleLogin}>
              Log in
            </StyledButton>
          </form>
        </StyledPaper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <img
  src="https://i0.wp.com/rayhaber.com/wp-content/uploads/2021/02/ikinci-el-tibbi-cihaz-alirken-nelere-dikkat-edilir.jpg?resize=678%2C381&ssl=1"
  alt="A beautiful landscape"
  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
/>

        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginTop: '5px' }}>
          Hi, Welcome
        </Typography>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center' }}>
          Hi, Welcome back. To Logins Medical
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FormText;





// import React, { Component } from "react";
// import { login, autoLogin } from "./../../actions/login.action";
// import { connect } from "react-redux";

// class Login extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        username:"",
//        password:""
//     }
//   }

//   componentDidMount(){
//     this.props.autoLogin(this.props.history);
//   }
  


//   showError = ()=>{
//     return (
//       <div className="alert alert-danger alert-dismissible">
//       <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
//       <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect username or password
//     </div>
//     )
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


// const mapStateToProps = ({loginReducer}) => ({ loginReducer })

// const mapDispatchToProps = {
//   login, autoLogin
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)


// import React, { Component } from "react";
// import { login, autoLogin } from "./../../actions/login.action";
// import { connect } from "react-redux";

// class FormText extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        username:"",
//        password:""
//     }
//   }

//   componentDidMount(){
//     this.props.autoLogin(this.props.history);
//   }
  


//   showError = ()=>{
//     return (
//       <div className="alert alert-danger alert-dismissible">
//       <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
//       <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect username or password
//     </div>
//     )
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


// const mapStateToProps = ({loginReducer}) => ({ loginReducer })

// const mapDispatchToProps = {
//   login, autoLogin
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FormText)







