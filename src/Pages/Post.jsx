import {useEffect,useState} from "react"
import PostComponent from "../Component/PostComponent"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Topbar from "../Component/Common/Topbar";
import Loader from "../Component/Common/Loader";
import {getCurrentUser } from "../Api/FirestoreApi"



export default function Post() {
 const [currentUser,setCurrentUser] =useState({})
 const [loading, setLoading] = useState(true)
let navigate = useNavigate()

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth,(res)=>{
 if (!res?.accessToken){
  navigate("/")
 }else{
  setLoading(false)
 }
 })
 getCurrentUser(setCurrentUser)
 return () => unsubscribe();
},[])
return(
<>
{loading ? <Loader/> :(
 <>
   <Topbar />
   <PostComponent currentUser={currentUser}/>
 </>
)}
</> 
)
}

