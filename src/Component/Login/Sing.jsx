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

//   const lo = async (credentials) => {
//     // Placeholder for authentication request
//     try {
//       // Make your authentication request here and return the response
//       const response = await fetch('your_authentication_endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       // Assuming the response is in JSON format
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Authentication error:', error);
//       return { message: 'Authentication failed.' };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await lo({
//         username,
//         password,
//       });

//       if ('accessToken' in response) {
//         swal('Success', response.message, 'success', {
//           buttons: false,
//           timer: 2000,
//         }).then(() => {
//           localStorage.setItem('accessToken', response['accessToken']);
//           localStorage.setItem('user', JSON.stringify(response['user']));
//           window.location.href = '/profile';
//         });
//       } else {
//         swal('Failed', response.message, 'error');
//       }
//     } catch (error) {
//       console.error('Authentication request error:', error);
//       swal('Error', 'An error occurred during authentication.', 'error');
//     }
//   };

//   return (
//     <Grid container className={classes.root}>
//       {/* ... (your existing JSX) */}
//     </Grid>
//   );
// };

// export default FormText;
