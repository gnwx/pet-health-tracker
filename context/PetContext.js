import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets();
  }, []);
  const createPet = async (pet) => {
    try {
      const petsArray = await AsyncStorage.getItem("pets");
      const petsFromStorage = JSON.parse(petsArray);
      const newPetsArray = [...petsFromStorage, pet];
      await AsyncStorage.setItem("pets", JSON.stringify(newPetsArray));
      setPets(newPetsArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getPets = async () => {
    try {
      const petsArray = await AsyncStorage.getItem("pets");
      const petsFromStorage = JSON.parse(petsArray);
      setPets(petsFromStorage);
    } catch (error) {
      console.log(error);
    }
  };
  const values = { pets, createPet };
  return <PetContext.Provider value={values}>{children}</PetContext.Provider>;
};

export { PetContext, PetContextProvider };
