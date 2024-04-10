/* eslint-disable react/no-unknown-property */
//import React, { useRef } from "react";
import { GenerateInitMaterials, LoadAnimations } from "./Utils";
import gsap, { Power4 } from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { lerp } from "three/src/math/MathUtils";

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
        timeline.to("#titles",{color:"#333333"},0.5)
        timeline.to("#titles",{color:"#333333"},2)
        timeline.to("#titles",{filter: "invert(100%)"},3)
        timeline.to("#titles",{color: "invert(100%)"},4)
        timeline.to("#titles",{color: "invert(100%)"},5)

        timeline.to("#card_title_h1",{filter: "invert(100%)"}, 3.1)
        timeline.to("#text_body",{filter: "invert(100%)"}, 3.1)
        timeline.to("#text_body_list",{filter: "invert(100%)"}, 3.1)

        timeline.to("#title_projects1",{opacity:"0"},0)
        timeline.to("#title_projects1",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects1",{translateY:"14rem",translateX:"-12rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects1",{translateY:"14rem",translateX:"-12rem"},7)
        :timeline.to("#title_projects1",{translateY:"14rem",translateX:"-12rem"},7) 
        timeline.to("#title_projects1",{opacity:"1",filter:"invert(100%)"},7)

        timeline.to("#title_projects2",{opacity:"0"},0)
        timeline.to("#title_projects2",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects2",{translateY:"34rem",translateX:"-36rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects2",{translateY:"34rem",translateX:"-36rem"},7)
        :timeline.to("#title_projects2",{translateY:"34rem",translateX:"-36rem"},7) 
        timeline.to("#title_projects2",{opacity:"1",filter:"invert(100%)"},7)

        timeline.to("#title_projects3",{opacity:"0"},0)
        timeline.to("#title_projects3",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects3",{translateY:"34rem",translateX:"-12rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects3",{translateY:"34rem",translateX:"-12rem"},7)
        :timeline.to("#title_projects3",{translateY:"34rem",translateX:"-12rem"},7) 
        timeline.to("#title_projects3",{opacity:"1",filter:"invert(100%)"},7)

        timeline.to("#title_projects4",{opacity:"0"},0)
        timeline.to("#title_projects4",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects4",{translateY:"14rem",translateX:"12rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects4",{translateY:"14rem",translateX:"12rem"},7)
        :timeline.to("#title_projects4",{translateY:"14rem",translateX:"12rem"},7) 
        timeline.to("#title_projects4",{opacity:"1",filter:"invert(100%)"},7)

        timeline.to("#title_projects5",{opacity:"0"},0)
        timeline.to("#title_projects5",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects5",{translateY:"34rem",translateX:"12rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects5",{translateY:"34rem",translateX:"12rem"},7)
        :timeline.to("#title_projects5",{translateY:"34rem",translateX:"12rem"},7) 
        timeline.to("#title_projects5",{opacity:"1",filter:"invert(100%)"},7)

        timeline.to("#title_projects6",{opacity:"0"},0)
        timeline.to("#title_projects6",{translateY:"-4rem", translateX:"4rem"},0)
        screenWidth<810?
        timeline.to("#title_projects6",{translateY:"14rem",translateX:"-36rem"},7)
        :screenWidth<995? 
        timeline.to("#title_projects6",{translateY:"14rem",translateX:"-36rem"},7)
        :timeline.to("#title_projects6",{translateY:"14rem",translateX:"-36rem"},7) 
        timeline.to("#title_projects6",{opacity:"1",filter:"invert(100%)"},7)


        timeline.to( 
        planetGroup.rotation, 
            {
                y: -Math.PI*0.4
            },
            0.5
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
                y: -Math.PI*1.6,
            },
            6
            );
        timeline.to( 
            planetGroup.rotation, 
            {
                y: -Math.PI*2
                
            },
            9
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
        //timeline.seek(scroll.offset * timeline.duration())
        if(timeline){
            const targetValue = scroll.offset
            const currentValue = timeline.duration() * scroll.offset
            const interpolatedValue = lerp(currentValue, targetValue, 0.05)
            timeline.seek(interpolatedValue)
        }
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