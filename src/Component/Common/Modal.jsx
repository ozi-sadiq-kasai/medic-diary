import {  Modal,Button } from 'antd';
import "../../Sass/Modal.scss"
const ModalComponent= ({
 modalOpen,
 setModalOpen,
 setPost,post,
 sendPost,
 bloodPressure,
 setBloodPressure,
 bloodSugar,
 setBloodSugar,
 prescription,
 setPrescription}) => {
  return (
    <>
      <Modal
        title="Enter Vitals"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={500}
        footer={[
          <Button 
          key="submit"
          type="primary"
          disabled ={
           post.length ||
           bloodPressure.length ||
           bloodSugar.length ||
           prescription.lenth > 0 ? false : true}
          onClick={sendPost}>
            Post
          </Button>,
        ]}
      >
        <div className="modalDiv-input">
         <input 
        className= "modal-input"
        type="text"
        placeholder="Doctor's Diagnosis"
        onChange={(event) =>setPost(event.target.value)}
        value={post}
        width={200}
         />
        <input 
        className= "modal-input"
        type="text"
        placeholder="Enter Blood Pressure"
        onChange={(event) =>setBloodPressure(event.target.value)}
        value={bloodPressure}
        width={200}
         />
        <input 
        className= "modal-input"
        type="text"
        placeholder="Enter Blood Sugar Level"
        onChange={(event) =>setBloodSugar(event.target.value)}
        value={bloodSugar}
        width={200}
         />  
        <input 
        className= "modal-input"
        type="text"
        placeholder="Doctor's Prescription"
        onChange={(event) =>setPrescription(event.target.value)}
        value={prescription}
        width={200}
         /> 
        </div>
      </Modal>
    </>
  ); 
};

export default ModalComponent;