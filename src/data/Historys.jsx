import { users } from "./Users";
import { drivers } from "./Drivers";

export const historys = [
  {
    id: "1",
    date: "Monday, 12 July 2023",
    time: "11.45",
    pickup: "Gymnasium Universitas Indonesia",
    drop: "Stasiun Universitas Indonesia",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "1"),
  },
  {
    id: "2",
    date: "Sunday, 11 July 2023",
    time: "16.15",
    pickup: "Halte Universitas Indonesia",
    drop: "Politeknik Negri Jakarta",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "2"),
  },
  {
    id: "3",
    date: "Saturday, 10 July 2023",
    time: "07.45",
    pickup: "Stasiun Universitas Indonesia",
    drop: "Halte Universitas Indonesia",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "3"),
  },
  {
    id: "4",
    date: "Saturday, 10 July 2023",
    time: "07.45",
    pickup: "Stasiun Universitas Indonesia",
    drop: "Halte Universitas Indonesia",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "3"),
  },
  {
    id: "5",
    date: "Saturday, 10 July 2023",
    time: "07.45",
    pickup: "Stasiun Universitas Indonesia",
    drop: "Halte Universitas Indonesia",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "3"),
  },
  {
    id: "6",
    date: "Saturday, 10 July 2023",
    time: "07.45",
    pickup: "Stasiun Universitas Indonesia",
    drop: "Halte Universitas Indonesia",
    user: users.find((user) => user.id === "1"),
    driver: drivers.find((driver) => driver.id === "3"),
  },
];
