import logoBlizzard from "../assets/blizzard-logo.png";
import logoBattleNet from "../assets/footer/logo-battle-net.png";

import { FaApple, FaFacebookSquare, FaGoogle, FaRegUser } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { useModal } from "../hooks/useModal";

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

  const hover = `ease-out duration-300 hover:text-[#81848E]`;

  return (
    <>
      <header className="flex justify-center h-24 items-center border-b-[1.5px] border-[#6E707C] absolute w-full">
        <div className="flex flex-1 justify-between items-center max-w-[1216px]">
          <div className="flex gap-[112.3px]">
            <a href="/">
              <img
                src={logoBlizzard}
                alt="blizzard-logo"
                className="w-[115.7px] h-10"
              />
              <span className="border-[0.5px] w-[43px] border-[#00AEFF] absolute top-[94.4px]"></span>
            </a>
            <ul className="flex gap-8 items-center text-white font-medium text-sm leading-[21px]">
              <li className={`${hover}`}>
                <Dropdown text="Jogos" />
              </li>
              <li className={`${hover}`}>
                <Dropdown text="Esportes" />
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
