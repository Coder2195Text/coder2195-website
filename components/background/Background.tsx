import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";
//@ts-ignore
import NET from "vanta/dist/vanta.net.min";

const Background: FC = () => {
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
          color: 0xff3f81,
          backgroundColor: 0x0,
          points: 20.0,
          maxDistance: 27.0,
          spacing: 20.0,
        })
      );
  });
  return <></>;
};

export default Background;
