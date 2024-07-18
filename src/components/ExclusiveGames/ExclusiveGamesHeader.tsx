import iconBattleNet from "../../assets/exclusive-games/icons/icon-battle-net.svg";
import iconNintendoSwitch from "../../assets/exclusive-games/icons/icon-nintendo-switch.svg";
import iconXbox from "../../assets/exclusive-games/icons/icon-xbox.svg";
import iconPlayStation from "../../assets/exclusive-games/icons/icon-play-station.svg";
import iconFourSquareBlue from "../../assets/exclusive-games/icons/four-square-blue.svg";

import { useViewportContext } from "../../context/ViewportContext";

const ExclusiveGamesHeader = () => {
  const { isViewportMinSm, isViewportMinLg } = useViewportContext();

  return (
    <div className="flex w-full 2xl:gap-[171px] gap-[161px] 2xl:max-w-[1300px] xl:max-w-[1196px] max-w-[669px] justify-between items-end 2xl:pt-[85px] xl:pt-[78px] md:pt-[88px] pt-[57px]">
      {isViewportMinLg && (
        <p className="uppercase text-[#8F9199] font-semibold text-[15px] leading-[22.5px] mb-[3%]">
          Games
        </p>
      )}
      <div className="flex justify-between w-full items-end sm:mx-0 mx-6">
        <p className="font-bold sm:text-[32px] text-[28px] leading-[30.86px] sm:leading-[35.26px] text-white w-[175px]">
          Jogos exclusivos
        </p>
        {isViewportMinSm && (
          <ul className="flex gap-6">
            <li>
              <img
                src={iconBattleNet}
                alt="icon-battle-net"
                className="w-[21.98px] h-[22px]"
              />
            </li>
            <li>
              <img
                src={iconNintendoSwitch}
                alt="icon-nintendo-switch"
                className="w-[21.98px] h-[22px]"
              />
            </li>
            <li>
              <img
                src={iconXbox}
                alt="icon-xbox"
                className="w-[21.98px] h-[22px]"
              />
            </li>
            <li>
              <img
                src={iconPlayStation}
                alt="icon-play-station"
                className="w-[21.98px] h-[22px]"
              />
            </li>
          </ul>
        )}
        <button className="text-[#00AEFF] font-semibold sm:text-base text-sm leading-[21px] border-none gap-[10px] flex items-center">
          <img src={iconFourSquareBlue} alt="icon-four-square" />
          <p>Ver todos jogos</p>
        </button>
      </div>
    </div>
  );
};

export default ExclusiveGamesHeader;
