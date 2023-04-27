import { StyleSheet, TextInput, View, Button, Text } from "react-native";
import React from "react";

const Step1 = ({ setPetName, setPetAge, petAge, petName, setStep }) => {
  return (
    <View>
      <View>
        <Text>Pet name</Text>
        <TextInput onChangeText={setPetName} />
      </View>
      <View>
        <Text>Pet age</Text>
        <TextInput onChangeText={setPetAge} />
      </View>
      <View>
        <Button title="Next" onPress={() => setStep("step-2")} />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({});
