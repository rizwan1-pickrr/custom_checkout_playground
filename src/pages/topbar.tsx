import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function TopBar({ env, setEnv, ak, setAk, as, setAs }: any) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <img src="https://d10srchmli830n.cloudfront.net/1675425693942_3c3123bf-db2b-4444-8ad7-2d8a61af1150_fastrrFavIcon.png" className="h-8 me-3" alt="Logo" />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Custom Demo</span>
          </div>
          <div className="flex flex-row items-start">
            <input type="text" value={ak} onChange={(e) => setAk(e.target.value)} placeholder="Api Key" required className="form-primary w-auto" />
            <input type="password" value={as} onChange={(e) => setAs(e.target.value)} placeholder="Api Secret" required className="form-primary w-auto" />
            <select name="environment" value={env} onChange={(e) => setEnv(e.target.value)}
              className="form-primary w-auto"
            >
              <option value="dev">DEV</option>
              <option value="prod">PROD</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
