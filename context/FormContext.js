import { createContext, useState } from "react";

export const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const [step, setStep] = useState("step-1");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petType, setPetType] = useState("");
  const [petOftenFeed, setPetOftenFeed] = useState("");
  const [petOftenSecond, setPetOftenSecond] = useState("");
  const [petOftenThird, setPetOftenThird] = useState("");
  const [petLastFeed, setPetLastFeed] = useState("");
  const [petLastSecond, setPetLastSecond] = useState("");
  const [petLastThird, setPetLastThird] = useState("");

  const values = {
    step,
    setStep,
    petName,
    setPetName,
    petAge,
    setPetAge,
    petType,
    setPetType,
    petOftenFeed,
    setPetOftenFeed,
    petOftenSecond,
    setPetOftenSecond,
    petOftenThird,
    setPetOftenThird,
    petLastFeed,
    setPetLastFeed,
    petLastSecond,
    setPetLastSecond,
    petLastThird,
    setPetLastThird,
  };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
