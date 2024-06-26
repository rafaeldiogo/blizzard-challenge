import logoApp from "../assets/footer/app.png";
import logoAppMini from "../assets/footer/app-mini.png";
import logoBattleNet from "../assets/footer/logo-battle-net.png";
import icon1 from "../assets/footer/icon-1.svg";
import icon2 from "../assets/footer/icon-2.svg";
import icon3 from "../assets/footer/icon-3.svg";
import icon4 from "../assets/footer/icon-4.svg";

import { FaApple, FaLinux, FaUbuntu, FaWindows } from "react-icons/fa";
import { useOS } from "../hooks/useOsDetect";

import Button from "./Button";

const Footer = () => {
  const os = useOS();

  const isWindows = os.includes("Windows");
  const isMacOS = os.includes("macOS");
  const isLinux = os.includes("Linux");
  const isUbuntu = os.includes("Ubuntu");

  return (
    <footer className="flex justify-center h-[865px] bg-cover bg-footer">
      <div className="flex justify-start w-full max-w-[1312.69px] h-fit pt-[96.61px]">
        <div className="text-white flex flex-col gap-[30px] pt-[35.39px]">
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
              Compre jogos e itens digitais
            </li>
          </ul>
          {isWindows && (
            <Button
              variant="secondary"
              className="py-[14px] p-8 w-[266px] gap-2"
            >
              <FaWindows size={24} />
              <p>Baixar para o Windows</p>
            </Button>
          )}
          {isMacOS && (
            <Button
              variant="secondary"
              className="py-[14px] p-8 w-[266px] gap-2"
            >
              <FaApple size={24} />
              <p>Baixar para o MacOS</p>
            </Button>
          )}
          {isLinux && (
            <Button
              variant="secondary"
              className="py-[14px] p-8 w-[266px] gap-2"
            >
              <FaLinux size={24} />
              <p>Baixar para o Linux</p>
            </Button>
          )}
          {isUbuntu && (
            <Button
              variant="secondary"
              className="py-[14px] p-8 w-[266px] gap-2"
            >
              <FaUbuntu size={24} />
              <p>Baixar para o Ubuntu</p>
            </Button>
          )}
          <div className="flex w-[239px] gap-[18.67px] items-center mt-[17px]">
            <img src={icon4} alt="icon4" className="w-[13.33px] h-5" />
            <p className="flex flex-col font-semibold text-sm leading-[21px]">
              Também disponível como
              <u>aplicativo móvel</u>
            </p>
          </div>
        </div>

        <div className="absolute left-[42%]">
          <img
            src={logoApp}
            alt="app-logo"
            className="w-[1065.24px] h-[609.84px]"
          />
          <img
            src={logoAppMini}
            alt="appmini-logo"
            className="absolute w=[647.21px] h=[335.75px] top-[50%] right-[15%]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
