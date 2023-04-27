import { createContext, useState } from "react";

const PetContext = createContext();

const PetContextProvider = ({ children }) => {
  const [pets, setPets] = useState(["ayşe", "fatma"]);

  const values = { pets };
  return <PetContext.Provider value={values}>{children}</PetContext.Provider>;
};

export { PetContext, PetContextProvider };
