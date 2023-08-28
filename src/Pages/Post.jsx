import {useEffect} from "react"
import PostComponent from "../Component/PostComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Topbar from "../Component/Common/Topbar";

export default function Post() {
let navigate = useNavigate()
useEffect(()=>{
 onAuthStateChanged(auth,(res)=>{
 if (!res?.accessToken){
  navigate("/")
 }
 })
},[])


  return (
    <div>
     <Topbar/>
     <PostComponent/>
    
    </div>
  )
}