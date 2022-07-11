import { useState } from "react";
import Modal from "../Main-page/ModalPosts";

const NewService = (props) => {
  const [isOpen, setIsopen] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [errors, setErrors] = useState({title: "", description: "", imageSize: "", imageType:""});

  const titlefun = (e) => {
    setForm({
      ...form,
      title: e.target.value,
    });
    
    if (e.target.value.length>25){
        setErrors({
            ...errors,
            title: "Max Length of the Title - 25 symbols."})
    }else{
        setErrors({
            ...errors,
            title:""})
        }
  };

  const imgfun = (e) => {
    let img = e.target.files[0];
    console.log(img.type)
    setForm({
     ...form,
      image: URL.createObjectURL(img)
    });
    if (img.size>1000000){
        setErrors({
            ...errors,
            imageSize: "Too big (no more than 1 mb).",
            imageType:""
        })
    }else if  (img.type !== "image/png" && img.type !== "image/jpeg" ){
        setErrors({
            ...errors,
            imageSize: "",
            imageType: "Use only jpg and png images."
        })
    }else{
        setErrors({
            ...errors,
            imageSize: "",
            imageType: ""
        })
    }
    
  };
  const descfun = (e) => {
    setForm({
      ...form,
      description: e.target.value,
    });
    if (e.target.value.length>100){
        setErrors({
            ...errors,
            description: "Max Length of the Description - 100 symbols."})
       
    }else{
        setErrors({
            ...errors,
            description:""})
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let resultPosts = {
      title: form.title,
      image: form.image,
      description: form.description,
    };

    props.getObj(resultPosts);
    setIsopen(false);
  };

  return (
    <div>
      <button className="addService" onClick={() => setIsopen(true)}>
        Add New Service
      </button>
      <Modal open={isOpen} onClose={() => setIsopen(false)}>
        <div className="create-service">
          <h2 className="service-head">Create New Service</h2>
          <form onSubmit={onSubmit}>
            <div className="title">
              <label htmlFor="title">Title*</label>
              <input
                className="input-title"
                onChange={titlefun}
                required
              />
              <p className="error"> {errors.title}</p>
            </div>
           
            <div className="description">
              <label htmlFor="description">Description*</label>
              <textarea className="textarea"
                rows="8"
                cols="60"
                onChange={descfun}
                required
              ></textarea>
              <p className="error"> {errors.description}</p>
            </div>
            <div className="image">
              <label htmlFor="image">Image*</label>
              <input
                type="file"
                alt="img"
                onChange={imgfun}
                required
              />
              <p className="error"> {errors.imageSize}</p>
              <p className="error"> {errors.imageType}</p>
            </div>
            <button className="bottom-close"onClick={() => setIsopen(false)}>Close</button>
            <button className="bottom-save">Save Changes</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default NewService;
