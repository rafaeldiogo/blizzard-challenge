import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type DropdownProps = {
  children: ReactNode;
  text?: string;
};

const Dropdown = ({ children, text }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root modal={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild className="outline-none">
        <button className="flex items-center gap-3">
          <span>{text}</span>
          {isOpen ? (
            <FaChevronUp size={16} className="fill-white" />
          ) : (
            <FaChevronDown size={16} className="fill-white" />
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={37}
          hideWhenDetached
          className="bg-[#00000040] w-screen flex items-center justify-center px-28 pb-14 pt-9"
        >
          <DropdownMenu.Item className="hover:outline-none">
            {children}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
