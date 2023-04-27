import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PetContextProvider } from "./context/PetContext";

import Home from "./screens/Home";
import AddPet from "./screens/AddPet";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PetContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddingPet" component={AddPet} />
        </Stack.Navigator>
      </NavigationContainer>
    </PetContextProvider>
  );
}

export default App;
