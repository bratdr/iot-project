import ktm from "../assets/ktm.jpeg"; // change the ktm from your databases
import { schools } from "./Schools";

export const users = [
  {
    id: "1",
    name: "Jonni Simbolon",
    parent: "Jahmal",
    card_id: "10A98DB321",
    school: schools.find((school) => school.id === "1")?.name,
    ktm_card: ktm,
  },
  {
    id: "2",
    name: "Udut De Kantal",
    parent: "Asep Mahal",
    card_id: "05A89EX561",
    school: schools.find((school) => school.id === "2")?.name,
    ktm_card: ktm,
  },
  {
    id: "3",
    name: "Hasbullah Rahmat",
    parent: "Nurhaman MJ",
    card_id: "A2G25TE456",
    school: schools.find((school) => school.id === "3")?.name,
    ktm_card: ktm,
  },
];
