import React, { useState } from "react";
import { cageDiagram } from "../assets";
import { useAppState } from "../state/state";
import EndgameClimbMenu from "./EndgameClimbMenu";
import Button from "./inputs/Button";

const Endgame = () => {
  const [state, dispatch] = useAppState();

  return (
    <div className="flex flex-col xs:flex-row p-2 gap-2 h-full overflow-hidden">
      <Button
        color="blue"
        label={"Back"}
        className={"xs:min-w-1/12 h-[10%] xs:h-full"}
        onClick={() => dispatch({ type: "SET_PHASE", phase: "teleop" })}
      />
      <Button
        color="amber"
        label={state.endgame.park ? "Parked" : "Park?"}
        disabled={state.endgame.park}
        className={"min-w-1/6 h-[10%] xs:h-full"}
        onClick={() => {
          dispatch({
            type: "SET_IN_PHASE",
            phase: "endgame",
            payload: { park: true },
          });
        }}
      />
      {/* <img src={cageDiagram} className="max-h-full object-contain" /> */}
      <EndgameClimbMenu />
      <Button
        color="green"
        label={"Review"}
        className={"min-w-1/6 h-[10%] xs:h-full"}
        onClick={() => {
          dispatch({ type: "NEXT_MODE" });
        }}
      />
    </div>
  );
};

export default Endgame;
