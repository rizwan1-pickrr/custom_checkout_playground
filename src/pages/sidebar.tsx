import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { TILES } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export default function SideBar({ cTileId, setCTileId}: any) {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r  sm:translate-x-0 bg-gray-800 border-gray-700" aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          {TILES.map((t: any) => {
            let isSelected = (t.id == cTileId);
            if (isSelected) {
              return <li key={t.id}><div className="border-l-2">
                {makeSideBarItem(t, setCTileId)}
              </div>
              </li>
            } else {
              return <li key={t.id}>
                {makeSideBarItem(t, setCTileId)}
              </li>
            }
          })}

        </ul>
      </div>
    </aside>
  );

  function makeSideBarItem(t: any, setCTileId: any) {
    return <a href="#" onClick={(e) => setCTileId(t.id)} className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
      <span className="ms-3">{t.name}</span>
    </a>;
  }
}
