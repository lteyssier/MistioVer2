/* eslint-disable react/no-unknown-property */
//import React, { useRef } from "react";
import { GenerateInitMaterials, LoadAnimations } from "./Utils";
import gsap, { Power4 } from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";

export function Planet(props) {
    const colorsMaterial = {
        cristal: "#f0eded",
        black: "#000",
      };
  
    // eslint-disable-next-line no-unused-vars
    const screenWidth = screen.width
    const{cristalMaterial, oneMaterial} = GenerateInitMaterials(colorsMaterial)
    const scene = useThree(state => state.scene)
    const timeline = gsap.timeline({defaults: {duration:1, ease: Power4.easeInOut}})
    const scroll = useScroll()


    const { nodes, materials } = useGLTF("/plane_planet.glb"); 

    useLayoutEffect(()=>{
        const planetGroup = scene.getObjectByName('PlanetGroup')
        const animations  = LoadAnimations(scene, cristalMaterial,oneMaterial,colorsMaterial)
       
        timeline.to("#titles",{color:"#333333"},0)
        timeline.to("#titles",{color:"#333333"},1)
        timeline.to("#titles",{color:"#333333"},2)
        timeline.to("#titles",{filter: "invert(100%)"},3)
        timeline.to("#titles",{color: "invert(100%)"},4)
        timeline.to("#titles",{color: "invert(100%)"},5)

        timeline.to("#card_title_h1",{filter: "invert(100%)"}, 3.1)
        timeline.to("#text_body",{filter: "invert(100%)"}, 3.1)
        timeline.to("#text_body_list",{filter: "invert(100%)"}, 3.1)

        timeline.to("#title_projects",{opacity:"0"},0)
        screenWidth<811&&timeline.to("#title_projects",{translateY:"24rem"},6.4)
        timeline.to("#title_projects",{opacity:"1",filter:"invert(100%)"},6.4)
        timeline.to("#title_projects",{translateY:"0rem"},8)
        

        timeline.to( 
        planetGroup.rotation, 
            {
                y: -Math.PI*0.4
            },
            1
            );
        timeline.to( 
            planetGroup.rotation, 
            {
                y: -Math.PI*0.8
            },
            2
            );
        timeline.to( 
            planetGroup.rotation, 
            {
                y: -Math.PI*1.2
            },
            3
            );
        timeline.to( 
            planetGroup.rotation, 
            {
                y: -Math.PI*1.6
            },
            5
            );
        timeline.to( 
            planetGroup.rotation, 
            {
                y: -Math.PI*2
            },
            6.8
            )
            
        animations.map((animation) => {
            timeline.to(
                animation.target,
                {
                    ...animation.animationsProperties,
                },
                animation.pointTime
            )
        })
    },[])

    useFrame(() => {
        timeline.seek(scroll.offset * timeline.duration())
    })

  return (
    <group position={screenWidth>810?[0,-40,-57]:[0,-40,-90]} name="PlanetGroup" {...props} dispose={null}>
           <group rotation={[-Math.PI / 2, 0, 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["Combined_Mesh_(root__scene)_Default_OBJ_0"].geometry
            }
            material={materials.Default_OBJ}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["Combined_Mesh_(root__scene)_4_Default_OBJ001_0"].geometry
            }
            material={materials["Default_OBJ.001"]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["Combined_Mesh_(root__scene)_2_Default_OBJ003_0"].geometry
            }
            material={materials["Default_OBJ.003"]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes["Combined_Mesh_(root__scene)_3_Default_OBJ004_0"].geometry
            }
            material={materials["Default_OBJ.004"]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/plane_planet.glb");