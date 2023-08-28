import {  Modal,Button } from 'antd';
import "../../Sass/Modal.scss"
const ModalComponent= ({modalOpen,setModalOpen,setPost,post,sendPost}) => {
  return (
    <>
      <Modal
        title="How is your health today?"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button 
          key="submit"
          type="primary"
          disabled ={post.length > 0 ? false : true}
          onClick={sendPost}>
            Post
          </Button>,
        ]}
      >
        <input 
        className= "modal-input"
        type="text"
        placeholder="Let's talk about it...."
        onChange={(event) =>setPost(event.target.value)}
        value={post}
         />
      </Modal>
    </>
  ); 
};

export default ModalComponent;