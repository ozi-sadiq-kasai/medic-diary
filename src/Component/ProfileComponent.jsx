import {useMemo,useState} from 'react'
import { getCurrentUser } from '../Api/FireStoreApi'



export default function ProfileComponent() {
 const [currentUser,setCurrentUser] = useState('')
console.log(currentUser)
 useMemo(() =>{
  getCurrentUser(setCurrentUser)
 },[])
  return (
    <div>
     <h3>Welcome {currentUser.name}!</h3>
     ProfileComponent</div>
  )
}