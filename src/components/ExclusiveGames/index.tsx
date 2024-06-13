import { useFetchGames } from "../../hooks/useFetchGames";

import logoBlizzard from "../../assets/blizzard-logo.png";

import iconFourSquareGray from "../../assets/exclusive-games/icons/four-square-gray.svg";

import ExclusiveGamesHeader from "./ExclusiveGamesHeader";
import CardGame from "./CardGame";

const ExclusiveGames = () => {
  const { games } = useFetchGames();

  return (
    <main className="flex flex-col gap-[85px] h-fit items-center justify-center bg-[#020203]">
      <ExclusiveGamesHeader />
      <div className="h-fit w-full max-w-[1216px]">
        <div className="grid grid-cols-4 gap-x-8 gap-y-12 mb-[107.3px]">
          {games?.map((game) => (
            <CardGame key={game.name} {...game} />
          ))}
          <div className="flex flex-col gap-[36.55px] items-center justify-center bg-black w-[301px] h-[412.8px] border border-[#212428] rounded">
            <img
              src={logoBlizzard}
              alt="blizzard-logo"
              className="w-[93.28px] h-[43px]"
            />
            <button className="flex items-center text-white font-semibold text-[17.2px] leading-[25.8px] gap-[13.97px]">
              <img src={iconFourSquareGray} alt="icon-four-square" />
              <p>Ver todos jogos</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExclusiveGames;
