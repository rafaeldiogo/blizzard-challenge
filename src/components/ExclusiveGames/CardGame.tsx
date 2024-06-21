import { GameProps } from "../../types/gameType";

const CardGame = ({ name, category, image, logo }: GameProps) => {
  return (
    <button key={name} className="flex flex-col gap-[25.8px]">
      <div className="flex flex-col items-center relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-[301px] h-[412.8px] rounded hover:scale-[1.1] duration-300"
        />
        <img
          src={logo}
          alt={logo}
          className="w-[159.1px] h-[105.35px] bottom-[150px] absolute top-[267.68px]"
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="font-semibold text-[19.35px] leading-[29.03px] text-[#E5E5E5]">
          {name}
        </p>
        <p className="font-normal text-[15.05px] leading-[22.58px] text-[#E5E5E5]">
          {category}
        </p>
      </div>
    </button>
  );
};

export default CardGame;
