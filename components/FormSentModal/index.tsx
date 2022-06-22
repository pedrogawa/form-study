import React from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function FormSentModal() {
  const closeModal = () => {
    let successModal = document.querySelector<HTMLElement>(".modal-container");

    if (successModal) {
      successModal.classList.remove("show");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <MdClose className="close-icon" size={24} onClick={closeModal} />
        </div>
        <div className="modal-message">
          <BsFillCheckCircleFill color="green" size={24} />
          <span>Thank you for your message!</span>
        </div>
      </div>
    </div>
  );
}
