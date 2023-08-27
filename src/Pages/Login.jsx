import {useEffect} from "react"
import LoginComponent from "../Component/LoginComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
// import { useNavigate } from "react-router-dom";


export default function Login() {
 // let navigatge = useNavigate()
 useEffect(()=>{
  onAuthStateChanged(auth,(res)=>{
  if (res?.accessToken) {
        navigate("/post");
      } else {
        setLoading(false);
      }
  })
 },[])

  return (
    <div>Login Page
      <LoginComponent/>
    </div>
  )
}