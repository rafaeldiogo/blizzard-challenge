import { useFetchGames } from "../../hooks/useFetchGames";

import logoBlizzard from "../../assets/blizzard-logo.png";
import iconFourSquareGray from "../../assets/exclusive-games/icons/four-square-gray.svg";

import { useViewportContext } from "../../context/ViewportContext";

import ExclusiveGamesHeader from "./ExclusiveGamesHeader";
import CardGame from "./CardGame";

const ExclusiveGames = () => {
  const { games } = useFetchGames();
  const { isViewportMinSm } = useViewportContext();

  return (
    <main className="flex h-fit flex-col items-center gap-[57px] bg-[#020203] sm:gap-[85px]">
      <ExclusiveGamesHeader />
      <div className="flex h-fit w-full items-center justify-center">
        <div className="mb-[69.46px] grid w-fit grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-12 md:mb-[87.67px] md:grid-cols-3 xl:mb-[119px] xl:grid xl:grid-cols-4 2xl:mb-[107.3px] 2xl:grid">
          {games?.map((game) => <CardGame key={game.name} {...game} />)}
          <div className="flex h-[213.94px] w-[156px] flex-col items-center justify-center gap-[15.04px] rounded border border-[#212428] bg-black md:h-[276.64px] md:w-[201.72px] xl:h-[384px] xl:w-[280px] xl:gap-[34px] 2xl:h-[412.8px] 2xl:w-[301px] 2xl:gap-[36.55px]">
            <img
              src={logoBlizzard}
              alt="blizzard-logo"
              className="h-[31.91px] w-[69.23px] xl:h-10 xl:w-[86.77] 2xl:h-[43px] 2xl:w-[93.28px]"
            />
            <button className="flex items-center gap-[13.97px] text-sm font-semibold text-white xl:text-base 2xl:text-[17.2px] 2xl:leading-[25.8px]">
              {isViewportMinSm && (
                <img src={iconFourSquareGray} alt="icon-four-square" />
              )}
              <p>Ver todos jogos</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExclusiveGames;
