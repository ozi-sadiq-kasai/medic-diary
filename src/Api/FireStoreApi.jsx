import { firestore } from "../firebaseConfig"
import {
  addDoc, 
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  orderBy } from "firebase/firestore"
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


//get post from firestore database based on email
export const getPosts = (setAllPosts, userEmail) => {
  const userPostsQuery = query(
    dbRef,
    where("userEmail", "==", userEmail),
    orderBy("timeStamp")
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


// Get Current User from Firestore
// export const getCurrentUser = (setCurrentUser) => {
//   onSnapshot(userRef, (response) => {
//     setCurrentUser(
//       response.docs
//         .map((docs) => {
//           return { ...docs.data(), id: docs.id };
//         })
//         .filter((item) => {
//           return item.email === localStorage.getItem("userEmail");
//         })[0]
//     );
//   });
// };

// Get Current User from Firestore
export const getCurrentUser = (setCurrentUser) => {
  // Update this query to get the current user based on their email
  const userEmail = localStorage.getItem("userEmail");
  const userQuery = query(userRef, where("email", "==", userEmail));

  onSnapshot(userQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0] // Assuming there is only one user with a given email
    );
  });
};



// Edit UserProfile Inputs
export const editProfile = (id, payload) => {
  let userToEdit = doc(userRef, id);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete post
export const deletePost = (id) =>{
 let docToDelete = doc(dbRef,id)
 try {
  deleteDoc(docToDelete)
  toast.success("Post has been Deleted!");
 } catch (error) {
   console.log(error);
 }
}