import { useContext } from "react";
import { PetContext } from "../context/PetContext";

const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    console.log("Pet context must be used in PetContextProvider!");
  }

  return context;
};

export default usePetContext;
