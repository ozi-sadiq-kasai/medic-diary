import {useEffect} from "react"
import PostComponent from "../Component/PostComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";

export default function Post() {
 let navigate = useNavigate();
  useEffect(()=>{
  onAuthStateChanged(auth,(res)=>{
  if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
  })
 },[])
  return (
    <div>Post
     <PostComponent/>
    </div>
  )
}