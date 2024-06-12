import iconDiabloIV from "../assets/bannerhero/icons/diabloiv.png";
import iconHearthstone from "../assets/bannerhero/icons/hearthstone.png";
import iconWow from "../assets/bannerhero/icons/wow.png";
import iconDiablo from "../assets/bannerhero/icons/diablo.png";
import iconStarCraft from "../assets/bannerhero/icons/starcraft.png";
import { FaRegUser } from "react-icons/fa";

import logoDiabloIVLarge from "../assets/bannerhero/images/diabloiv-logo.png";
import logoHearthstoneLarge from "../assets/bannerhero/images/hearthstone-logo.png";
import logoWowLarge from "../assets/bannerhero/images/wow-logo.png";

import gifDiabloIV from "../assets/bannerhero/images/diablo-animation.gif";
import gifHearthstone from "../assets/bannerhero/images/hearthstone-animation.gif";
import gifWow from "../assets/bannerhero/images/wow-animation.gif";

import logoPreviewDiabloIV from "../assets/bannerhero/images/diablo-animation-cover.png";
import logoPreviewHearthstone from "../assets/bannerhero/images/hearthstone-animation-cover.png";
import logoPreviewWow from "../assets/bannerhero/images/wow-animation-cover.png";

import Button from "./Button";

const BannerHero = () => {
  return (
    <section className="h-[643px] flex items-center justify-center">
      <div className="max-w-[1216px] w-full flex gap-[174px]">
        <ul className="flex flex-col text-white gap-5 pt-[68px]">
          <li className="w-[48px] h-[48px]">
            <button>
              <img src={iconDiabloIV} alt="diabloiv-icon" />
            </button>
          </li>
          <li className="w-[48px] h-[48px]">
            <button>
              <img
                src={iconHearthstone}
                alt="hearthstone-icon"
                className="opacity-[40%]"
              />
            </button>
          </li>
          <li className="w-[48px] h-[48px]">
            <button>
              <img src={iconWow} alt="wow-icon" className="opacity-[40%]" />
            </button>
          </li>
          <li className="w-[48px] h-[48px]">
            <button>
              <img
                src={iconDiablo}
                alt="diablo-icon"
                className="opacity-[40%]"
              />
            </button>
          </li>
          <li className="w-[48px] h-[48px]">
            <button>
              <img
                src={iconStarCraft}
                alt="starcraft-icon"
                className="opacity-[40%]"
              />
            </button>
          </li>
        </ul>
        {/* Diablo IV */}
        {true && (
          <div className="text-white w-full flex max-w-[1105px] h-[475px] justify-between">
            <div className="flex flex-col gap-4 w-[562px] pt-[34px]">
              <p className="text-[64px] font-bold leading-[70.53px]">
                Retorna à escuridão com o game Diablo IV
              </p>
              <p className="text-lg font-normal leading-[27px] mb-4">
                O retorno de Lilith traz uma era de escuridão e sofrimento
              </p>
              <Button
                variant="secondary"
                className="py-[10px] px-[26.23px] w-[200px] gap-2"
              >
                <FaRegUser size={24} />
                <p>Jogue agora</p>
              </Button>
            </div>
            <div className="flex h-full flex-col justify-between">
              <img
                src={logoDiabloIVLarge}
                alt="diabloiv-logo"
                className="w-[280px] h-[154px] relative left-5"
              />
              <div className="flex flex-col items-end gap-4">
                <p className="font-semibold text-[13px] leading-[19.5px] uppercase">
                  Assista o trailer
                </p>
                <div className="relative group">
                  <div>
                    <img
                      src={logoPreviewDiabloIV}
                      alt="previewdiabloiv-logo"
                      className="w-[280px] h-[173px] group-hover:hidden"
                    />
                  </div>
                  <img
                    src={gifDiabloIV}
                    alt="diabloiv-gif"
                    className="w-[280px] h-[173px] hidden group-hover:block"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Hearthstone */}
        {false && (
          <div className="text-white w-full flex max-w-[1105px] h-[475px] justify-between">
            <div className="flex flex-col gap-4 w-[562px] pt-[34px]">
              <p className="text-[64px] font-bold leading-[70.53px]">
                Novo pacote de expansão de Hearthstone
              </p>
              <p className="text-lg font-normal leading-[27px] mb-4">
                A horda e a Aliança se encontraram no Vale Alterac para lutar
              </p>
              <Button variant="secondary" text="Jogue agora" />
            </div>
            <div className="flex h-full flex-col justify-between">
              <img
                src={logoHearthstoneLarge}
                alt="hearthstone-logo"
                className="w-[280px] h-[154px] relative left-5"
              />
              <div className="flex flex-col items-end gap-4">
                <p className="font-semibold text-[13px] leading-[19.5px] uppercase">
                  Assista o trailer
                </p>
                <div className="relative group">
                  <div>
                    <img
                      src={logoPreviewHearthstone}
                      alt="previewhearthstone-logo"
                      className="w-[280px] h-[173px] group-hover:hidden"
                    />
                  </div>
                  <img
                    src={gifHearthstone}
                    alt="hearthstone-gif"
                    className="w-[280px] h-[173px] hidden group-hover:block"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* WoW */}
        {false && (
          <div className="text-white w-full flex max-w-[1105px] h-[475px] justify-between">
            <div className="flex flex-col gap-4 w-[562px] pt-[34px]">
              <p className="text-[64px] font-bold leading-[70.53px]">
                Desbrave as Terras Sombrias em Shadowlands!
              </p>
              <p className="text-lg font-normal leading-[27px] mb-4">
                O que jaz além do mundo que você conhece?
              </p>
              <Button variant="secondary" text="Jogue agora" />
            </div>
            <div className="flex h-full flex-col justify-between">
              <img
                src={logoWowLarge}
                alt="wow-logo"
                className="w-[280px] h-[154px] relative left-5"
              />
              <div className="flex flex-col items-end gap-4">
                <p className="font-semibold text-[13px] leading-[19.5px] uppercase">
                  Assista o trailer
                </p>
                <div className="relative group">
                  <div>
                    <img
                      src={logoPreviewWow}
                      alt="previewWow-logo"
                      className="w-[280px] h-[173px] group-hover:hidden"
                    />
                  </div>
                  <img
                    src={gifWow}
                    alt="wow-gif"
                    className="w-[280px] h-[173px] hidden group-hover:block"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerHero;
