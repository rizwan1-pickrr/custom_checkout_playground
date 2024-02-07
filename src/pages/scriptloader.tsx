import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { TILES } from "@/constants";
import { hmacInBase64, getUrls } from "./utils";

const inter = Inter({ subsets: ["latin"] });

export default function ScriptLoader({env}: any) {
  // Load JS
  useEffect(() => {
    const script = document.createElement('script');
    script.src = getUrls(env, "js");
    script.async = false;
    document.body.appendChild(script);
    console.log("Added: ", script);
    return () => {
    console.log("Removed: ", script);
      document.body.removeChild(script);
    };
  }, [env]);

  // Load CSS
  useEffect(() => {
    const link = document.createElement('link');
    link.href = getUrls(env, "css");
    link.rel = "stylesheet"
    document.head.appendChild(link);
    console.log("Added: ", link);
    return () => {
    console.log("Removed: ", link);
      document.head.removeChild(link);
    };
  }, [env]);
  return null;
}
