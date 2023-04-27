import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

const Dog = ({ setDogOftenFeed, setDogOftenVet, setDogOftenWalk, setStep }) => {
  return (
    <View>
      <View>
        <Text>How many times a day do you FEED</Text>
        <TextInput onChangeText={setDogOftenFeed} />
      </View>
      <View>
        <Text>How many times a day do you WALK</Text>
        <TextInput onChangeText={setDogOftenWalk} />
      </View>
      <View>
        <Text>How often you go VET</Text>
        <TextInput onChangeText={setDogOftenVet} />
      </View>
      <View>
        <Button title="next" onPress={() => setStep("dog-last")} />
      </View>
    </View>
  );
};

export default Dog;

const styles = StyleSheet.create({});
