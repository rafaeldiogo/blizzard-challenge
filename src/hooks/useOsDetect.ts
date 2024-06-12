import { useEffect, useState } from "react";

export const useOS = () => {
  const [os, setOS] = useState<string>("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/Windows/i.test(userAgent)) {
      setOS("Windows");
    } else if (/Macintosh/i.test(userAgent)) {
      setOS("macOS");
    } else if (/Linux/i.test(userAgent)) {
      setOS("Linux");
    } else {
      setOS("Unknown");
    }
  }, []);

  return os;
};
