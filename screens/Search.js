import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

const Stack = createNativeStackNavigator();

export default function Search() {
  const [input, setInput] = React.useState();
  const [sprite, setsprite] = React.useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
      );
      const data = response.data;
      const sprite = data.sprites.front_default
      setsprite(sprite)
      console.log(sprite);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>hello</Text>
      <TextInput
        value={input}
        placeholder="Search for info about a pokemon"
        onChangeText={setInput}
        style={styles.input}
      />
      <TouchableOpacity style={styles.appButtonContainer} onPress={submit}>
        <Text style={styles.appButtonText}>Search</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: `${sprite}`,
        }}
      />
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
  input: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width : 200,
    alignSelf: 'center'

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    width: 300,
    height: 300,
    margin: 10,

    borderColor: "black",
    alignSelf: 'center'
  },
    input: {
    height: 50,
    width: 400,
    margin:10,
    alignSelf:"center",
    fontSize: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
});
