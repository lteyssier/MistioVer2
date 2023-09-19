
export default function ExpLabel() {
    const cards = [
      {
         id: "ExperienceTitle",
         title: "",
         subheader: "Experience",
         description: ``,
         ml: "",
         points: [
             ""],
       },
      {
        id: "FirstJob",
        title: "Data mining",
        subheader: "Consultant",
        description: ``,
        ml: "",
        points: [
            "Manage client data, utilize Postgres and Data Warehouses, implement mathematical models for business strategies."],
      },
      {
        id: "SecondJob",
        title: "Data Scientist",
        subheader: "Ministry of Economics",
        description: ``,
        ml: "",
        points: ["Economic data analysis, database management, web app development, IT collaboration for web strategies, and data visualization"
            ],
      },
      {
        id: "ThirdJob",
        title: "Frontend",
        subheader: "Freelance",
        description: ``,
        ml: "",
        points: ["React.js web app development, responsive design, business management strategies, and science data visualizations."
            ],
      },
    ];
  
    return (
      <div className={"labels_container_exp"}> 
        <div className={"labels_wrapper_exp"}>
          {cards.map((card) => (
            <div id={card.id} key={card.id} className={"label_card_exp label_card_exp--hidden"}>
              <div>
                <h1 id="card_title_h1_exp" className={"text_header_exp"}>{card.title}</h1>
                <p className={"text_subheader_exp"}>{card.subheader}</p>
                <p className={"text_body_exp"}>{card.description}</p>
              </div>
              <div>
                <h1 className={"text_subheader_exp"}>{card.ml}</h1>
              </div>
              <div>
                <ul>
                  {card.points.map((point, index) => {
                    if (index === card.points.lenght) {
                      return (
                        <li key={index} className='text_item_des_exp'>
                          <p className={"text_body_exp text_item_des_exp text_item_des_border_top_exp text_item_des_border_bottom_exp"}>
                            {point}
                          </p>
                          
                        </li>
                      );
                    } else {
                      return (
                        <li key={index} className={"text_body_exp text_item_des_exp text_item_des_border_top_exp"}>
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