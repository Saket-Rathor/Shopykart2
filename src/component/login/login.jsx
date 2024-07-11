import React, {useState} from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { RecaptchaVerifier } from 'firebase/auth'
import { signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../auth'


const login = () => {
  const navigate= useNavigate()

const[username,setusername]= useState()
const[otp,setotp]= useState()
const[otpsent,setoptsent]= useState(false)
const[result,setresult]= useState({})
const[error,setError]= useState({})

const handlelogin =(e)=>{
  e.preventDefault()
  navigate("home")
}
const verifyOtp = async () => {
  setError("");
  if (otp === "" || otp === null) return;
  try {
    await result.confirm(otp);
    navigate("/home");
  } catch (err) {
    setError(err.message);
  }
};

function setUpRecaptha() {

  try {
    
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
          console.log('recaptcha resolved..')}
  });
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, `+91${username}`, recaptchaVerifier);
    setoptsent(true)
  } catch (error) {
    setoptsent(false)
  }
}

  return (
    <div>
      <div class="container">
  <div class="card">
    <img class="img" src="https://wallpapercave.com/wp/wp10921927.jpg" alt="" srcset="" />
    <h2>Login</h2>
    <form>
   { !otpsent && <input type="number" value={username} placeholder='Enter Your Number' required
        onChange={(e)=>setusername(e.target.value)} />}

   {otpsent && <input type="password" value={otp} placeholder='Enter Your Otp' 
        onChange={(e)=>setotp(e.target.value)} />}
       {!otpsent &&  <button onClick={async(e)=>{
          e.preventDefault()
          const result = await setUpRecaptha()
          if(result.
            verificationId
            ){
              setoptsent(true)
              setresult(result)
            }
          console.log(result)}}>{"Sendotp"}</button>}
          {otpsent &&  <button onClick={async(e)=>{
          e.preventDefault()
          await verifyOtp()
          console.log(result)}}>{"verify otp"}</button>}
      
    </form>
    <div id="recaptcha-container"></div>
  </div>
</div>
    </div>
  )
}

export default login
