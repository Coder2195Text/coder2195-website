import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

import { useTheme } from "next-themes";
import { PageProps } from "../../pages/_app";

const Background: FC<PageProps> = ({ mounted }) => {
  if (!mounted) return <></>;
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const div = document.getElementById("bg");
    if (div) div.innerHTML = "";
    //@ts-ignore
    NET({
      el: div,
      //@ts-ignore
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 0.5,
      scaleMobile: 0.5,
      color: resolvedTheme == "dark" ? 0xff3f81 : 0xedc852,
      backgroundColor: resolvedTheme == "dark" ? 0x0 : 0xffffff,
      points: 20.0,
      maxDistance: 27.0,
      spacing: 18.0,
    });
  });
  return <></>;
};

export default Background;
