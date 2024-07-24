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
        className={`flex h-24 items-center justify-center border-b-[1.5px] ${
          dropdownOpen &&
          "bg-gradient-to-b from-[rgba(2,2,3,1)] to-[rgba(14,17,23,0.92)]"
        } absolute w-full border-[#6E707C]`}
      >
        <div className="ml-6 mr-7 flex max-w-[1312.69px] flex-1 items-center justify-between md:ml-[45px] md:mr-[49px]">
          <div className="flex gap-[112.3px]">
            <a href="/">
              <img
                src={logoBlizzard}
                alt="blizzard-logo"
                className="h-8 w-[69.42px] md:w-[86.77px] xl:h-10 2xl:w-[115.7px]"
              />
              <span className="absolute top-[94.4px] w-[43px] border-[0.5px] border-[#00AEFF]"></span>
            </a>
            <ul className="hidden items-center gap-8 text-sm font-medium leading-[21px] text-white xl:visible xl:flex">
              <li>
                <Dropdown text="Jogos" isOpen={handleDropdownOpen}>
                  <li className="mb-[55px] grid grid-cols-6 gap-x-8 gap-y-7 pt-[38.53px] text-sm leading-4 text-[#9D9D9D]">
                    {mapGames.map((content) => (
                      <a
                        key={content.text}
                        href="/"
                        className="group flex h-44 w-44 flex-col items-center justify-center gap-2 duration-300 ease-in-out hover:bg-[#0B0D12]"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[69.4px] w-[69.4px] duration-300 group-hover:scale-[1.2]"
                        />
                        <p className="w-[105px] text-center">{content.text}</p>
                      </a>
                    ))}
                  </li>
                </Dropdown>
              </li>
              <li>
                <Dropdown text="Esportes" isOpen={handleDropdownOpen}>
                  <li className="mb-[62px] grid grid-cols-5 gap-x-16 pt-[55px] text-sm leading-4 text-[#9D9D9D]">
                    {mapSports.map((content) => (
                      <a
                        key={content.text}
                        href="/"
                        className="group flex h-[237px] w-[174px] flex-col items-center gap-2 duration-300 ease-in-out hover:bg-[#0B0D12]"
                      >
                        <img
                          src={content.icon}
                          alt={content.alt}
                          className="h-[149px] w-[174px] duration-300 group-hover:scale-[1.2]"
                        />
                        <p className="w-[105px] text-center">{content.text}</p>
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
          <div className="flex items-center gap-[89.31px]">
            {isViewportMinMd && (
              <div className="flex items-center gap-4 text-white">
                <Button
                  text="Criar conta"
                  className="duration-300 ease-out hover:bg-white hover:text-black"
                />
                <Button
                  onClick={toggle}
                  variant="secondary"
                  className="gap-[6.31px] px-[26.23px] py-[10px]"
                >
                  <FaRegUser size={18.92} />
                  <p>Logar</p>
                </Button>
              </div>
            )}
            {!isViewportMinLg && (
              <FaBars className="h-[18.67px] w-7 fill-white" />
            )}
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-[41px] flex flex-col items-center gap-10">
            <img
              src={logoBattleNet}
              alt="logo-battle-net"
              className="h-5 w-[166.53px]"
            />
            <form onSubmit={handleSubmit(console.log)}>
              <div className="mb-6 flex w-[426px] flex-col gap-4">
                <input
                  autoComplete="off"
                  className="rounded px-4 pb-[13px] pt-3 text-[15px] font-medium leading-[22.5px] text-[#363842] outline-[#00AEFF]"
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
                  className="rounded px-4 pb-[13px] pt-3 text-[15px] font-medium leading-[22.5px] text-[#363842] outline-[#00AEFF]"
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
                className="flex w-full items-center py-[14px] text-base font-semibold text-white"
              />
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-[35px] text-white">
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-medium leading-[21px]">
                ou conecte-se com
              </p>
              <ul className="flex items-center gap-4">
                <li className="flex h-12 w-12 items-center justify-center rounded bg-white">
                  <FaGoogle size={20} className="fill-black" />
                </li>
                <li className="flex h-12 w-12 items-center justify-center rounded bg-white">
                  <FaApple size={20} className="fill-black" />
                </li>
                <li className="flex h-12 w-12 items-center justify-center rounded bg-white">
                  <FaFacebookSquare size={20} className="fill-black" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-base font-medium">
                <a href="/" className="text-[#00AEFF] underline">
                  Crie uma conta
                </a>{" "}
                Battle.net de graça
              </span>
              <a
                href="/"
                className="text-base font-medium text-[#00AEFF] underline"
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
