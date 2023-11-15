import { Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormText from "../Component/Login2/FormText";
import axios from "axios";
import LoginPage from "../Component/LoginPage";

export default function Login2() {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    //  await axios.get('http://192.168.101.40:5000/api/test')
    //   .then((response)=>{
    //     const {data} =response;
    //     // console.log(data);
    //     // console.log(response);
    //     setUser(data.result);
    //   })
  }, []);

  // console.log(user)

  return (
    <div>
      <FormText />
      {user.map((opt, i) => (
        <Chip label={opt.email} />
      ))}
    </div>
  );
}
