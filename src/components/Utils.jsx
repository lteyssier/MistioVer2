import * as THREE from 'three'

// eslint-disable-next-line no-unused-vars
export const GenerateInitMaterials = (colorsMaterial) => {
    const cristalMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x8c8c8c,
        metalness:0.0,
        roughness:0.2,
        transparent: true,
        opacity:1,
        envMapIntensity:1.0,
        transmission:1
    })

    const oneMaterial = new THREE.MeshStandardMaterial({
        color: 0x000,
        roughness: 1,
        opacity: 1,
        metalness: 1,
        transparent: false,
      });
    
    return  {cristalMaterial, oneMaterial}
}

export const LoadAnimations = (scene)=> {
    const screenWidth = screen.width
    const Animations =[     

        {
           target: document.getElementById("bg_container"),
            pointTime: 1,
            animationsProperties: {
              background: "#c8d6d6fc",
            },
          },
        {
          target: document.getElementById("bg_container"),
           pointTime: 2,
           animationsProperties: {
             background: "#94a5a5fb",
           },
         },
         {
            target: document.getElementById("bg_container"),
             pointTime: 3,
             animationsProperties: {
               background: "#5f6868fa",
             },
           },
        {
         target: document.getElementById("bg_container"),
          pointTime: 5,
          animationsProperties: {
            background: "#404343f9",
          },
        },
        {
            target: document.getElementById("bg_container"),
             pointTime: 6,
             animationsProperties: {
               background: "#222222f8",
             },
        },
        {
            target: document.getElementById("Intro"),
            pointTime: 0,
            animationsProperties: {
              opacity: 0,
              left: "25%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Experience"),
            pointTime: 0,
            animationsProperties: {
              opacity: 0,
              left: "25%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Project"),
            pointTime: 0,
            animationsProperties: {
              opacity: 0,
              left: "25%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Intro"),
            pointTime: 1,
            animationsProperties: {
              opacity: 1,
              left: "25%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Intro"),
            pointTime: 1.9,
            animationsProperties: {
              opacity: 0,
              left: "25%",
              onUpdate: () => {},
            },
          },

          screenWidth >1080 ?
          { 
            target: document.getElementById("Experience"),
            pointTime: 2.1,
            animationsProperties: {
              opacity: 1,
              left: "85%",
              onUpdate: () => {},
            },
          }:
          { 
            target: document.getElementById("Experience"),
            pointTime: 2.1,
            animationsProperties: {
              opacity: 1,
              left: "25%",
              onUpdate: () => {},
            },
          }
          ,
          {
            target: document.getElementById("Experience"),
            pointTime: 2.9,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          screenWidth>810?
          {
            target: document.getElementById("ExperienceTitle"),
            pointTime: 3.1,
            animationsProperties: {
              opacity: 1,
              left: "20%",
              top:"-8rem",
              onUpdate: () => {},
            },
          }:
          {
            target: document.getElementById("ExperienceTitle"),
            pointTime: 3.1,
            animationsProperties: {
              opacity: 1,
              left: "75%",
              top:"-7rem",
              onUpdate: () => {}
          },
          },
          screenWidth>810?
          {
            target: document.getElementById("FirstJob"),
            pointTime: 3.1,
            animationsProperties: {
              opacity: 1,
              left: "25%",
              onUpdate: () => {},
            },
          }:
          {
            target: document.getElementById("FirstJob"),
            pointTime: 3.1,
            animationsProperties: {
              opacity: 1,
              left: "30%",
              onUpdate: () => {},
            },
          }
          ,
          screenWidth<811 && 
            {
                target: document.getElementById("FirstJob"),
                pointTime: 3.6,
                animationsProperties: {
                  opacity: 0,
                  left: "30%",
                  onUpdate: () => {},
                },
            }
          ,
          screenWidth>810?
          {
            target: document.getElementById("SecondJob"),
            pointTime: 3.7,
            animationsProperties: {
              opacity: 1,
              left: "50%",
              onUpdate: () => {},
            },
          }:
          {
            target: document.getElementById("SecondJob"),
            pointTime: 3.7,
            animationsProperties: {
              opacity: 1,
              left: "30%",
              onUpdate: () => {},
            },
          },
          screenWidth<811 && 
          {
              target: document.getElementById("SecondJob"),
              pointTime: 4.1,
              animationsProperties: {
                opacity: 0,
                left: "30%",
                onUpdate: () => {},
              },
          }
        ,
          screenWidth>810?
          {
            target: document.getElementById("ThirdJob"),
            pointTime: 4.1,
            animationsProperties: {
              opacity: 1,
              left: "75%",
              onUpdate: () => {},
            },
          }:{
            target: document.getElementById("ThirdJob"),
            pointTime: 4.3,
            animationsProperties: {
              opacity: 1,
              left: "30%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("ExperienceTitle"),
            pointTime: 4.9,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("FirstJob"),
            pointTime: 4.9,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("SecondJob"),
            pointTime: 4.9,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("ThirdJob"),
            pointTime: 4.9,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Project"),
            pointTime: 5.2,
            animationsProperties: {
              opacity: 1,
              left: "25%",
              onUpdate: () => {},
            },
          },
          screenWidth>810 &&
          {
            target: document.getElementById("Projects"),
            pointTime: 5.4,
            animationsProperties: {
              opacity: 1,
              left: "75%",
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Project"),
            pointTime: 6.5,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Projects"),
            pointTime: 6.5,
            animationsProperties: {
              opacity: 0,
              onUpdate: () => {},
            },
          },
          {
            target: document.getElementById("Contact"),
            pointTime: 7,
            animationsProperties: {
              opacity: 1,
              left: "25%",
              onUpdate: () => {},
            },
          },
          {
            target: scene.getObjectByName("GroupStars"),
            pointTime: 0,
            animationsProperties: {
              
              onUpdate: () => {},
            },
          }
    ]
    return Animations
}

   
