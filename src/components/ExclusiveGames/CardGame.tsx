import { GameProps } from "../../types/gameType";

const CardGame = ({ name, category, image, logo }: GameProps) => {
  return (
    <button key={name} className="flex flex-col">
      <div className="flex flex-col items-center relative">
        <img
          src={image}
          alt={name}
          className="mb-[25.8px] w-[301px] h-[412.8px] rounded"
        />
        <img
          src={logo}
          alt={logo}
          className="w-[159.1px] h-[105.35px] bottom-[150px] absolute top-[267.68px]"
        />
      </div>
      <p className="font-semibold text-[19.35px] leading-[29.03px] text-[#E5E5E5]">
        {name}
      </p>
      <p className="font-normal text-[15.05px] leading-[22.58px] text-[#E5E5E5]">
        {category}
      </p>
    </button>
  );
};

export default CardGame;
