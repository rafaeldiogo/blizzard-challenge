import { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { mapGames } from "../../utils/mapGames";
import { mapSports } from "../../utils/mapSports";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DropdownFooter from "./DropdownFooter";

type DropdownProps = {
  text?: string;
};

const Dropdown = ({ text }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu.Root modal={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild className="outline-none">
        <button className="flex items-center gap-3">
          <span>{text}</span>
          {isOpen ? (
            <FaChevronUp size={16} className="fill-[#00AEFF]" />
          ) : (
            <FaChevronDown size={16} className="fill-white" />
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={37}
          hideWhenDetached
          className="bg-gradient-to-b from-[rgba(2,2,3,1)] to-[rgba(14,17,23,0.92)] w-screen flex items-center justify-center px-28 pt-9"
        >
          <nav className="flex flex-col text-white w-[1216px]">
            <ul>
              {text === "Jogos" && (
                <li className="grid grid-cols-6 gap-x-8 gap-y-7 text-[#9D9D9D] text-sm leading-4">
                  {mapGames.map((content) => (
                    <DropdownMenu.Item
                      className="hover:outline-none"
                      key={content.text}
                    >
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">{content.text}</p>
                      </a>
                    </DropdownMenu.Item>
                  ))}
                </li>
              )}
              {text === "Esportes" && (
                <li className="grid grid-cols-5 gap-x-16 text-[#9D9D9D] text-sm leading-4">
                  {mapSports.map((content) => (
                    <DropdownMenu.Item
                      className="hover:outline-none"
                      key={content.text}
                    >
                      <a
                        href="/"
                        className="flex flex-col items-center w-[174px] h-[237px] gap-2"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">{content.text}</p>
                      </a>
                    </DropdownMenu.Item>
                  ))}
                </li>
              )}
              <DropdownFooter name={text} />
            </ul>
          </nav>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
