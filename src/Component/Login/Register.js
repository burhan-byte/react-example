import React from 'react';
import { useDispatch } from 'react-redux';
import { Register } from 'path/to/RegisterActions'; // แทน path/to/RegisterActions ด้วยที่อยู่ที่ถูกต้องของไฟล์ RegisterActions



const Register = () => {
  const dispatch = useDispatch();

  const handleRegistration = () => {
    // ส่งการลงทะเบียนผ่าน history และ credential
    dispatch(Register(history, credentials));
  };

  return (
    <div>
      {/* เพิ่มองค์ประกอบ UI ที่เกี่ยวข้อง */}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Register;
