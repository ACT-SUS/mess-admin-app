import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  Image,
  Keyboard,
  Modal,
} from "react-native";
import styled from "styled-components/native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native-elements";
import CounterInput from "react-native-counter-input";
import { Avatar } from "react-native-paper";

export default function Details({ route, navigation }) {
  const { qrData } = route.params;
  const MainContainer = styled.View`
    background-color: white;
    height: 100%;
    width: 100%;
  `;

  const UpperContainer = styled.View`
    height: 30%;
    width: 100%;
  `;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [guests, setGuests] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <View style={{backgroundColor: 'white'}}>
      <StatusBar style='light' />
      <UpperContainer style={styles.upper}>
        <View
          style={{
            flexDirection: "row",
            marginTop: "40%",
            maxHeight: 25,
            marginLeft: "20%",
            marginRight: "20%",
            marginBottom: "5%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="chevron-back" size={25} color="#F3DACC" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#F3DACC",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: "22.5%",
            }}
          >
            Daily Entry
          </Text>
        </View>
        <View
          style={{
            zIndex: 5,
            alignSelf: "center",
            height: 125,
            width: 125,
            borderWidth: 2,
            borderRadius: 100,
            marginBottom: "4%",
            borderColor: "#311E15",
          }}
        >
          <Avatar.Image size={120} source={require("../assets/person.jpg")} />
        </View>
      </UpperContainer>
      <MainContainer style={styles.mainContainer}>
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar style="light" />
          <View style={styles.inputContainer}>
            <Text
              style={{
                color: "#F3DACC",
                fontSize: 12,
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              NAME
            </Text>
            <Text style={styles.inputBox}>
              {qrData.split(" ")[0] + " " + qrData.split(" ")[1]}
            </Text>
            <Text
              style={{
                color: "#F3DACC",
                fontSize: 12,
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              ROLL NO.
            </Text>
            <Text style={styles.inputBox}>{qrData.split(" ")[2]}</Text>
            <Text
              style={{
                color: "#F3DACC",
                fontSize: 12,
                marginLeft: "5%",
                marginTop: "2%",
              }}
            >
              NO. OF GUESTS (if any)
            </Text>
            <CounterInput
              style={{ marginTop: "5%", marginLeft: "5%", width: "90%" }}
              horizontal={true}
              increaseButtonBackgroundColor={"#311E15"}
              decreaseButtonBackgroundColor={"#222222"}
              min={0}
              onChange={(counter) => {
                setGuests(counter);
              }}
            />
            <Text
              style={{
                color: "#F3DACC",
                fontSize: 12,
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              EXTRA FOOD (if any)
            </Text>
            <TextInput
              style={styles.inputBox}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor={"#FFFFFF"}
              value={0}
              defaultValue={0}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            marginLeft: "10%",
            marginTop: "-2%",
            marginBottom: "2%",
          }}
        >
          <Button
            buttonStyle={styles.add}
            title="Add"
            onPress={() => {}}
            // loading={submitLoading}
          />
          <Button
            buttonStyle={styles.cancel}
            title="Cancel"
            onPress={() => navigation.navigate("Home")}
            titleStyle={{ color: "black" }}
            type="outline"
          />
        </View>
      </MainContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  upper: {
    flexDirection: "column",
    // justifyContent: 'center',
    width: "120%",
    marginLeft: "-10%",
    marginTop: "-30%",
    margin: "auto",
    borderRadius: 200,
    zIndex: 1,
    backgroundColor: "#311E15",
  },
  mainContainer: {
    zIndex: -10,
    top: "10%",
  },
  tinyLogo: {
    width: "50%",
    height: "50%",
    marginLeft: "10%",
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    backgroundColor: "#4A2511",
    // 4C3228
    width: "85%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#FAC7FF",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: "7.5%",
  },
  inputContainer: {
    width: "92%",
    marginLeft: "4%",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  add: {
    width: "80%",
    backgroundColor: "#311E15",
    height: 50,
    borderRadius: 20,
    marginTop: "15%",
  },
  cancel: {
    color: "#000000",
    width: "80%",
    // backgroundColor: '#F3DACC',
    height: 50,
    borderRadius: 20,
    borderColor: "#4A2511",
    borderWidth: 2,
    marginTop: "15%",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    borderColor: "#F3DACC",
    color: "white",
    borderWidth: 1,
    padding: 10,
  },
  inputBoxC: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
  },
  centeredViewNew: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewNew: {
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 25,
    width: "80%",
    height: "30%",
    alignItems: "center",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    zIndex: -5,
  },
});
