import { useViewportContext } from "../../context/ViewportContext";

import { GameProps } from "../../types/gameType";

const CardGame = ({ name, category, image, logo }: GameProps) => {
  const { isViewportMinSm } = useViewportContext();

  return (
    <button key={name} className="flex w-fit flex-col gap-[25.8px]">
      <div className="relative flex flex-col items-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-[213.94px] w-[156px] rounded duration-300 hover:scale-[1.1] md:h-[276.64px] md:w-[201.72px] xl:h-[384px] xl:w-[280px] 2xl:h-[412.8px] 2xl:w-[301px]"
        />
        <img
          src={logo}
          alt={logo}
          className="absolute bottom-0 mb-[20.61px] h-[54.6px] w-[82.46px] md:mb-[31.7px] md:h-[70.6px] md:w-[106.62px] xl:mb-[44px] xl:h-[98px] xl:w-[148px] 2xl:mb-[47.3px] 2xl:h-[105.35px] 2xl:w-[159.1px]"
        />
      </div>
      {isViewportMinSm && (
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold leading-[29.03px] text-[#E5E5E5] 2xl:text-[19.35px]">
            {name}
          </p>
          <p className="text-sm font-normal leading-[22.58px] text-[#E5E5E5] 2xl:text-[15.05px]">
            {category}
          </p>
        </div>
      )}
    </button>
  );
};

export default CardGame;
