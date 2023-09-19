/* eslint-disable react/no-unknown-property */
import { Planet } from "./Planet";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { Canvas} from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Stars from "./Stars";
import { Suspense } from "react";
import CanvasLoader from "./Loader";


export default function Scene() {
  const screenWidth = screen.width
  return (
    <div className={"container-3d"}>
        <Canvas className="canvas" pointerEvents={"none"} camera={screenWidth>820 ? {position:[0,-180,0]} : {position:[0, -240, 0]}}>
         <Suspense fallback={<CanvasLoader/>}>
            <ambientLight name="ambientLight" className={"ambientLight"} intensity={-0.3} color={0xF5F5F5}/>
            <ScrollControls pages={7} damping={0.1}>
            <Stars/>
            <Airplane/>
            <Planet/>
            </ScrollControls>
            <OrbitControls enableTouchScroll={true} target0={[0,2,0]} enableZoom={false} enableRotate={false}/>
            <Environment preset="studio" />
         </Suspense>
            <Preload all/>
        </Canvas>
    </div>
    
  )
}
