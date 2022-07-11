import React from "react";



const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modalview">{children}</div>
    </>
  );
};

export default Modal;
