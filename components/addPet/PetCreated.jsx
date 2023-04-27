import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const PetCreated = ({
  navigation,
  dogOftenFeed,
  dogOftenWalk,
  dogOftenVet,
  dogLastFeed,
  dogLastWalk,
  dogLastVet,
}) => {
  return (
    <View>
      <Text>OFTENfeed:{dogOftenFeed}</Text>
      <Text>OFTENwalk:{dogOftenWalk}</Text>
      <Text>OFTEN vET:{dogOftenVet}</Text>

      <Text>LAST FEED:{dogLastFeed}</Text>
      <Text>LAST WALK:{dogLastWalk}</Text>
      <Text>LAST VET:{dogLastVet}</Text>

      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default PetCreated;

const styles = StyleSheet.create({});
