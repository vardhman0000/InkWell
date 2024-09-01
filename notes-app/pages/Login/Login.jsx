import React from "react";
import { useState } from 'react'
import { Link , useNavigate} from "react-router-dom";
import PasswordInput from "../../src/Components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    if(!validateEmail(email)){
        setError("Please enter a valid email address!!");
        return;
    }

    if(!password){
        setError("Please enter Password!!");
        return;
    }

    setError("");


    // Login API Call
    try {
        const response = await axiosInstance.post("/login", {
            email : email,
            password : password
        });
        

        // Login Success
        if(response.data && response.data.accessToken){
            localStorage.setItem("token", response.data.accessToken);
            navigate('/notes');
        }

    } catch (error) {
        if(error.response && error.response.data && error.response.data.message){
            setError(error.response.data.message);
        } else {
            setError("An unexpected error occurred. Please try again!!");
        }
    }


  }

  return (
    <>
      <div className="flex items-center justify-center mt-28" style={{ minHeight: "calc(100vh - 9.5vh)" }}>
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-10">Login</h4>
 
            <input 
            type="text"
            placeholder="Email"
            className="input-box w-full text-sm bg-transparent px-5 py-3 mr-3 mb-4 rounded border-[1.5px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-xs text-red-400 pb-1">{error}</p>}

            <button type="submit" className="bg-black text-white rounded p-2 border w-full h-full">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/sign-up" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
