import {useEffect, useRef} from "react";

export function useMousePosition() {
  const posRef = useRef({x: 0, y: 0});
  useEffect(() => {
    const mouseHandler = (e) => {
      posRef.current = {x: e.clientX, y: e.clientY};
    };
    window.addEventListener("mousemove", mouseHandler);
    console.log("리렌더링!!");

    return () => {
      window.addEventListener("mousemove", mouseHandler);
    };
  }, []);
  return posRef;
}
