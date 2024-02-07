import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { TILES } from "@/constants";
import ScriptLoader from "./scriptloader";
import CustomLogin from "./customlogin";
import CustomCheckout from "./customcheckout";

const inter = Inter({ subsets: ["latin"] });

function getCurrentTileData(cTileId: string) {
  return TILES.find((t) => cTileId == t.id)!;
}

export default function MainArea({ env, ak, as, cTileId }: any) {
  const ct = getCurrentTileData(cTileId);
  let ComponentToLoad;
  if (ct.id == 'login') {
    ComponentToLoad = <CustomLogin {...{ env, ak, as }} />
  } else if (ct.id == 'checkout') {
    ComponentToLoad = <CustomCheckout {...{ env, ak, as }} />
  } else {
    return <h1>Not implemented</h1>
  }
  return (
    <div className="p-4 ml-64 mt-20 w-full">
      <h1 className="text-4xl">{ct.name}</h1>
      {ComponentToLoad}
    </div>
  );
}
