import ProfileComponent from "../Component/ProfileComponent"
import "../Sass/Profile.scss"
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../Component/Common/Loader"

export default function Profile({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return(
   <div className= "profile-main">
   { loading ? <Loader />  : <ProfileComponent currentUser={currentUser} />}
   </div>
  )
  
 
  
  
}