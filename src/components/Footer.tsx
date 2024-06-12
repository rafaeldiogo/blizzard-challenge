import logoApp from "../assets/footer/app.png";
import logoAppMini from "../assets/footer/app-mini.png";
import logoBattleNet from "../assets/footer/logo-battle-net.png";
import icon1 from "../assets/footer/icon-1.svg";
import icon2 from "../assets/footer/icon-2.svg";
import icon3 from "../assets/footer/icon-3.svg";
import icon4 from "../assets/footer/icon-4.svg";

import Button from "./Button";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center h-[865px] bg-cover bg-[url('./assets/footer/footer-bg.png')]">
      <div className="flex justify-center w-full gap-[17px]">
        <div className="ml-[354px] mt-[96.61px]">
          <div className="text-white flex flex-col gap-[30px] mt-[35.39px]">
            <img
              src={logoBattleNet}
              alt="logo-battle-net"
              className="w-[133.22px] h-4"
            />
            <p className="text-[32px] font-bold leading-[35.26px]">
              Baixe agora o battle.net
            </p>
            <ul className="font-normal text-lg text-[#828792] leading-[32.08px] flex flex-col gap-6 mb-[9px]">
              <li className="flex items-center gap-4">
                <img
                  src={icon1}
                  alt="icon1"
                  className="w-[18.01px] h-[18.51px]"
                />{" "}
                Seus jogos em um só lugar
              </li>
              <li className="flex items-center gap-4">
                <img src={icon2} alt="icon2" className="w-[18px] h-[18.58px]" />{" "}
                Conecte-se aos seus amigos
              </li>
              <li className="flex items-center gap-4">
                <img src={icon3} alt="icon3" className="w-[18px] h-[18px]" />{" "}
                Compre jogos
              </li>
            </ul>
            <Button
              variant="secondary"
              className="py-[14px] p-8 w-[266px] gap-2"
            >
              <FaApple size={24} />
              <p>Baixar para o MacOS</p>
            </Button>
            <div className="flex w-[239px] gap-[18.67px] items-center mt-[17px]">
              <img src={icon4} alt="icon4" className="w-[13.33px] h-5" />
              <p className="flex flex-col font-semibold text-sm leading-[21px]">
                Também disponível como
                <u>aplicativo móvel</u>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1145px] h-[865px] flex items-start justify-end flex-1 mr-[55px]">
          <img
            src={logoApp}
            alt="app-logo"
            className="absolute w-[1065.24px] h-[865px]"
          />
          <img
            src={logoAppMini}
            alt="appmini-logo"
            className="relative w=[647.21px] h=[335.75px] top-[370px] right-9"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
