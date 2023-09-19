
export default function Label() {
    const cards = [
      {
        id: "Intro",
        title: "Introduction",
        subheader: "",
        description: `I'm a developer starting in the industry with different skills. I'm a quick learner and my experience on different jobs gave me the skills to understand the demands from clients.`,
        ml: "I like to develop:",
        points: ["Web", "Data Science", "Data Visualization"," ", " "," ", " ", " "],
        links:[]
      },
      {
        id: "Experience",
        title: "Skills",
        subheader: "",
        description: `I'm constantly learning and using new libraries, it motivates me to bring alive new ideas `,
        ml: "Main skills",
        points: ["HTML", "JS", "CSS","React","ThreeJs", "D3"],
        links:[""]
      },
      {
        id: "Project",
        title: "My work",
        subheader: "",
        description: `The following projects showcase my skills and experience through real-world examples of my work.`,
        ml: " ",
        points: [" "," ", " "," ", " ", " "," ", " "," "," "," ", " "," "," "],
        links:[""]
      },
      {
        id: "Projects",
        title: "",
        subheader: "",
        description: ``,
        ml: "My projects",
        points: ["Café Perdido","< React, Tailwind >", "Mueblerías Navarro","< Remix run, Strapi >", "Crea tu mapa", "< JS, D3 >", " "," "," "," ", " "," "," ", " "," "," "," ", " "," "," "],
        links:["https://cafeperdido.com/","https://github.com/lteyssier/MueblesNavarro", "https://affectionate-kilby-0890a8.netlify.app/"]
      },
      {
        id: "Contact",
        title: "Contact",
        subheader: "LuisTeyssier@lteyssier.dev",
        description: ``,
        ml: "",
        points: [""," ", " "," ", " ", " "," ", " "," "," ", " "," ", " ", " "," ", " "," "],
        links:[""]
      },
      {
        id: "Bye",
        title: "",
        subheader: "",
        description: ``,
        ml: "",
        points: [""," ", " "," ", " ", " "," ", " "," "," ", " "," ", " ", " "," ", " "," "],
        links:[""]
      },
    ];
  
    return (
      <div className={"labels_container"}>
        <div className={"labels_wrapper"}>
          {cards.map((card) => (
            <div id={card.id} key={card.id} className={"label_card label_card--hidden"}>
              <div className="card_secc_one">
                <h1 id="card_title_h1" className={"text_header"}>{card.title}</h1>
                <p className={"text_subheader"}>{card.subheader}</p>
                <p id="text_body" className={"text_body"}>{card.description}</p>
              </div>
              <div className="card_secc_two">
              <div>
                <h1 className={"text_subheader"}>{card.ml}</h1>
              </div>
                <ul>
                  {card.points.map((point, index) => {

                    if (index === card.points.lenght) {
                      return (
                        <li key={index} id="text_item_des" className='text_item_des'>
                          <p className={"text_body text_item_des text_item_des_border_top text_item_des_border_bottom"}>
                            {point}
                          </p>
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} id="text_body_list" className={"text_body text_item_des text_item_des_border_top"}>
                          <p>{point}</p>
                         </li>
                      );
                    }

                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }