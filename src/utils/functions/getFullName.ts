import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const getFullName = (firstName: string, lastName: string) => {
  return capitalizeFirstLetter(firstName) + " " + capitalizeFirstLetter(lastName)
}