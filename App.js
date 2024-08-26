import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import DiceOne from "./assets/One.png";
import DiceTwo from "./assets/Two.png";
import DiceThree from "./assets/Three.png";
import DiceFour from "./assets/Four.png";
import DiceFive from "./assets/Five.png";
import DiceSix from "./assets/Six.png";

const Dice = ({ imageUrl }) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  diceImage: {
    width: 200,
    height: 200,
  },
});
