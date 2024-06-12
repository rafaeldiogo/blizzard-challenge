import logoBlizzard from "../assets/blizzard-logo.png";
import logoDiabloII from "../assets/images-games/diabloii-logo.png";
import logoOverwatchII from "../assets/images-games/overwatchii-logo.png";
import logoWow from "../assets/images-games/wow-logo.png";
import logoHearthstone from "../assets/images-games/hearthstone-logo.png";
import logoHeroesOfTheStorm from "../assets/images-games/heroesOfTheStorm-logo.png";
import logoWarcraftIII from "../assets/images-games/warcraftiii-logo.png";
import logoDiabloIV from "../assets/images-games/diabloiv-logo.png";
import logoDiabloImmortal from "../assets/images-games/diabloImmortal-logo.png";
import logoDiabloIII from "../assets/images-games/diabloiii-logo.png";
import logoStarCraftII from "../assets/images-games/starcraftii-logo.png";
import logoStarCraftRemastered from "../assets/images-games/starcraftRemastered-logo.png";
import logoArcadeOfBlizzard from "../assets/images-games/arcadeOfBlizzard-logo.png";
import logoHearthstoneMasters from "../assets/images-sports/hearthstoneMasters-logo.png";
import logoWowArenaWorldChampionship from "../assets/images-sports/wowArenaWorldChampionship-logo.png";
import logoStarCraftIIWCS from "../assets/images-sports/starcraftiiWCS-logo.png";
import logoOverwatchWorldCup from "../assets/images-sports/overwatchWorldCup-logo.png";
import logoOverwatchLeague from "../assets/images-sports/overwatchLeague-logo.png";

import { FaRegUser } from "react-icons/fa";

import Dropdown from "./Dropdown";
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
              <Dropdown text="Jogos">
                <nav className="flex flex-col text-white w-[1216px]">
                  <ul className="grid grid-cols-6 gap-x-8 gap-y-7 text-[#9D9D9D] text-sm leading-4">
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoDiabloII}
                          alt="diabloii-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Diablo&reg; II ressurected
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoOverwatchII}
                          alt="overwatchii-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Overwatch&reg; 2
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoWow}
                          alt="wow-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          World of Warcraft&reg;
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoHearthstone}
                          alt="hearthstone-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Hearthstone&reg;
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoHeroesOfTheStorm}
                          alt="heroesOfTheStorm-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Heroes of the Storm&reg;
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoWarcraftIII}
                          alt="warcraftiii-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Warcraft&reg; III Reforged
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoDiabloIV}
                          alt="diabloiv-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">Diablo&reg; IV</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoDiabloImmortal}
                          alt="diabloImmortal-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Diablo&reg; Immortal
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoDiabloIII}
                          alt="diabloiii-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">Diablo&reg; III</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoStarCraftII}
                          alt="starcraftii-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          StarCraft&reg; II
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoStarCraftRemastered}
                          alt="starcraftRemastered-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          StarCraft&reg; Remastered
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoArcadeOfBlizzard}
                          alt="arcadeOfBlizzard-logo"
                          className="h-[69.4px] w-[69.4px]"
                        />
                        <p className="text-center w-[105px]">
                          Arcade da Blizzard&reg;
                        </p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Dropdown>
            </li>
            <li>
              <Dropdown text="Esportes">
                <nav className="flex flex-col text-white w-[1116px]">
                  <ul className="grid grid-cols-5 gap-x-16 text-[#9D9D9D] text-sm leading-4">
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoHearthstoneMasters}
                          alt="hearthstoneMasters-logo"
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">
                          Hearthstone&reg; masters
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoWowArenaWorldChampionship}
                          alt="wowArenaWorldChampionship-logo"
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">
                          Campeonato Mundial de Arena WoW&reg;
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoStarCraftIIWCS}
                          alt="starcraftiiWCS-logo"
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">
                          StarCraft&reg; II WCS
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoOverwatchWorldCup}
                          alt="overwatchWorldCup-logo"
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">
                          Copa Mundial de Overwatch&reg;
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex flex-col items-center justify-center w-44 h-44 gap-2"
                      >
                        <img
                          src={logoOverwatchLeague}
                          alt="overwatchLeague-logo"
                          className="h-[149px] w-[174px]"
                        />
                        <p className="text-center w-[105px]">
                          Hearthstone&reg; masters
                        </p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Dropdown>
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
          <Button variant="secondary">
            <FaRegUser />
            <p>Logar</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Menu;
