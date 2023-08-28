import {useEffect,useState} from "react"
import PostComponent from "../Component/PostComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Topbar from "../Component/Common/Topbar";
import Loader from "../Component/Common/Loader";

export default function Post() {
 const [loading, setLoading] = useState(false)
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