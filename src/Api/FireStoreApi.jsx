import { firestore } from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify"

let dbRef = collection(firestore,"posts")

export const PostPost=(post)=> {
 let object = {
  post:post
 }
 addDoc(dbRef,object)
 .then((res)=>{
  toast.success('Post added successfully')
 })
 .catch((err)=>{
  console.log(err)
 })
}