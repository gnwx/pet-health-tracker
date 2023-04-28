import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    getPets();
  }, [pets]);

  const createPet = async (pet) => {
    try {
      const petsArray = await AsyncStorage.getItem("pets");
      const petsFromStorage = petsArray ? JSON.parse(petsArray) : [];
      const lastPet = petsFromStorage[petsFromStorage.length - 1];
      const newId = lastPet ? lastPet.id + 1 : 1;
      const newPet = {
        ...pet,
        id: newId,
      };
      const newPetsArray = [...petsFromStorage, newPet];
      await AsyncStorage.setItem("pets", JSON.stringify(newPetsArray));
      setPets(newPetsArray);
    } catch (error) {
      console.log(error);
    }
  };
  // delete pet
  const deletePet = async (petId) => {
    try {
      const petsArray = JSON.parse(await AsyncStorage.getItem("pets"));
      const petsWithoutDeletedPet = petsArray.filter((pet) => pet.id !== petId);
      await AsyncStorage.setItem("pets", JSON.stringify(petsWithoutDeletedPet));
      setPets(petsWithoutDeletedPet);
    } catch (error) {
      console.log(error);
    }
  };

  // get all pets for home page display
  const getPets = async () => {
    try {
      const petsArray = await AsyncStorage.getItem("pets");
      const petsFromStorage = JSON.parse(petsArray);
      setPets(petsFromStorage);
    } catch (error) {
      console.log(error);
    }
  };
  // delete all pets in asyncStorage
  const clearPets = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  const values = { pets, createPet, getPets, clearPets, deletePet };
  return <PetContext.Provider value={values}>{children}</PetContext.Provider>;
};

export { PetContext, PetContextProvider };
