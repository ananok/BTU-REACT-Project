import React, { useState, useEffect } from "react";
import Modal from "./ModalPosts";

const Posts = () => {
  const [popup, setpopup] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState();
  useEffect(() => {
    fetch(
      "https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR2TsPkyIHZMvVltuH3bUbGiYpJ5_CGHXxWK3Qf012NzaWFcetxnaMuDPYc"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const HandlerPopup = (value) => {
    setNewPost(value);
    setpopup(true);
  };
  return (
    <div className="post-main-div">
      {posts.map((value) => (
        <div className="created-post-div" key={value.id}>
          <img className="post-img" src={value.image} alt=""></img>
          <h2 className="post-title">{value.title}</h2>
          <p className="post-description">{value.description}</p>
          <button
            className="post-view-butt"
            onClick={() => HandlerPopup(value)}
          >
            View Post
          </button>

          {popup && (
            <Modal open={setpopup} onClose={() => setpopup(false)}>
              <div className="modal-div">
                <h2>{newPost.title} </h2>
                <button onClick={() => setpopup(false)}>X</button>
              </div>
              <div className="modal-div2">
                <img src={newPost.image} alt=""></img>
                <p>{newPost.description}</p>
              </div>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
