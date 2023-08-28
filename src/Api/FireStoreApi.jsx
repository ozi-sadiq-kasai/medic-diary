import { firestore } from "../firebaseConfig"
import { addDoc, collection,onSnapshot,query, where } from "firebase/firestore"
import { toast } from "react-toastify"

let dbRef = collection(firestore,"posts")

// send post to firestore database
export const PostPost=(object)=> { 
 // let object ={
 //  post:post,
 // }
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













// FirebaseApi.js
// import { firestore } from "../firebaseConfig";
// import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";

// const dbRef = collection(firestore, "posts");

// export const PostPost = (post) => {
//   const object = {
//     post: post,
//   };

//   return addDoc(dbRef, object);
// };

// export const getPosts = (userEmail, setAllPosts) => {
//   const q = query(dbRef, where("userEmail", "==", userEmail));

//   onSnapshot(q, (response) => {
//     setAllPosts(
//       response.docs.map((doc) => {
//         return { ...doc.data(), id: doc.id };
//       })
//     );
//   });
// };

