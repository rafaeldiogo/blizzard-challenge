import iconCloseModal from "../assets/modal/icons/close-modal-icon.svg";

import { ReactNode } from "react";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

const Modal = ({ children, isOpen, toggle }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.7)]">
          <div className="flex h-[600px] w-[696px] justify-between bg-[#020203] bg-[url('./assets/modal/images/bg-login-form.png')] p-6">
            {children}
            <button className="flex items-start" onClick={toggle}>
              <img
                src={iconCloseModal}
                alt="close-modal-icon"
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
