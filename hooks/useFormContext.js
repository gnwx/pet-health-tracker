import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    console.log("Pet context must be used in PetContextProvider!");
  }

  return context;
};
export default useFormContext;
