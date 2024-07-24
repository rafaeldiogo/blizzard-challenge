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
    <footer className="flex h-[865px] justify-center bg-footer bg-cover">
      <div className="flex h-fit w-full max-w-[1312.69px] justify-start pt-[96.61px]">
        <div className="flex flex-col gap-[30px] pt-[35.39px] text-white">
          <img
            src={logoBattleNet}
            alt="logo-battle-net"
            className="h-4 w-[133.22px]"
          />
          <p className="text-[32px] font-bold leading-[35.26px]">
            Baixe agora o battle.net
          </p>
          <ul className="mb-[9px] flex flex-col gap-6 text-lg font-normal leading-[32.08px] text-[#828792]">
            <li className="flex items-center gap-4">
              <img
                src={icon1}
                alt="icon1"
                className="h-[18.51px] w-[18.01px]"
              />{" "}
              Seus jogos em um só lugar
            </li>
            <li className="flex items-center gap-4">
              <img src={icon2} alt="icon2" className="h-[18.58px] w-[18px]" />{" "}
              Conecte-se aos seus amigos
            </li>
            <li className="flex items-center gap-4">
              <img src={icon3} alt="icon3" className="h-[18px] w-[18px]" />{" "}
              Compre jogos e itens digitais
            </li>
          </ul>
          {isWindows && (
            <Button
              variant="secondary"
              className="w-[266px] gap-2 p-8 py-[14px]"
            >
              <FaWindows size={24} />
              <p>Baixar para o Windows</p>
            </Button>
          )}
          {isMacOS && (
            <Button
              variant="secondary"
              className="w-[266px] gap-2 p-8 py-[14px]"
            >
              <FaApple size={24} />
              <p>Baixar para o MacOS</p>
            </Button>
          )}
          {isLinux && (
            <Button
              variant="secondary"
              className="w-[266px] gap-2 p-8 py-[14px]"
            >
              <FaLinux size={24} />
              <p>Baixar para o Linux</p>
            </Button>
          )}
          {isUbuntu && (
            <Button
              variant="secondary"
              className="w-[266px] gap-2 p-8 py-[14px]"
            >
              <FaUbuntu size={24} />
              <p>Baixar para o Ubuntu</p>
            </Button>
          )}
          <div className="mt-[17px] flex w-[239px] items-center gap-[18.67px]">
            <img src={icon4} alt="icon4" className="h-5 w-[13.33px]" />
            <p className="flex flex-col text-sm font-semibold leading-[21px]">
              Também disponível como
              <u>aplicativo móvel</u>
            </p>
          </div>
        </div>

        <div className="absolute left-[42%]">
          <img
            src={logoApp}
            alt="app-logo"
            className="h-[609.84px] w-[1065.24px]"
          />
          <img
            src={logoAppMini}
            alt="appmini-logo"
            className="w=[647.21px] h=[335.75px] absolute right-[15%] top-[50%]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
