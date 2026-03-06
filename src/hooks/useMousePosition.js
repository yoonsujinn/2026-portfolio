import {useEffect, useState} from "react";

export function useMousePosition() {
  const [pos, setPos] = useState({x: 0, y: 0});

  useEffect(() => {
    const mouseHandler = (e) => {
      console.log("useMousePosition");
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return pos;
}
