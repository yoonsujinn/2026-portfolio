import {useEffect} from "react";

export function useCursorEffect() {
  useEffect(() => {
    const links = document.querySelectorAll("a,button");
    const mouseEle = document.querySelector(".mouseEle");

    const add = () => mouseEle?.classList.add("active");
    const remove = () => mouseEle?.classList.remove("active");

    links.forEach((link) => {
      link.addEventListener("mouseenter", add);
      link.addEventListener("mouseleave", remove);
    });

    //window밖으로 마우스 나가면 제거
    const windowOutCusor = (e) => {
      if (!e.relatedTarget) {
        mouseEle?.classList.add("remove");
      }
    };
    const windowOverCusor = () => {
      mouseEle?.classList.remove("remove");
    };
    window.addEventListener("mouseout", windowOutCusor);
    window.addEventListener("mouseover", windowOverCusor);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", add);
        link.removeEventListener("mouseleave", remove);
      });
      window.removeEventListener("mouseout", windowOutCusor);
      window.removeEventListener("mouseover", windowOverCusor);
    };
  }, []);
}
