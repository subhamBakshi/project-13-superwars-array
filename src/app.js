const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  //let detailedPlayers = [];
  // for (i = 0; i < players.length; i++) {
  //     detailedPlayers[i] = {
  //         name: players[i],
  //         strength: getRandomStrength(),
  //         image: "images/super-" + (i + 1) + ".png",
  //         type: (i % 2 == 0) ? 'hero' : 'villain'
  //     }
  // }

  let detailedPlayers = players.map((player, i) => {
    return {
      name: player,
      strength: getRandomStrength(),
      image: "images/super-" + (i + 1) + ".png",
      type: i % 2 == 0 ? "hero" : "villain",
    };
  });

  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  //let fragment = '';        <original line in code>
  // Instead of using for loop
  // Use chaining of Array methods - filter, map and join
  //The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.
  //The map() method is used to apply a function on every element in an array. A new array is then returned.
  // Type your code here

  fragment = players
    .filter((player) => player.type == type)
    .map(
      (player) =>
        `<div class="player">
             <img src="${player[i].imgage}">
             <div class="name">${player[i].name}</div>
             <div class="strength">${player[i].strength}</div>
            </div>`
    )
    .join();
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

// window.onload = () => {
//   viewPlayers(initPlayers(PLAYERS));
// };
