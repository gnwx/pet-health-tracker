import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Step1 from "../components/addPet/Step1";
import Step2 from "../components/addPet/Step2";
import PetCreated from "../components/addPet/PetCreated";
import Pet from "../components/addPet/Pet";

const AddPet = ({ navigation }) => {
  //form-steps
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

  // cat
  const [catOftenFeed, setCatOftenFeed] = useState("");
  const [catOftenBoxChange, setCatOftenBoxChange] = useState("");
  const [catOftenVet, setCatOftenVet] = useState("");
  const [catLastFeed, setCatLastFeed] = useState("");
  const [catLastBoxChange, setCatLastBoxChange] = useState("");
  const [catLastVet, setCatLastVet] = useState("");

  // bird
  const [birdOftenFeed, setBirdOftenFeed] = useState("");
  const [birdOftenCleanCage, setBirdOftenCleanCage] = useState("");
  const [birdOftenVet, setBirdOftenVet] = useState("");
  const [birdLastFeed, setBirdLastFeed] = useState("");
  const [birdLastCleanCage, setBirdLastCleanCage] = useState("");
  const [birdLastVet, setBirdLastVet] = useState("");

  // fish
  const [fishOftenFeed, setFishOftenFeed] = useState("");
  const [fishOftenCleanTank, setFishOftenCleanTank] = useState("");
  const [fishOftenVet, setFishOftenVet] = useState("");
  const [fishLastFeed, setFishLastFeed] = useState("");
  const [fishLastCleanTank, setFishLastCleanTank] = useState("");
  const [fishLastVet, setFishLastVet] = useState("");

  return (
    <View>
      {step === "step-1" && <Step1 setStep={setStep} />}
      {step === "step-2" && <Step2 setStep={setStep} />}
      {step === "dog-first" && (
        <Pet
          petSetters={[setDogOftenFeed, setDogOftenWalk, setDogOftenVet]}
          pet="dog"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "dog-second" && (
        <Pet
          petSetters={[setDogLastFeed, setDogLastWalk, setDogLastVet]}
          pet="dog"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "cat-first" && (
        <Pet
          petSetters={[setCatOftenFeed, setCatOftenBoxChange, setCatOftenVet]}
          pet="cat"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "cat-second" && (
        <Pet
          petSetters={[setCatOftenFeed, setCatOftenBoxChange, setCatOftenVet]}
          pet="cat"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "bird-first" && (
        <Pet
          petSetters={[
            setBirdOftenFeed,
            setBirdOftenCleanCage,
            setBirdOftenVet,
          ]}
          pet="bird"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "bird-second" && (
        <Pet
          petSetters={[setBirdLastFeed, setBirdLastCleanCage, setBirdLastVet]}
          pet="bird"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "fish-first" && (
        <Pet
          petSetters={[
            setFishOftenFeed,
            setFishOftenCleanTank,
            setFishOftenVet,
          ]}
          pet="fish"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "fish-second" && (
        <Pet
          petSetters={[setFishLastFeed, setFishLastCleanTank, setFishLastVet]}
          pet="fish"
          step={step}
          setStep={setStep}
        />
      )}
      {step === "pet-created" && (
        <PetCreated
          dogLastFeed={dogLastFeed}
          dogLastWalk={dogLastWalk}
          dogLastVet={dogLastVet}
          dogOftenFeed={dogOftenFeed}
          dogOftenWalk={dogOftenWalk}
          dogOftenVet={dogOftenVet}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({});
