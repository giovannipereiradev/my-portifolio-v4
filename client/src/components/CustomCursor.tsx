import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { ArrowUpRight } from "lucide-react";

type CursorState = "off" | "default" | "hovered";

const LERP = 0.1;

export default function CustomCursor() {
  const isMobile = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("off");

  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasFirstMove = false;
    let rafId: number;
    let currentState: CursorState = "off";

    function getHoverState(x: number, y: number): CursorState {
      const els = document.elementsFromPoint(x, y);
      for (const el of els) {
        if (el === wrapper || wrapper.contains(el)) continue;
        const htmlEl = el as HTMLElement;
        if (htmlEl.dataset?.cursorStyle === "hovered") return "hovered";
        const tag = el.nodeName.toLowerCase();
        if (tag === "a" || tag === "button") return "hovered";
        if (htmlEl.classList?.contains("cursor-pointer")) return "hovered";
      }
      return "default";
    }

    function tick() {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      wrapper!.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(tick);
    }

    function onMouseMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasFirstMove) {
        hasFirstMove = true;
        currentX = targetX;
        currentY = targetY;
      }

      const next = getHoverState(e.clientX, e.clientY);
      if (next !== currentState) {
        currentState = next;
        setState(next);
      }
    }

    function onMouseOut(e: MouseEvent) {
      if (!e.relatedTarget && !(e as any).toElement) {
        currentState = "off";
        setState("off");
      }
    }

    rafId = requestAnimationFrame(tick);
    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div ref={wrapperRef} className={`cursor-wrapper cursor--${state}`}>
      <div className="cursor-ball">
        <ArrowUpRight
          className="cursor-icon"
          size={18}
          strokeWidth={2.5}
          color="white"
        />
      </div>
    </div>
  );
}
