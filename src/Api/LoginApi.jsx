import {
 signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 GoogleAuthProvider,
 signInWithPopup,

 } from "firebase/auth"
import { auth } from "../firebaseConfig"

export const LoginApi = async (email,password) => {
 try {
 let response= await signInWithEmailAndPassword(auth,email,password)
 return response
 } catch (error) {
  return error
 }
}

export const GoogleSignInApi = async (email,password)=>{
 try {
  let googleProvider = new GoogleAuthProvider()
  let response = signInWithPopup(auth,googleProvider)
  return response
 } catch (error) {
  return error
 }
}

export const RegisterApi = async (email,password)=>{
 try {
 let response = await createUserWithEmailAndPassword(auth,email,password)
  return response
 } catch (error) {
  return error
 }
}