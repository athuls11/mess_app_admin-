import "./App.css";
import React,{useState} from "react";
import { loginCall } from "./api";

function Login() {

  function sayHello() {
    console.log(name,password);
    loginCall(name,password).then(res =>{
      console.log(res)
      alert(res)
    }).catch(e=>{
      console.log(e)
      alert(e)
    })
  }

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

  console.log(name)

  return (
    <div className="App">
      <div className="Wrapper">
        <p style={{ textAlign: "center" }}>LOGIN</p>
        <div
          style={{
            padding: 15,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Username"
            style={{
              padding: 10,
              backgroundColor: "pink",
              borderRadius: 15,
              width: "70%",
            }}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>

        <div
          style={{
            padding: 15,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="password"
            placeholder="password"
            style={{
              padding: 10,
              backgroundColor: "pink",
              borderRadius: 15,
              width: "70%",
            }}
            onChange={(e)=> setPassword(e.target.value)}

          />
        </div>
        <div
          style={{
            padding: 15,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={sayHello}
            style={{
              padding: 10,
              backgroundColor: "green",
              borderRadius: 10,
              width: "30%",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );

}

export default Login;
