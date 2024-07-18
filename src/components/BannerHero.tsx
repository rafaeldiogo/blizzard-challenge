import { mapGamesIcon } from "../utils/mapGamesIcon";
import { mapBannerHeroes } from "../utils/mapBannerHeroes";

import useSlider from "../hooks/useSlider";

import { FaRegUser } from "react-icons/fa";
import clsx from "clsx";

import { useViewportContext } from "../context/ViewportContext";

import ProgressBar from "./ProgressBar";
import Button from "./Button";

const BannerHero = () => {
  const { isViewportMinMd, isViewportMinLg } = useViewportContext();

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
        `flex flex-col items-center bg-cover`,
        changeBackgroundBannerHeroe[activeSlide],
      )}
    >
      <div className="flex w-full max-w-[323px] items-center justify-between pt-8 md:max-w-[646px] xl:flex xl:max-w-[1312.69px] xl:items-center xl:justify-between xl:pt-[96px]">
        <div className="flex w-full flex-col-reverse pb-[62px] pt-[96px] md:pb-[83px] xl:flex xl:flex-row xl:gap-[174px] xl:pt-[77px]">
          {isViewportMinLg && (
            <ul className="flex w-fit flex-col gap-5 pt-[68px]">
              {mapGamesIcon.map((content, index) => (
                <li key={content.icon} className="h-[48px] w-[48px]">
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
          )}

          {mapBannerHeroes.map((content, index) => (
            <div
              key={content.title}
              className={clsx(
                "h-fit w-full text-white",
                activeSlide === index ? "" : "hidden",
              )}
            >
              <div className="flex flex-col gap-[19px]">
                <div className="relative flex">
                  <p className="max-w-[283px] text-[40px] font-bold leading-[44.08px] md:max-w-[626px] md:pt-[62px] md:text-[64px] md:leading-[70.53px] xl:pt-[32px]">
                    {content.title}
                  </p>
                  {isViewportMinMd && (
                    <>
                      {mapBannerHeroes.map((content, index) => (
                        <div
                          key={content.title}
                          className={clsx(
                            "absolute -end-8",
                            activeSlide === index ? "" : "hidden",
                          )}
                        >
                          <div className="flex h-[154px] w-[280px] flex-col gap-[174px] xl:flex xl:flex-col xl:justify-between xl:gap-[112px]">
                            <img src={content.icon} alt={content.alt} />
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="flex w-full justify-between">
                  <div className="h-fit w-fit">
                    <p className="mb-8 text-lg font-normal leading-[27px] -tracking-wider">
                      {content.subtitle}
                    </p>
                    <Button
                      variant="secondary"
                      className={clsx(
                        "mb-12 gap-2 px-[26.23px] py-[10px] md:mb-[53px]",
                        index != 0 && "max-w-[331px]",
                      )}
                    >
                      <FaRegUser size={24} />
                      <p>{content.textButton}</p>
                    </Button>
                    {!isViewportMinLg && (
                      <ul className="flex w-fit gap-4 md:gap-5">
                        {mapGamesIcon.map((content, index) => (
                          <li key={content.icon} className="h-[48px] w-[48px]">
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
                    )}
                  </div>
                  <div
                    className={clsx(
                      "flex flex-col items-end gap-4",
                      !isViewportMinLg && "pt-[46px]",
                    )}
                  >
                    {isViewportMinLg && (
                      <p className="text-[13px] font-semibold uppercase leading-[19.5px]">
                        Assista o trailer
                      </p>
                    )}
                    {isViewportMinMd && (
                      <div className="group relative">
                        <div>
                          <img
                            src={content.previewGif}
                            alt={content.altPreviewGif}
                            className="h-[173px] w-[280px] group-hover:hidden"
                          />
                        </div>
                        <img
                          src={content.gif}
                          alt={content.altGif}
                          className="hidden h-[173px] w-[280px] group-hover:block"
                        />
                      </div>
                    )}
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
