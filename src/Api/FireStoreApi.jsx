import { firestore } from "../firebaseConfig"
import { addDoc, collection,onSnapshot,query, where,doc,updateDoc } from "firebase/firestore"
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


// Get Current User from Firestore
export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0]
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