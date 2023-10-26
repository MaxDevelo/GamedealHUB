import gog from "../assets/img/plateforms-logo/GOG.png";
import steam from "../assets/img/plateforms-logo/Steam.png";
import epic_games from "../assets/img/plateforms-logo/epic_games.png";
import instant_gaming from "../assets/img/plateforms-logo/instant_gaming.png";

export default function getImageSeller(plateform, url) {
  if(url) {
    if(url.includes("instant")) return instant_gaming;
    if(url.includes("steam")) return steam;
    if(url.includes("gog")) return gog;
  }
  switch (plateform) {
    case "gog":
      return gog;
    case "steam":
      return steam;
    case "epic games":
      return epic_games;
    case "instant gaming":
      return instant_gaming;
    default:
      return PC;
  }
};