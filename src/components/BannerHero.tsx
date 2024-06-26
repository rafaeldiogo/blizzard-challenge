import { mapGamesIcon } from "../utils/mapGamesIcon";
import { mapBannerHeroes } from "../utils/mapBannerHeroes";

import useSlider from "../hooks/useSlider";

import { FaRegUser } from "react-icons/fa";
import clsx from "clsx";

import ProgressBar from "./ProgressBar";
import Button from "./Button";

const BannerHero = () => {
  const { activeSlide, progress, handleSlideChange } = useSlider({
    initialSlide: 0,
    slides: mapBannerHeroes,
  });

  const changeBackgroundBannerHeroe = [
    "bg-diabloiv",
    "bg-hearthstone",
    "bg-wow",
  ];

  return (
    <section
      className={clsx(
        `flex-col bg-cover flex items-center justify-between`,
        changeBackgroundBannerHeroe[activeSlide]
      )}
    >
      <div className="flex justify-center items-center h-[736px] w-full mt-[77px]">
        <div className="max-w-[1312.69px] w-full flex gap-[174px]">
          <ul className="flex flex-col text-white gap-5 pt-[68px]">
            {mapGamesIcon.map((content, index) => (
              <li key={content.icon} className="w-[48px] h-[48px]">
                <button
                  onClick={() => handleSlideChange(index)}
                  disabled={content.disabled}
                >
                  <img
                    src={content.icon}
                    alt={content.alt}
                    className={`${activeSlide === index ? "" : "opacity-40"}`}
                  />
                </button>
              </li>
            ))}
          </ul>
          {mapBannerHeroes.map((content, index) => (
            <div
              key={content.title}
              className={clsx(
                "text-white w-full flex max-w-[1105px] h-[475px] justify-between",
                activeSlide === index ? "" : "hidden"
              )}
            >
              <div
                className={clsx(
                  "flex flex-col gap-4 w-[562px] pt-[34px]",
                  index === 2 && "w-[626px]"
                )}
              >
                <p className="text-[64px] font-bold leading-[70.53px]">
                  {content.title}
                </p>
                <p className="text-lg font-normal leading-[27px] mb-4 -tracking-wider">
                  {content.subtitle}
                </p>
                <Button
                  variant="secondary"
                  className={clsx(
                    "py-[10px] px-[26.23px] w-[200px] gap-2",
                    index != 0 && "w-[331px]"
                  )}
                >
                  <FaRegUser size={24} />
                  <p>{content.textButton}</p>
                </Button>
              </div>
              <div className="flex h-full flex-col justify-between">
                <img
                  src={content.icon}
                  alt={content.alt}
                  className="w-[280px] h-[154px] relative left-5"
                />
                <div className="flex flex-col items-end gap-4">
                  <p className="font-semibold text-[13px] leading-[19.5px] uppercase">
                    Assista o trailer
                  </p>
                  <div className="relative group">
                    <div>
                      <img
                        src={content.previewGif}
                        alt={content.altPreviewGif}
                        className="w-[280px] h-[173px] group-hover:hidden"
                      />
                    </div>
                    <img
                      src={content.gif}
                      alt={content.altGif}
                      className="w-[280px] h-[173px] hidden group-hover:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProgressBar value={progress} />
    </section>
  );
};

export default BannerHero;
