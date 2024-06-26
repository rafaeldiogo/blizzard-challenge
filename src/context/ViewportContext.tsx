import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ViewportContextProps = {
  viewportWidth: number;
  isViewportMinSm: boolean;
  isViewportMinMd: boolean;
  isViewportMinLg: boolean;
};

const ViewportContext = createContext<ViewportContextProps>({
  viewportWidth: 0,
  isViewportMinSm: true,
  isViewportMinMd: false,
  isViewportMinLg: false,
});

export function useViewportContext() {
  return useContext(ViewportContext);
}

export function ViewportProvider({ children }: Props) {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isViewportMinSm, setViewportMinSm] = useState(true);
  const [isViewportMinMd, setVViewportMinMd] = useState(false);
  const [isViewportMinLg, setViewportMinLg] = useState(false);

  const minSmWidth = 640;
  const minMdWidth = 768;
  const minLgWidth = 1280;

  const handleWindowResize = useCallback(() => {
    setViewportWidth(window.innerWidth);
    setViewportMinSm(window.innerWidth >= minSmWidth);
    setVViewportMinMd(window.innerWidth >= minMdWidth);
    setViewportMinLg(window.innerWidth >= minLgWidth);
  }, []);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  return (
    <ViewportContext.Provider
      value={{
        viewportWidth,
        isViewportMinSm,
        isViewportMinMd,
        isViewportMinLg,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
}
