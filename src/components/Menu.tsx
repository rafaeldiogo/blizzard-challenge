import logoBlizzard from "../assets/blizzard-logo.png";

const Menu = () => {
  return (
    <header className="flex justify-center h-24 items-center border-b-[1.5px] border-[#ffffff]">
      <div className="flex flex-1 justify-between items-center max-w-[1440px]">
        <div className="flex gap-[122px]">
          <img src={logoBlizzard} alt="blizzard-logo" />
          <img src="../assets/bg-banner.png" alt="" />
          <ul className="flex gap-8 items-center text-white">
            <li>Jogos</li>
            <li>Esportes</li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
        </div>
        <div className="flex gap-2 items-center text-white">
          <button>Criar conta</button>
          <button>Logar</button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
