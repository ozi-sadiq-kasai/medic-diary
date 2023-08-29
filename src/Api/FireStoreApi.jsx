import { firestore } from "../firebaseConfig"
import { addDoc, collection,onSnapshot,query, where } from "firebase/firestore"
import { useRef } from "react"
import { toast } from "react-toastify"

let dbRef = collection(firestore,"posts")
let userRef = collection(firestore,"users")

// send post to firestore database
export const PostPost=(object)=> { 
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Post has been added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};



// get post from firestore database
// export const getPosts = (setAllPosts) =>{
//  onSnapshot(dbRef,(response)=>{
//   setAllPosts(response.docs.map((doc)=>{
//    return {...doc.data(),id:doc.id}
//   }))
//  })}



//get post from firestore database based on email
export const getPosts = (setAllPosts, userEmail) => {
  const userPostsQuery = query(
    dbRef,
    where("userEmail", "==", userEmail)
  );
   onSnapshot(userPostsQuery, (response) => {
    setAllPosts(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};

// post user data to firestore
export const postUserData = (object) =>{
 addDoc(userRef,object)
 .then(() =>{})
 .catch((err)=>{
  console.log(err)
 })
}

// get user data from firestore
export const getCurrentUser = (setCurrentUser) => {
 let currEmail = localStorage.getItem('userEmail')
 onSnapshot(userRef, (response)=>{
  setCurrentUser(
   response.docs.map((docs)=>{
    return {...docs.data(),userId:docs.id}
   }).filter((item)=>{
    return item.email ===currEmail
   })[0]
  )
 })
}

