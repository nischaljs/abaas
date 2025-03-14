import React from "react";

interface PopUpModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const PopUpModal: React.FC<PopUpModalProps> = ({ children, onClose, className = "" }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50  z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUpModal;
