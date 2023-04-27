import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Step1 from "../components/addPet/Step1";
import Step2 from "../components/addPet/Step2";
import Dog from "../components/addPet/Dog/Dog";
import DogLast from "../components/addPet/Dog/DogLast";
import PetCreated from "../components/addPet/PetCreated";
import Cat from "../components/addPet/Cat/Cat";
import CatLast from "../components/addPet/Cat/CatLast";

const AddPet = ({ navigation }) => {
  const [step, setStep] = useState("step-1");
  //general
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");

  //dog
  const [dogOftenFeed, setDogOftenFeed] = useState("");
  const [dogOftenWalk, setDogOftenWalk] = useState("");
  const [dogOftenVet, setDogOftenVet] = useState("");
  const [dogLastFeed, setDogLastFeed] = useState("");
  const [dogLastWalk, setDogLastWalk] = useState("");
  const [dogLastVet, setDogLastVet] = useState("");

  const [catOftenFeed, setCatOftenFeed] = useState("");
  const [catOftenBoxChange, setCatOftenBoxChange] = useState("");
  const [catOftenVet, setCatOftenVet] = useState("");
  const [catLastFeed, setCatLastFeed] = useState("");
  const [catLastBoxChange, setCatLastBoxChange] = useState("");
  const [catLastVet, setCatLastVet] = useState("");

  return (
    <View>
      {step === "step-1" && (
        <Step1
          setPetName={setPetName}
          setPetAge={setPetAge}
          petName={petName}
          petAge={petAge}
          setStep={setStep}
        />
      )}
      {step === "step-2" && <Step2 setStep={setStep} />}
      {step === "dog" && (
        <Dog
          setDogOftenFeed={setDogOftenFeed}
          setDogOftenVet={setDogOftenVet}
          setDogOftenWalk={setDogOftenWalk}
          setStep={setStep}
        />
      )}
      {step === "dog-last" && (
        <DogLast
          setDogLastFeed={setDogLastFeed}
          setDogLastWalk={setDogLastWalk}
          setDogLastVet={setDogLastVet}
          setStep={setStep}
        />
      )}
      {step === "cat" && (
        <Cat
          setStep={setStep}
          setCatOftenFeed={setCatOftenFeed}
          setCatOftenBoxChange={setCatOftenBoxChange}
          setCatOftenVet={setCatOftenVet}
        />
      )}
      {step === "cat-last" && (
        <CatLast
          setStep={setStep}
          setCatLastFeed={setCatLastFeed}
          setCatLastBoxChange={setCatLastBoxChange}
          setCatLastVet={setCatLastVet}
        />
      )}
      {step === "pet-created" && <PetCreated navigation={navigation} />}
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({});
