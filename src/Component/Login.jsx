import React from 'react'

const Login = ()=>{
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [ErrorPassword,setErrorPassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>=5){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 5 ตัวอักษร')
            setUserNameColor('red')
        }

        if(password.includes("@")){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รูปแบบอีเมลไม่ถูกต้อง')
            setPasswordColor('red')
        }
}
}

export default function login() {

  return 
  (
    <div className="container">
    <form className="form" onSubmit={validateForm}>
        <h2>แบบฟอร์มลงทะเบียน</h2>
        <div className="form-control">
            <label>ชื่อผู้ใช้</label>
            <input type="test" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
            <small style={{color:userNameColor}}>{errorUserName}</small>
        </div>
        <div className="form-control">
            <label>อีเมล</label>
            <input type="test"value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
            <small style={{color:emailColor}}>{errorEmail}</small>
        </div>
        )
  