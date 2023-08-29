import {
 signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 // GoogleAuthProvider,
 // signInWithPopup,
 signOut

 } from "firebase/auth"
import { auth } from "../firebaseConfig"

export const LoginApi = (email,password) => {
 try {
 let response= signInWithEmailAndPassword(auth,email,password)
 return response
 } catch (error) {
  return error
 }
}

// export const GoogleSignInApi = () => {
//   try {
//     let googleProvider = new GoogleAuthProvider();
//     let res = signInWithPopup(auth, googleProvider);
//     return res;
//   } catch (err) {
//     return err;
//   }
// };

export const RegisterApi = (email,password)=>{
 try {
 let response = createUserWithEmailAndPassword(auth,email,password)
  return response
 } catch (error) {
  return error
 }
}

export const onLogout = () =>{
 try {
  signOut(auth)
 } catch (error) {
  
 }
}