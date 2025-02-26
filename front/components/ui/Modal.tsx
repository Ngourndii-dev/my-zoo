import React from "react";
import { OrderForm } from "../OrderForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  animal: any; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, animal }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>Formulaire de commande pour {animal.name}</h2>
        <OrderForm />
      </div>
    </div>
  );
};

export default Modal;
