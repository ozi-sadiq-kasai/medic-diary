import { useState,useMemo } from 'react';
import { PostPost,getPosts } from "../../Api/FireStoreApi"
import '../../Sass/PostUpdate.scss'
import ModalComponent from "./Modal"
// import { getCurrentTimeStamp } from './Moment';

export default function PostUpdate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState("");
  const [allPosts,setAllPosts] = useState([])

  

  // function in button to send post to firebase
  const sendPost = async ()=>{
   await PostPost(post)
   await setModalOpen(false)
   await setPost("")
  }

  useMemo(()=>{
   getPosts(setAllPosts)
  },[])

  return (
    <div className= "postupdate-main">
     <div className="post-update">
      <button className="postupdate-button" onClick={() => setModalOpen(true)}>How is your health today?</button>
     </div>
     <ModalComponent
      setPost={setPost} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      post={post}
      sendPost={sendPost}/>

      <div>
        {allPosts.map((posts) => {
          return (
            <div key={posts.id}>
             <p>{posts.post}</p>
              {/* <PostsCard posts={posts} getEditData={getEditData} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}




// // PostUpdate.js
// import React, { useState, useMemo, useEffect } from 'react';
// import { PostPost, getPosts } from "../../Api/FireStoreApi"; // Adjust import path based on your project structure
// import '../../Sass/PostUpdate.scss';
// import ModalComponent from "./Modal";

// export default function PostUpdate({ userEmail }) {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [post, setPost] = useState("");
//   const [allPosts, setAllPosts] = useState([]);

//   const sendPost = async () => {
//     try {
//       await PostPost(post);
//       setModalOpen(false);
//       setPost("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getPosts(userEmail, setAllPosts);
//   }, [userEmail]);

//   return (
//     <div className="postupdate-main">
//       <div className="post-update">
//         <button className="postupdate-button" onClick={() => setModalOpen(true)}>
//           How is your health today?
//         </button>
//       </div>
//       <ModalComponent
//         setPost={setPost}
//         modalOpen={modalOpen}
//         setModalOpen={setModalOpen}
//         post={post}
//         sendPost={sendPost}
//       />

//       {allPosts.map((post) => (
//         <p key={post.id}>{post.post}</p>
//       ))}
//     </div>
//   );
// }
