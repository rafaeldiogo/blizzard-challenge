import logoBlizzard from "../assets/blizzard-logo.png";

import { FaRegUser } from "react-icons/fa";

import Dropdown from "./Dropdown/index";
import Button from "./Button";

const Menu = () => {
  return (
    <header className="flex justify-center h-24 items-center border-b-[1.5px] border-[#ffffff]">
      <div className="flex flex-1 justify-between items-center max-w-[1216px]">
        <div className="flex gap-[122px]">
          <a href="/">
            <img src={logoBlizzard} alt="blizzard-logo" />
          </a>
          <ul className="flex gap-8 items-center text-white">
            <li>
              <Dropdown text="Jogos" />
            </li>
            <li>
              <Dropdown text="Esportes" />
            </li>
            <li>
              <a href="/">Loja</a>
            </li>
            <li>
              <a href="/">Notícias</a>
            </li>
            <li>
              <a href="/">Suporte</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center text-white">
          <Button text="Criar conta" />
          <Button
            variant="secondary"
            className="py-[10px] px-[26.23px] gap-[6.31px]"
          >
            <FaRegUser size={18.92} />
            <p>Logar</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
