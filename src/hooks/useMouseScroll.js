import {useEffect, useState} from "react";

export function useMouseScroll() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const scroll = (e) => {
      let scr = window.scrollY;
      console.log(scr, "eeee");
    };

    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return scrollY;
}
