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
    <main className="flex flex-col sm:gap-[85px] gap-[57px] h-fit items-center bg-[#020203]">
      <ExclusiveGamesHeader />
      <div className="h-fit w-full  flex items-center justify-center">
        <div
          className="
        2xl:grid xl:grid-cols-4 
        xl:grid md:grid-cols-3 grid grid-cols-2 sm:gap-x-8 gap-x-4 sm:gap-y-12 gap-y-6 2xl:mb-[107.3px] xl:mb-[119px] md:mb-[87.67px] mb-[69.46px] w-fit"
        >
          {games?.map((game) => (
            <CardGame key={game.name} {...game} />
          ))}
          <div className="flex flex-col 2xl:gap-[36.55px] xl:gap-[34px] gap-[15.04px] items-center justify-center bg-black 2xl:w-[301px] 2xl:h-[412.8px] xl:w-[280px] xl:h-[384px] md:w-[201.72px] md:h-[276.64px] w-[156px] h-[213.94px] border border-[#212428] rounded">
            <img
              src={logoBlizzard}
              alt="blizzard-logo"
              className="2xl:w-[93.28px] 2xl:h-[43px] xl:w-[86.77] xl:h-10 w-[69.23px] h-[31.91px]"
            />
            <button className="flex items-center text-white font-semibold 2xl:text-[17.2px] 2xl:leading-[25.8px] xl:text-base text-sm  gap-[13.97px]">
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
