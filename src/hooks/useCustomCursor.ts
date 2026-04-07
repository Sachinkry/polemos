import { useEffect, useRef } from "react";

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const handleMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      setTimeout(() => {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }, 80);

      const interactive = (e.target as HTMLElement | null)?.closest(
        "a, button, input, textarea",
      );
      ring.classList.toggle("is-interactive", Boolean(interactive));
    };

    const handleLeave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleEnter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseover", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseover", handleEnter);
    };
  }, []);

  return { cursorRef, ringRef };
}
