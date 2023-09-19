/* eslint-disable react/no-unknown-property */
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const screenWidth = screen.width
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(4000), { radius: 10 }));
  
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    });
  
    return (
      <group position={screenWidth>820 ? [0,-180,0] : [0, -240, 0]} rotation={[0, 0, Math.PI / 3]}>
        <Points name="GroupStars" ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='#e9eeeefd'
            size={0.018}
            sizeAttenuation={true}
            depthWrite={false}
            name={"colorStar"}
            />
        </Points>
      </group>
    );
  };
  
export default Stars;