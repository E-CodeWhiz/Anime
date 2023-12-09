
const works = [ 
    {
        name: "Trese",
        description:
            `A healer-warrior who serves as a protector of humanity from supernatural beings from the underworld.
            Soberano, more known for doing live action roles, was initially hesitant on doing the role of
            Alexandra remarking that "voice acting is a different game from acting".[10] In contrast to dubbing
            her own films and commercials, Soberano added that she had to portray a "new character" instead of
            being her own "natural self`,
        imageURL: "./images/Trese.jpg",
        details: {
            year: "2023",
        },
        backgroundColor: "#e74c3c",
    },
    {
        name: "Demon Slayer",
        description: "The record-breaking Demon Slayer has blown up tremendously in the last few years and it’s not too surprising to those that have followed the series up until now. Every single episode of Demon Slayer is consistently impressive with smooth animation that never compromises its gorgeous art, incredible visual effects that bring the spectacular battles to life, and an amazing soundtrack that punctuates its many emotional high points. Not only that, Demon Slayer will make you laugh out loud thanks to the over-the-top absurdity of characters like Zentisu and Inosuke, and it’ll just as easily make you tear up with its heavy themes of loss and family.",
        imageURL: "./images/demonslayer.jpg",
        details: {
            year: 2023
        },
        backgroundColor:
            "#37506e"
    },
    {
        name: "Hunter-X-Hunter",
        description:
           ` The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter,
            a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.
            Gon departs on a journey to become a Hunter and eventually find his father. Along the way, Gon meets various other Hunters and encounters the paranormal.`,
        imageURL: "./images/hunter-x-hunter.jpg",
        details: {
            year: 2023
        },
        backgroundColor:
        "#37506e"
    },
];


const worksSection = document.getElementById("portfolio");

works.forEach((work) => {

    worksSection.innerHTML += `<div class="anime-info">
  <div class="project-image" style="background-color: ${work.backgroundColor}">
      <img src="${work.imageURL}" alt="${work.name} Screenshot">
  </div>
  <div class="project-description">
      <h3>${work.name}</h3>
     
      <p>${work.description}</p> 
      <div class="project-details">
          <p class="project-details-color">${work.details.year}</p>
      </div>
  </div>
</div>
`;
});




