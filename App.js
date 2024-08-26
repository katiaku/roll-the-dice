import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useState } from "react";

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
  const [diceImage, setDiceImage] = useState(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2f2",
    alignItems: "center",
    justifyContent: "center",
  },

  diceContainer: {
    margin: 12,
  },

  diceImage: {
    width: 200,
    height: 200,
  },

  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#e5e0ff",
    fontSize: 16,
    color: "#8ea7e9",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
