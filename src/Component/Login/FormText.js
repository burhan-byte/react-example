import React from "react";
import './FormText'
import {useState} from "react"
import "./FormText.css"


const FormText = ()=>{
    const [userName,setUserName] = useState('')
    // const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    //const [repassword,setRepassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    // const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    //const [errorRePassword,setErrorRePassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    // const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    //const [repasswordColor,setRePasswordColor] = useState('')
    

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.includes("@")){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ป้อนอีเมลให้ถูกต้อง')
            setUserNameColor('red')
        }

        // if(email.includes("@")){
        //     setErrorEmail('')
        //     setEmailColor('green')
        // }else{
        //     setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
        //     setEmailColor('red')
        // }
        
        if(password.length>=5){
            // setErrorRePassword('')
            setPasswordColor('green')
            
        }else{
            setErrorPassword('ป้อนรหัสผ่าน')
            setPasswordColor('red')
            
        }

        // if(repassword != "" && repassword === password){
        //     setErrorRePassword('')
        //     setRePasswordColor('green')
            
        // }else{
        //     setErrorRePassword('รหัสผ่านไม่ตรงกัน')
        //     setRePasswordColor('red')
            
        // }

    }


    return(
        
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2 className='text-center'>Hi,Welcome to BPL LAB ONLINE</h2>
                <h3 className='text-center'>Enter your credentials to continue</h3>
                <div className="form-control">
                <label variant="UserName"></label>
                <input type="username" placeholder='User Name'  onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                {/* <div className="form-control">
                    <label>email</label>
                    <input type="test"value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div> */}
                <div className="form-control">
                <label variant="Password"></label>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}style={{borderColor:passwordColor}}/>
                <small style={{Color:passwordColor}}>{errorPassword}</small>
                </div>
                {/* <div className="form-control">
                    <label>repassword</label>
                    <input type="password"value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                    <small style={{Color:repasswordColor}}>{errorRePassword}</small>
                </div> */}
                <button type="submit">SIGN IN</button>

            </form>
           
        </div>
    )

}

export default FormText