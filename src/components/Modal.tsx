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
        <div className="z-10 absolute top-0 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.7)]">
          <div className="flex justify-between p-6 bg-[#020203] bg-[url('./assets/modal/images/bg-login-form.png')] w-[696px] h-[600px]">
            {children}
            <button className="flex items-start" onClick={toggle}>
              <img
                src={iconCloseModal}
                alt="close-modal-icon"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
