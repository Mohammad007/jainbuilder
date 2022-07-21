import React from 'react';
import { Pannellum } from "pannellum-react";
import myImage from "./alma.jpg";

const Pannellum1 = () => {
  return (
    <Pannellum
        width="100%"
        height="100%"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
       
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
  )
}

export default Pannellum1