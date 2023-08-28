import {useEffect,useState} from "react"
import LoginComponent from "../Component/LoginComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../Component/Common/Loader";

export default function Login() {
 const [loading, setLoading] = useState(true)
 let navigate = useNavigate()
 useEffect(()=>{
 onAuthStateChanged(auth,(res)=>{
  if(res?.accessToken){
   navigate("/post")
  }else{
   setLoading(false)
  }
 })
},[])


  return loading ? <Loader/> :  <LoginComponent/>

    
}