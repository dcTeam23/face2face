import "./hobbyicon.css";
import iconSleep from "/assets/icon-sleep.svg";
import iconGym from "/assets/icon-gym.svg";
import iconRead from "/assets/icon-read.svg";
import iconGame from "/assets/icon-game.svg";
import iconMusic from "/assets/icon-music.svg";
import iconCode from "/assets/icon-code.svg";
import iconTravel from "/assets/icon-travel.svg";
import iconMovie from "/assets/icon-movie.svg";
import iconCook from "/assets/icon-cook.svg";

/**
 * @typedef { Object } HobbyIconProps
 * @property { string } HobbyIconProps.hobby
 * @param { HobbyIconProps } props
 */

export function HobbyIcon({ hobby }) {
  let hobbyName;
  let iconHobby;

  // Usei um switch para determinar o nome do hobby e o ícone correspondente
  switch (hobby) {
    case "ler":
      hobbyName = "ler";
      iconHobby = iconRead;
      break;

    case "dormir":
      hobbyName = "dormir";
      iconHobby = iconSleep;
      break;

    case "games":
      hobbyName = "games";
      iconHobby = iconGame;
      break;

    case "academia":
      hobbyName = "academia";
      iconHobby = iconGym;
      break;

    case "música":
      hobbyName = "música";
      iconHobby = iconMusic;
      break;

    case "programar":
      hobbyName = "programar";
      iconHobby = iconCode;
      break;

    case "viajar":
      hobbyName = "viajar";
      iconHobby = iconTravel;
      break;

    case "filmes":
      hobbyName = "filmes";
      iconHobby = iconMovie;
      break;

    case "cozinhar":
      hobbyName = "cozinhar";
      iconHobby = iconCook;
      break;

    default:
      // Adicione um comportamento padrão caso o hobby não seja reconhecido
      hobbyName = "Outro";
      iconHobby = iconCode; // Defina o ícone padrão ou deixe vazio
      break;
  }

  return `<img class="icon-hobby" src="${iconHobby}" alt="${hobbyName}" />`;
}
