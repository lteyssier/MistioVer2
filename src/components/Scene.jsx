/* eslint-disable react/no-unknown-property */
import { Planet } from "./Planet";
import { Environment,  ScrollControls } from "@react-three/drei";
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
        <Canvas className="canvas"  camera={screenWidth>820 ? {position:[0,-180,0]} : {position:[0, -240, 0]}}>
         <Suspense fallback={<CanvasLoader/>}>
            <ambientLight name="ambientLight" className={"ambientLight"} intensity={-0.3} color={0xF5F5F5}/>
            <ScrollControls pages={8} damping={0.1}>
            <Stars/>
            <Airplane/>
            <Planet/>
            </ScrollControls>
            <Environment preset="studio" />
         </Suspense>
            <Preload all/>
        </Canvas>
    </div>
    
  )
}
