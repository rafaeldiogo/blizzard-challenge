import { useViewportContext } from "../../context/ViewportContext";

import { GameProps } from "../../types/gameType";

const CardGame = ({ name, category, image, logo }: GameProps) => {
  const { isViewportMinSm } = useViewportContext();

  return (
    <button key={name} className="flex flex-col w-fit gap-[25.8px]">
      <div className="flex flex-col items-center relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
          2xl:w-[301px] 2xl:h-[412.8px] 
          xl:w-[280px] xl:h-[384px] 
          md:w-[201.72px] md:h-[276.64px]
          w-[156px] h-[213.94px] rounded hover:scale-[1.1] duration-300"
        />
        <img
          src={logo}
          alt={logo}
          className="2xl:w-[159.1px] 2xl:h-[105.35px] xl:w-[148px] xl:h-[98px] md:w-[106.62px] md:h-[70.6px] w-[82.46px] h-[54.6px] absolute bottom-0 2xl:mb-[47.3px] xl:mb-[44px] md:mb-[31.7px] mb-[20.61px]"
        />
      </div>
      {isViewportMinSm && (
        <div className="flex flex-col items-start">
          <p className="font-semibold 2xl:text-[19.35px] text-lg leading-[29.03px] text-[#E5E5E5]">
            {name}
          </p>
          <p className="font-normal 2xl:text-[15.05px] text-sm leading-[22.58px] text-[#E5E5E5]">
            {category}
          </p>
        </div>
      )}
    </button>
  );
};

export default CardGame;
