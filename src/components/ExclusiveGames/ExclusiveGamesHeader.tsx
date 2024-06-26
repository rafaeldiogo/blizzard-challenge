import iconBattleNet from "../../assets/exclusive-games/icons/icon-battle-net.svg";
import iconNintendoSwitch from "../../assets/exclusive-games/icons/icon-nintendo-switch.svg";
import iconXbox from "../../assets/exclusive-games/icons/icon-xbox.svg";
import iconPlayStation from "../../assets/exclusive-games/icons/icon-play-station.svg";
import iconFourSquareBlue from "../../assets/exclusive-games/icons/four-square-blue.svg";

const ExclusiveGamesHeader = () => {
  return (
    <div className="flex w-full max-w-[1300px] justify-between items-end pt-[85px]">
      <div className="flex gap-[107px] mr-[183.23px]">
        <p className="uppercase text-[#8F9199] font-semibold text-[15px] leading-[22.5px] pt-[11px]">
          Games
        </p>
        <p className="font-bold text-[32px] leading-[35.26px] text-white w-[175px]">
          Jogos exclusivos
        </p>
      </div>
      <div className="flex justify-between w-full items-center">
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
        <button className="text-[#00AEFF] font-semibold text-base border-none gap-[10px] flex items-center">
          <img src={iconFourSquareBlue} alt="icon-four-square" />
          <p>Ver todos jogos</p>
        </button>
      </div>
    </div>
  );
};

export default ExclusiveGamesHeader;
