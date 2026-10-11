"use client";

import { useCallback, useEffect, useRef } from "react";
import { useVolume } from "@/lib/volume-context";
import { volumeMessages } from "@/content";

function angleFromPointer(rect: DOMRect, clientX: number, clientY: number) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const a = (Math.atan2(clientX - cx, -(clientY - cy)) * 180) / Math.PI;
  return Math.max(-150, Math.min(150, a));
}

export function VolumeKnob() {
  const { vol, setVol, knobDeg } = useVolume();
  const dialRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const setFromAngle = useCallback(
    (deg: number) => setVol(((deg + 150) / 300) * 11),
    [setVol]
  );

  const fromPointer = useCallback(
    (e: { clientX: number; clientY: number }) => {
      const el = dialRef.current;
      if (!el) return;
      const deg = angleFromPointer(el.getBoundingClientRect(), e.clientX, e.clientY);
      setFromAngle(deg);
    },
    [setFromAngle]
  );

  useEffect(() => {
    const el = dialRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setVol(vol + (e.deltaY < 0 ? 1 : -1));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [vol, setVol]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    fromPointer(e);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) fromPointer(e);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setVol(vol + 1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setVol(vol - 1);
    }
  };

  const ticks = Array.from({ length: 12 }, (_, n) => {
    const deg = -150 + (n * 300) / 11;
    const big = n === 11;
    const color = big ? "var(--acc)" : n <= vol ? "#fff" : "#555";
    return {
      n,
      deg,
      neg: -deg,
      color,
      top: big ? "-88px" : "-80px",
      len: big ? "24px" : "12px",
      w: big ? "4px" : "2px",
    };
  });

  const volLabel = String(vol).padStart(2, "0");
  const volColor = vol === 11 ? "var(--acc)" : "#fff";

  return (
    <>
      <div
        ref={dialRef}
        tabIndex={0}
        role="slider"
        aria-label="Volume"
        aria-valuemin={0}
        aria-valuemax={11}
        aria-valuenow={vol}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        className="relative flex-none rounded-full"
        style={{ width: 190, height: 190, cursor: "grab", touchAction: "none", userSelect: "none" }}
      >
        {ticks.map((t) => (
          <div
            key={t.n}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${t.deg}deg)` }}
          >
            <div
              className="absolute"
              style={{
                left: "-0.5px",
                top: t.top,
                width: t.w,
                height: t.len,
                background: t.color,
              }}
            />
            <div
              className="absolute text-center text-[11px] font-medium leading-[14px]"
              style={{
                left: -14,
                top: -96,
                width: 28,
                height: 14,
                color: t.color,
                transform: `rotate(${t.neg}deg)`,
              }}
            >
              {t.n}
            </div>
          </div>
        ))}

        <div
          className="absolute rounded-full transition-transform duration-[120ms]"
          style={{
            left: 40,
            top: 40,
            width: 110,
            height: 110,
            background: "var(--knob-disc)",
            boxShadow: "0 14px 34px rgba(0,0,0,.7)",
            transform: `rotate(${knobDeg}deg)`,
          }}
        >
          <div
            className="absolute rounded"
            style={{ left: 51, top: 9, width: 8, height: 34, borderRadius: 4, background: "var(--acc)" }}
          />
          <div
            className="absolute rounded-full"
            style={{ inset: 24, border: "2px solid var(--knob-ring)" }}
          />
        </div>
      </div>

      <div className="flex w-[200px] flex-none flex-col gap-2">
        <span className="text-xs">Output level</span>
        <span
          className="font-archivo font-black tabular-nums"
          style={{ fontSize: 76, lineHeight: 0.82, letterSpacing: "-0.04em", color: volColor }}
        >
          {volLabel}
        </span>
        <span className="text-[14px] leading-[1.3] text-pretty">{volumeMessages[vol]}</span>
      </div>
    </>
  );
}
