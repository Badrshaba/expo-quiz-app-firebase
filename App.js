import { Text, View } from "react-native";
import QuizApp from "./src";
import PlayGround from "./src/PlayGround";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuizApp" component={QuizApp} />
        <Stack.Screen name="PlayGround" component={PlayGround} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
