/* eslint-disable react/no-unknown-property */
import { useScroll } from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import gsap, { Power4 } from "gsap";
import { useLayoutEffect} from "react"
import * as THREE from 'three'
import { lerp } from "three/src/math/MathUtils";
import { LoadAnimations } from "./Utils";
import cafe from "../assets/cafe.png"
import dashboard from "../assets/dashboard.png"
import f1tracks from "../assets/f1tracks.png"
import game from "../assets/game.png"
import maphex from "../assets/maphex.png"
import shadermusic from "../assets/shadermusic.png"

const Portals = () => {
  const texture1 = useLoader(THREE.TextureLoader, cafe)
  const texture2 = useLoader(THREE.TextureLoader, maphex)
  const texture3 = useLoader(THREE.TextureLoader, dashboard)
  const texture4 = useLoader(THREE.TextureLoader, game)
  const texture5 = useLoader(THREE.TextureLoader, f1tracks)
  const texture6 = useLoader(THREE.TextureLoader, shadermusic)

  const scene = useThree(state => state.scene)
    const timeline = gsap.timeline({defaults: {duration:1, ease: Power4.easeInOut}})
    const scroll = useScroll()

   useLayoutEffect(()=>{
    const frame1 = scene.getObjectByName('frame1')
    const frame2 = scene.getObjectByName('frame2')
    const frame3 = scene.getObjectByName('frame3')
    const frame4 = scene.getObjectByName('frame4')
    const frame5 = scene.getObjectByName('frame5')
    const frame6 = scene.getObjectByName('frame6')
    const animations  = LoadAnimations(scene)

    timeline.to(
      frame1.rotation,
        {
          x:Math.PI/2
        },
        7
    )
    timeline.to(
      frame2.rotation,
        {
          x:Math.PI/2
        },
        7
    )
    timeline.to(
      frame3.rotation,
        {
          x:Math.PI/2
        },
        7
    )
    timeline.to(
      frame4.rotation,
        {
          x:Math.PI/2
        },
        7
    )
    timeline.to(
      frame5.rotation,
        {
          x:Math.PI/2
        },
        7
    )
    timeline.to(
      frame6.rotation,
        {
          x:Math.PI/2
        },
        7
    )

    timeline.to(
      frame1.rotation,
        {
          x:Math.PI/4
        },
        9
    )
    timeline.to(
      frame2.rotation,
        {
          x:Math.PI/4
        },
        9
    )
    timeline.to(
      frame3.rotation,
        {
          x:Math.PI/4
        },
        9
    )
    timeline.to(
      frame4.rotation,
        {
          x:Math.PI/6
        },
        9
    )
    timeline.to(
      frame5.rotation,
        {
          x:Math.PI/6
        },
        9
    )
    timeline.to(
      frame6.rotation,
        {
          x:Math.PI/6
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
     <>
      <mesh name="frame1" scale={8} rotation={[4,0,0]} position={[0,0,50]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture1} opacity={0.5}  />
      </mesh>  
      <mesh name="frame2" scale={8} rotation={[4,0,0]} position={[130,0,50]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture2} opacity={0.5}  />
      </mesh>
      <mesh name="frame3" scale={8} rotation={[4,0,0]} position={[-130,0,50]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture3} opacity={0.5}  />
      </mesh>
      <mesh name="frame4" scale={8} rotation={[-1,0,0]} position={[130,0,-60]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture4} opacity={0.5}  />
      </mesh>
      <mesh name="frame5" scale={8} rotation={[-1,0,0]} position={[-130,0,-60]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture5} opacity={0.5}  />
      </mesh>
      <mesh name="frame6" scale={8} rotation={[-1,0,0]} position={[0,0,-60]}>
        <planeGeometry attach={"geometry"} args={[12,10]} />
        <meshBasicMaterial attach={"material"} map={texture6} opacity={0.5}  />
      </mesh>      
     </>
    )
}

export default Portals