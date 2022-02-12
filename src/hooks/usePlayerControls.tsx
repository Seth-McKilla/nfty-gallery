import { useEffect, useState } from "react";

const keys: { [key: string]: string } = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump",
};

export default function usePlayerControls() {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });
  useEffect(() => {
    const handleKeyDown = (code: string) => {
      return setMovement((m) => ({ ...m, [keys[code]]: true }));
    };

    const handleKeyUp = (code: string) => {
      return setMovement((m) => ({ ...m, [keys[code]]: false }));
    };

    document.addEventListener("keydown", (e) => handleKeyDown(e.code));
    document.addEventListener("keyup", (e) => handleKeyUp(e.code));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e.code));
      document.removeEventListener("keyup", (e) => handleKeyUp(e.code));
    };
  }, []);

  return movement;
}
