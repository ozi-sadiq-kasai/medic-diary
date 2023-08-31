import { useState,useEffect } from 'react';
import { PostPost,getPosts } from "../../Api/FireStoreApi";
import '../../Sass/PostUpdate.scss'
import pressure from "../../assets/pressure.png"
import ModalComponent from "./Modal"
import PostCard from './PostCard';
import { getCurrentTimeStamp } from './Moment';
import { v4 as uuidv4 } from 'uuid';

export default function PostUpdate({currentUser}) {
 let userEmail = localStorage.getItem('userEmail')
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");
  const [prescription, setPrescription] = useState("");
  const [allPosts,setAllPosts] = useState([])

 // generate Uuid function
 const generatedUuid = uuidv4()


  // function in button to send post to firebase
  const sendPost = async ()=>{
   let object ={
    post:post,
    bloodSugar:bloodSugar,
    bloodPressure:bloodPressure,
    prescription:prescription,
    timeStamp: getCurrentTimeStamp('LLL'),
    userEmail:userEmail,
    userName:currentUser.name,
    postId:generatedUuid
   }
    
   await PostPost(object)
   await setModalOpen(false)
   await setPost("")
   await setBloodPressure("")
   await setBloodSugar("")
   await setPrescription("")
  }

  // useEffect(()=>{
  //  getPosts(setAllPosts)
  // },[])
  useEffect(() => {
  getPosts(setAllPosts, userEmail); // Pass the userEmail to getPosts
}, []);



  return (
    <div className= "postupdate-main">
     <img src={pressure} alt="man taking blood pressure" className="postupdate-img" />
     <div className="post-update">
      <button className="postupdate-button" onClick={() => setModalOpen(true)}>Enter your health vitals</button>
     </div>

     <ModalComponent
      setPost={setPost} 
      post={post}
      setBloodPressure={setBloodPressure}
      bloodPressure={bloodPressure}
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      bloodSugar={bloodSugar}
      setBloodSugar={setBloodSugar}
      sendPost={sendPost}
      setPrescription={setPrescription}
      prescription={prescription}/>

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