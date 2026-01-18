import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const btnAddOne = () => {
    debugger;
    setCount(prevC => prevC + 1);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ruppin Demo4</Text>
      <Button title="add one" onPress={btnAddOne} />
      <Text>count = {count} </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNumber(Number(text))}
        value={number}
        placeholder="enter a number"
        keyboardType="numeric"
      />
      <Text>number = {number} </Text>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg'
        }}
        style={{ width: 150, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
