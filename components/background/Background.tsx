import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

import { useTheme } from "next-themes";
import { PageProps } from "../../pages/_app";

const Background: FC<PageProps> = ({ mounted }) => {
  if (!mounted) return <></>;
  const { resolvedTheme } = useTheme();
  const [vantaEffect, setVantaEffect] = useState();
  useEffect(() => {
    const div = document.getElementById("bg");
    //@ts-ignore
    if (!vantaEffect)
      setVantaEffect(
        NET({
          el: div,
          //@ts-ignore
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1,
          scaleMobile: 1,
          color: resolvedTheme == "dark" ? 0xff3f81 : 0x6adc6a,
          backgroundColor: resolvedTheme == "dark" ? 0x0 : 0xffffff,
          points: 20.0,
          maxDistance: 27.0,
          spacing: 20.0,
        })
      );
    else {
      if (vantaEffect) {
        //@ts-ignore
        vantaEffect.setOptions({
          color: resolvedTheme == "dark" ? 0xff3f81 : 0x6adc6a,
          backgroundColor: resolvedTheme == "dark" ? 0x0 : 0xffffff,
        });
      }
    }
  }, [resolvedTheme]);
  return <></>;
};

export default Background;
