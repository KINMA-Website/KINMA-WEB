import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

  try{

    await signInWithEmailAndPassword(

      auth,

      email,

      password

    );

    navigate("/dashboard");

  }

  catch(error){

    alert("Email หรือ Password ไม่ถูกต้อง");

  }

};

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
      }}
    >

      <div
        style={{
          width: 350,
          background: "#1e1e1e",
          padding: 30,
          borderRadius: 15,
        }}
      >

        <h2 style={{ color: "white" }}>
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:12,
            marginTop:20,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:"100%",
            padding:12,
            marginTop:10,
          }}
        />

        <button
        onClick={handleLogin}
          style={{
            width:"100%",
            marginTop:20,
            padding:14,
            background:"#ff2b2b",
            color:"white",
            border:"none",
            borderRadius:10,
            cursor:"pointer",
          }}
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default AdminLogin;