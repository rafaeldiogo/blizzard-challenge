import { useState, useEffect } from "react";
import { BannerHeroItem } from "../utils/mapBannerHeroes";

interface UseSliderProps {
  initialSlide: number;
  slides: BannerHeroItem[];
  interval?: number;
}

const useSlider = ({
  initialSlide,
  slides,
  interval = 10000,
}: UseSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
    setAutoPlay(false);
  };

  useEffect(() => {
    let progressInterval: number | null = null;
    let slideInterval: number | null = null;

    const startTimer = () => {
      slideInterval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setProgress(0);
      }, interval);

      const updateInterval = 50;
      const steps = Math.floor(interval / updateInterval);

      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 100 / steps;
          return newProgress >= 100 ? 0 : newProgress;
        });
      }, updateInterval);
    };

    if (autoPlay) {
      startTimer();
    }

    return () => {
      if (slideInterval) clearInterval(slideInterval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [autoPlay, slides, interval]);

  useEffect(() => {
    if (!autoPlay) {
      setAutoPlay(true);
    }
  }, [activeSlide, autoPlay]);

  return {
    activeSlide,
    progress,
    handleSlideChange,
  };
};

export default useSlider;
