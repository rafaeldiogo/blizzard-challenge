import iconBattleNet from "../../assets/exclusive-games/icons/icon-battle-net.svg";
import iconNintendoSwitch from "../../assets/exclusive-games/icons/icon-nintendo-switch.svg";
import iconXbox from "../../assets/exclusive-games/icons/icon-xbox.svg";
import iconPlayStation from "../../assets/exclusive-games/icons/icon-play-station.svg";
import iconFourSquareBlue from "../../assets/exclusive-games/icons/four-square-blue.svg";

import { useViewportContext } from "../../context/ViewportContext";

const ExclusiveGamesHeader = () => {
  const { isViewportMinSm, isViewportMinLg } = useViewportContext();

  return (
    <div className="flex w-full max-w-[669px] items-end justify-between gap-[161px] pt-[57px] md:pt-[88px] xl:max-w-[1196px] xl:pt-[78px] 2xl:max-w-[1300px] 2xl:gap-[171px] 2xl:pt-[85px]">
      {isViewportMinLg && (
        <p className="mb-[3%] text-[15px] font-semibold uppercase leading-[22.5px] text-[#8F9199]">
          Games
        </p>
      )}
      <div className="mx-6 flex w-full items-end justify-between sm:mx-0">
        <p className="w-[175px] text-[28px] font-bold leading-[30.86px] text-white sm:text-[32px] sm:leading-[35.26px]">
          Jogos exclusivos
        </p>
        {isViewportMinSm && (
          <ul className="flex gap-6">
            <li>
              <img
                src={iconBattleNet}
                alt="icon-battle-net"
                className="h-[22px] w-[21.98px]"
              />
            </li>
            <li>
              <img
                src={iconNintendoSwitch}
                alt="icon-nintendo-switch"
                className="h-[22px] w-[21.98px]"
              />
            </li>
            <li>
              <img
                src={iconXbox}
                alt="icon-xbox"
                className="h-[22px] w-[21.98px]"
              />
            </li>
            <li>
              <img
                src={iconPlayStation}
                alt="icon-play-station"
                className="h-[22px] w-[21.98px]"
              />
            </li>
          </ul>
        )}
        <button className="flex items-center gap-[10px] border-none text-sm font-semibold leading-[21px] text-[#00AEFF] sm:text-base">
          <img src={iconFourSquareBlue} alt="icon-four-square" />
          <p>Ver todos jogos</p>
        </button>
      </div>
    </div>
  );
};

export default ExclusiveGamesHeader;
