import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import DropdownFooter from "./DropdownFooter";

type DropdownProps = {
  text?: string;
  isOpen?: (isOpen: boolean) => void;
  children?: ReactNode;
};

const Dropdown = ({ text, isOpen, children }: DropdownProps) => {
  const [isOpenState, setIsOpenState] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setIsOpenState(false);
    if (isOpen) {
      isOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpenState &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown, isOpenState]);

  const toggleDropdown = () => {
    setIsOpenState((prevState) => !prevState);
    if (isOpen) {
      isOpen(!isOpenState);
    }
  };

  return (
    <div ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="group flex items-center gap-3 outline-none"
      >
        <span className="duration-300 group-hover:text-[#81848E]">{text}</span>
        {isOpenState ? (
          <FaChevronUp size={16} className="fill-[#00AEFF]" />
        ) : (
          <FaChevronDown
            size={16}
            className="fill-white duration-300 group-hover:fill-[#00AEFF]"
          />
        )}
      </button>
      {isOpenState && (
        <div className="absolute left-0 top-full z-10 w-full">
          <div className="bg-gradient-to-b from-[rgba(2,2,3,1)] to-[rgba(14,17,23,0.92)]">
            <nav className="flex flex-col">
              <ul className="flex items-center justify-center">{children}</ul>
              <DropdownFooter name={text} />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
