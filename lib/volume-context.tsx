"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_VOLUME } from "@/content";

type VolumeContextValue = {
  vol: number;
  setVol: (v: number) => void;
  knobDeg: number;
};

const VolumeContext = createContext<VolumeContextValue | null>(null);

function clampVol(v: number) {
  return Math.max(0, Math.min(11, Math.round(v)));
}

export function knobDegFor(vol: number) {
  return -150 + (vol * 300) / 11;
}

export function VolumeProvider({ children }: { children: ReactNode }) {
  const [vol, setVolRaw] = useState(DEFAULT_VOLUME);

  const setVol = useCallback((v: number) => {
    setVolRaw(clampVol(v));
  }, []);

  const value = useMemo<VolumeContextValue>(
    () => ({ vol, setVol, knobDeg: knobDegFor(vol) }),
    [vol, setVol]
  );

  return <VolumeContext.Provider value={value}>{children}</VolumeContext.Provider>;
}

export function useVolume() {
  const ctx = useContext(VolumeContext);
  if (!ctx) throw new Error("useVolume must be used within a VolumeProvider");
  return ctx;
}
