import {useEffect} from "react";

export function useCursorEffect() {
  useEffect(() => {
    const links = document.querySelectorAll("a,button,.contectBottom");
    const mouseEle = document.querySelector(".mouseEle");

    const add = () => mouseEle?.classList.add("active");
    const remove = () => mouseEle?.classList.remove("active");
    console.log(links, "links");

    links.forEach((link) => {
      link.addEventListener("mouseenter", add);
      link.addEventListener("mouseleave", remove);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", add);
        link.removeEventListener("mouseleave", remove);
      });
    };
  }, []);
}
