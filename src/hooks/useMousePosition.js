import {useEffect, useState, useRef} from "react";

export function useMousePosition() {
  const target = useRef({x: 0, y: 0}); // 실제 마우스 위치
  const [pos, setPos] = useState({x: 0, y: 0});

  useEffect(() => {
    const mouseHandler = (e) => {
      setPos({x: e.clientX, y: e.clientY});
    };

    window.addEventListener("mousemove", mouseHandler);
    return () => {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, []);

  return pos;
}
