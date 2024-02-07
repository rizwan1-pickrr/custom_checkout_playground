import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import TopBar from "./topbar";
import { TILES } from "@/constants";
import MainArea from "./mainarea";
import SideBar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  let [env, setEnv] = useState("dev");
  let [ak, setAk] = useState("");
  let [as, setAs] = useState("");
  let [cTileId, setCTileId] = useState(TILES[0].id);
  return (
    <main
      className={`flex flex-row ${inter.className}`}
    >
      <TopBar {...{ env, setEnv, ak, setAk, as, setAs }} />
      <SideBar {...{cTileId, setCTileId}} />
      <MainArea {...{cTileId, env, ak, as}}/>
    </main>
  );
}
