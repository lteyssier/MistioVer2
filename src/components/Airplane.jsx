/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



export function Airplane(props) {

  const planeRef = useRef()
  const { nodes, materials } = useGLTF("/airplane.glb");
  const widthRadius = 10
  const heightRadius = 10
  const screenWidth = screen.width

  useFrame(({clock})=>{
    const timer = clock.getElapsedTime()*0.9
    planeRef.current.position.z = screenWidth>810? 50+ Math.cos(timer) * widthRadius : 0+ Math.cos(timer) * widthRadius
    planeRef.current.position.x = Math.cos(timer) * heightRadius + heightRadius
    planeRef.current.position.y = Math.sin(timer)
    planeRef.current.rotation.z = Math.sin(timer)
    planeRef.current.rotation.y = Math.sin(timer)/2
    planeRef.current.rotation.z = Math.sin(timer)/2
  })

  return (
    <group ref={planeRef} name="AirplaneGruop"  {...props} dispose={null}  position={ [-30,80,40]}>
      <group rotation={[1, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.initialShadingGroup}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/airplane.glb");