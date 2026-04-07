import "../style/cursor.css";
import {useMousePosition} from "../hooks/useMousePosition";
import {useCursorEffect} from "../hooks/useCursorEffect";

const Cursor = () => {
  let pos = useMousePosition();
  useCursorEffect();
  return (
    <>
      <div
        className="mouseEle remove"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) 
          translate(-50%, -50%)`,
        }}></div>
    </>
  );
};
export default Cursor;
