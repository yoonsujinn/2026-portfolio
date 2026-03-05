import {useEffect, useState} from "react";

export function useMouseScroll() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const scroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return scrollY;
}
