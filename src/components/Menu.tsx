import logoBlizzard from "../assets/blizzard-logo.png";
import logoBattleNet from "../assets/footer/logo-battle-net.png";

import {
  FaApple,
  FaBars,
  FaFacebookSquare,
  FaGoogle,
  FaRegUser,
} from "react-icons/fa";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useModal } from "../hooks/useModal";

import { mapGames } from "../utils/mapGames";
import { mapSports } from "../utils/mapSports";

import { useViewportContext } from "../context/ViewportContext";

import Dropdown from "./Dropdown/index";
import Button from "./Button";
import Modal from "./Modal";

const Menu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isOpen, toggle } = useModal();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isViewportMinMd, isViewportMinLg } = useViewportContext();

  const hover = `ease-out duration-300 hover:text-[#81848E]`;

  const handleDropdownOpen = (isOpen: boolean) => {
    setDropdownOpen(isOpen);
  };

  return (
    <>
      <header
        className={`flex justify-center h-24 items-center border-b-[1.5px] ${
          dropdownOpen &&
          "bg-gradient-to-b from-[rgba(2,2,3,1)] to-[rgba(14,17,23,0.92)]"
        } border-[#6E707C] absolute w-full`}
      >
        <div className="flex flex-1 justify-between items-center max-w-[1312.69px] md:ml-[45px] md:mr-[49px] ml-6 mr-7">
          <div className="flex gap-[112.3px]">
            <a href="/">
              <img
                src={logoBlizzard}
                alt="blizzard-logo"
                className="2xl:w-[115.7px] md:w-[86.77px] w-[69.42px] xl:h-10 h-8"
              />
              <span className="border-[0.5px] w-[43px] border-[#00AEFF] absolute top-[94.4px]"></span>
            </a>
            <ul className="xl:flex gap-8 items-center text-white font-medium text-sm leading-[21px] xl:visible hidden">
              <li>
                <Dropdown text="Jogos" isOpen={handleDropdownOpen}>
                  <li className="grid grid-cols-6 gap-x-8 gap-y-7 text-[#9D9D9D] text-sm leading-4 mb-[55px] pt-[38.53px]">
                    {mapGames.map((content) => (
                      <a
                        key={content.text}
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2 group hover:bg-[#0B0D12] ease-in-out duration-300"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[69.4px] w-[69.4px] group-hover:scale-[1.2] duration-300"
                        />
                        <p className="text-center w-[105px]">{content.text}</p>
                      </a>
                    ))}
                  </li>
                </Dropdown>
              </li>
              <li>
                <Dropdown text="Esportes" isOpen={handleDropdownOpen}>
                  <li className="grid grid-cols-5 gap-x-16 text-[#9D9D9D] text-sm leading-4 mb-[62px] pt-[55px]">
                    {mapSports.map((content) => (
                      <a
                        key={content.text}
                        href="/"
                        className="flex flex-col items-center w-[174px] h-[237px] gap-2 group hover:bg-[#0B0D12] ease-in-out duration-300"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[149px] w-[174px] group-hover:scale-[1.2] duration-300"
                        />
                        <p className="text-center w-[105px]">{content.text}</p>
                      </a>
                    ))}
                  </li>
                </Dropdown>
              </li>
              <li className={`${hover}`}>
                <a href="/">Loja</a>
              </li>
              <li className={`${hover}`}>
                <a href="/">Notícias</a>
              </li>
              <li className={`${hover}`}>
                <a href="/">Suporte</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[89.31px] items-center">
            {isViewportMinMd && (
              <div className="flex gap-4 items-center text-white">
                <Button
                  text="Criar conta"
                  className="hover:text-black hover:bg-white ease-out duration-300"
                />
                <Button
                  onClick={toggle}
                  variant="secondary"
                  className="py-[10px] px-[26.23px] gap-[6.31px]"
                >
                  <FaRegUser size={18.92} />
                  <p>Logar</p>
                </Button>
              </div>
            )}
            {!isViewportMinLg && (
              <FaBars className="fill-white w-7 h-[18.67px]" />
            )}
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex items-center flex-col gap-10 mb-[41px]">
            <img
              src={logoBattleNet}
              alt="logo-battle-net"
              className="w-[166.53px] h-5"
            />
            <form onSubmit={handleSubmit(console.log)}>
              <div className="flex flex-col w-[426px] gap-4 mb-6">
                <input
                  autoComplete="off"
                  className="outline-[#00AEFF] px-4 pt-3 pb-[13px] text-[15px] leading-[22.5px] font-medium rounded text-[#363842]"
                  placeholder="Email ou Telefone"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">
                    O e-mail é obrigatório e deve ser válido
                  </p>
                )}
                <input
                  autoComplete="off"
                  className="outline-[#00AEFF] px-4 pt-3 pb-[13px] text-[15px] leading-[22.5px] font-medium rounded text-[#363842]"
                  placeholder="Senha"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-600">Senha requerida</p>
                )}
              </div>
              <Button
                type="submit"
                text="Conectar-se"
                variant="secondary"
                className="w-full text-white flex items-center py-[14px] font-semibold text-base"
              />
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-[35px] text-white">
            <div className="flex flex-col items-center gap-4">
              <p className="font-medium text-sm leading-[21px]">
                ou conecte-se com
              </p>
              <ul className="flex gap-4 items-center">
                <li className="bg-white rounded flex items-center justify-center w-12 h-12">
                  <FaGoogle size={20} className="fill-black" />
                </li>
                <li className="bg-white rounded flex items-center justify-center w-12 h-12">
                  <FaApple size={20} className="fill-black" />
                </li>
                <li className="bg-white rounded flex items-center justify-center w-12 h-12">
                  <FaFacebookSquare size={20} className="fill-black" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="font-medium text-base">
                <a href="/" className="text-[#00AEFF] underline">
                  Crie uma conta
                </a>{" "}
                Battle.net de graça
              </span>
              <a
                href="/"
                className="text-[#00AEFF] font-medium text-base underline"
              >
                Não consegue logar?
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Menu;
