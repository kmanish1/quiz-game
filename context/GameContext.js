"use client";

import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [stage, setStage] = useState(1);

  const advanceStage = () => setStage((prevStage) => prevStage + 1);

  return (
    <GameContext.Provider value={{ stage, advanceStage }}>
      {children}
    </GameContext.Provider>
  );
}
