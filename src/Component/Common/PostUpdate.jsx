import { useState,useMemo, useEffect } from 'react';
import { PostPost,getPosts } from "../../Api/FireStoreApi"
import '../../Sass/PostUpdate.scss'
import ModalComponent from "./Modal"
import PostCard from './PostCard';
import { getCurrentTimeStamp } from './Moment';
import { v4 as uuidv4 } from 'uuid';

export default function PostUpdate({currentUser}) {
 let userEmail = localStorage.getItem('userEmail')
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState("");
  const [allPosts,setAllPosts] = useState([])

 // generate Uuid function
 const generatedUuid = uuidv4()


  // function in button to send post to firebase
  const sendPost = async ()=>{
   let object ={
    post:post,
    timeStamp: getCurrentTimeStamp('LLL'),
    userEmail:userEmail,
    userName:currentUser.name,
    postId:generatedUuid
   }
    
   await PostPost(object)
   await setModalOpen(false)
   await setPost("")
  }

  // useEffect(()=>{
  //  getPosts(setAllPosts)
  // },[])
  useEffect(() => {
  getPosts(setAllPosts, userEmail); // Pass the userEmail to getPosts
}, []);



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
             <PostCard posts={posts}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}