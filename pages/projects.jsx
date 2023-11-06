import React from 'react'
import Carousel from '../components/Carousel';

export default function Projects() {
  const items = [
    {
      title: "Darkpaw Games",
      role: "Associate Software Engineer",
      description: "Created the stat locking system that allows a max-level character to play lower level zones as if they were the correct level for that zone."
      +"\n\nAgile developed, weekly meetings, reverse engineering systems, and creating a leaderboard to track who has completed the most achievements.",
      summary: "Kael Drakkel",
      images: [
        require("../public/images/everquest2.jpg"),
        require("../public/images/darkpaw/goodRacesCharacterSelect.jpg"),
        require("../public/images/darkpaw/loreandlegendoption.png"),
      ],
      gameUrl: "https://www.everquest2.com/news/eq2-kael-drakkel-now-live"
    },
    {
      title: "Gamebreaking Studios Prototype",
      role: "Gameplay Engineer",
      description: "2 month prototype of a tactical twin-stick shooter inspired by Monaco and Valorant."
      +"\n\nCreated Field of View for players and enemies, some of the enemy behavior and player movement."
      +"\n\nAgile developed, weekly meetings, group coding, and playtested.",
      summary: "GBS Prototype",
      images: [
        require("../public/images/gamebreaking/Untitled.png"),
        require("../public/images/GBSSummerPrototype.png"),
        require("../public/images/gamebreaking/Screenshot 2023-10-23 201125.png"),
      ],
      gameUrl: "https://gamebaking.com/prototypes/Summer2020Prototype/"
    },
    {
      title: "Hit 'em",
      role: "Full Development",
      description: "HIT 'EM is a game that plays like a pong and brick breaker mash'up "
      +"The goal is to hit balls off the other player's side of the screen. BUT, "
      +"you first must get through obstacles that take multiple hits to destroy, otherwise it will be very difficult to score. "
      +"Also did I mention that the longer you play without scoring, the more balls that will spawn?",
      summary: "Hit 'Em",
      images: [
        require("../public/images/Hitem/gameplay1.png"),
        require("../public/images/Hitem/gameplay2.png"),
        require("../public/images/Hitem/title.png"),
      ],
      gameUrl: "https://gilexarr.itch.io/hit-em",
      sourceUrl: "https://github.com/TadeoM/HitEm"
    },
    {
      title: "A Ranger's Tail",
      role: "Gameplay Engineer and Game Designer",
      description: "A Ranger’s Tail is a three-dimensional platformer with a twist, there are only two dimensions ever visible, where you must rotate your screen to see one of four sides. This gives a unique perspective on the game world, making it much larger than you can ever imagine. The game is planned to have a focus on providing an interesting combination of combat and puzzles, using a whimsical story that draws inspiration from the storytelling techniques that Studio Ghibli use in their films. "
      + "\n\nOur game draws inspiration from games such as Fez, and Hollow Knight. Fez inspired the unique mechanic of how the world is perceived by our mice protagonist. Fez brought on the original idea of this game, the mechanics that create the world of this game are very unique, and we wish to recreate the feelings of this game’s atmosphere created by the two-dimensional perspective. Considering the mechanics that we’ve chosen to use, our competitive landscape would be along indie classics like Fez. The audience we’d be targeting are people who are interested in a new take on the style of game, adding good platforming and combat, to provide a unique experience like none other. ",
      summary: "A Ranger's Tail",
      images: [
        require("../public/images/rangersTail/First.png"),
        require("../public/images/rangersTail/Second.png"),
        require("../public/images/rangersTail/Third.png"),
      ],
      sourceUrl: "https://github.com/TadeoM/A-Rangers-Tail"
    },
    {
      title: "Neighbor",
      role: "Gameplay Engineer and Game Designer",
      description: "Neighbor is a game that tells a story not just in the interactions between characters, but through gameplay and color. I wanted to make this game because it would allow me to work a lot on game design work, rather than mostly doing program work. This is still a work in progress, but I will be updating this as time goes forward. "
      +"\n\nA major mechanic in this game that I came up with is the use of color to tell the player how happy they and their neighbors are. The less happy a Character is, the more grey the around around them is. As the player interacts and helps NPCs, the NPCs will begin to gain color, signifying their happiness. The hope is to show the player that helping others makes the world a better place. "
      +"\n\nOn top of this, the game features a dialogue system that I created, that using Twine, twinestory and twine_to_json. Using these to make readable json files out of the html files that are outputted from Twine, to then be parsed by my scripts. This system allows for other people to not have to touch code, and still be able to create dialogues easily, and quickly.",
      summary: "Neighbor",
      images: [
        require("../public/images/neighbor/title.png"),
        require("../public/images/neighbor/Gameplay1.png"),
        require("../public/images/neighbor/Gameplay2.png"),
      ],
      sourceUrl: "https://github.com/Zedjones/Neighbor/tree/develop"
    },
    {
      title: "Prisoner of War",
      role: "Gameplay Engineer and Game Designer",
      description: "That is what Prisoners of War is about, war has left the US and Russia fighting over a city split by a land in the middle, no man's land. POW is a game that combines tug of war and dodgeball, as well some new mechanics to keep the game interesting. "
      +"\n\nThis was my first full game on Monogame. I worked on the user inputs, such as movement, shooting, as well as win conditions. The difficulty in making this game was getting our team to coordinate better than in other projects, we had many different things that needed to be done as we had never made a full game as a team, and organization and communication was the thing that I learned the most out of this project. ",
      summary: "Prisoners of War",
      images: [
        require("../public/images/prisonersOfWar/title.png"),
        require("../public/images/prisonersOfWar/turret.png"),
      ],
      sourceUrl: "https://github.com/TadeoM/Prisoners-Of-War"
    },
  ];
  return (
    <div>
      <Carousel props={items}/>
    </div>
  )
}
