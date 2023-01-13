import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput, Image, Keyboard, Modal } from 'react-native';
import styled from 'styled-components/native';
import { Feather, Ionicons } from '@expo/vector-icons'
import { Text, Button } from 'react-native-elements'
import CounterInput from "react-native-counter-input";
import { Avatar } from "react-native-paper";

export default function Details({ route, navigation }) {
  const { qrData, success } = route.params;
  const [flagModal, setFlagModal] = useState(false);
  const MainContainer = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
  top: -5%;
`;

  const UpperContainer = styled.View`
  height: 30%;
  width: 100%;
`;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [guests, setGuests] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (success) {
      setFlagModal(true);
      setTimeout(() => {
        setFlagModal(false);
      }, 2000)
    }
  }, [])

  return (
    <View>

      <UpperContainer style={styles.upper}>
        <View style={{ flexDirection: 'row', marginTop: '40%', maxHeight: 25, marginLeft: '20%', marginRight: '20%', marginBottom: '5%' }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="chevron-back" size={25} color="#F3DACC" />
          </TouchableOpacity>
          <Text style={{ color: '#F3DACC', fontWeight: 'bold', fontSize: 20, marginLeft: '22.5%' }}>
            Daily Entry
          </Text>
        </View>
        <View style={{ zIndex: 5, alignSelf: 'center', height: 125, width: 125, borderWidth: 2, borderRadius: 100, marginBottom: '4%', borderColor: '#311E15' }}>
          <Avatar.Image size={120} source={require('../assets/person.jpg')} />
        </View>
      </UpperContainer>
      <MainContainer style={styles.mainContainer}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={flagModal}
        >
          <View style={styles.centeredViewNew1}>
            <View style={styles.modalViewNew1}>
              <Image
                style={{
                  width: 75,
                  height: 75,
                  alignSelf: 'center',
                  resizeMode: 'contain'
                }}
                source={require('../assets/check.png')}
              />
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#311E15' }}>
                Scan successful! 🥳️
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: 'green', margin: 5 }}>
                Valid Mess ID 🧑‍🏫️
              </Text>
            </View>
          </View>
        </Modal>
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar style='light' />
          <View style={styles.inputContainer}>
            <Text
              style={{
                color: '#F3DACC',
                fontSize: 12,
                marginLeft: '5%',
                marginTop: '5%',
              }}
            >
              NAME
            </Text>
            <Text
              style={styles.inputBox}
            >{qrData.split(' ')[0] + ' ' + qrData.split(' ')[1]}
            </Text>
            <Text
              style={{
                color: '#F3DACC',
                fontSize: 12,
                marginLeft: '5%',
                marginTop: '5%',
              }}
            >
              ROLL NO.
            </Text>
            <Text
              style={styles.inputBox}
            >{qrData.split(' ')[2]}
            </Text>
            <Text
              style={{
                color: '#F3DACC',
                fontSize: 12,
                marginLeft: '5%',
                marginTop: '2%',
              }}
            >
              NO. OF GUESTS (if any)
            </Text>
            <CounterInput
              style={{ marginTop: '5%', marginLeft: '5%', width: '90%' }}
              horizontal={true}
              increaseButtonBackgroundColor={'#311E15'}
              decreaseButtonBackgroundColor={'#311E15'}
              min={0}
              onChange={(counter) => {
                setGuests(counter);
              }}
            />
            <Text
              style={{
                color: '#F3DACC',
                fontSize: 12,
                marginLeft: '5%',
                marginTop: '5%',
              }}
            >
              EXTRA FOOD (if any)
            </Text>
            <TextInput
              style={styles.inputBox}
              keyboardType='numeric'
              placeholder='0'
              placeholderTextColor={'#FFFFFF'}
              value={0}
              defaultValue={0}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={{ flexDirection: 'row', marginLeft: '10%', marginTop: '-2%', marginBottom: '2%' }}>
          <Button
            buttonStyle={styles.add}
            title='Add'
            onPress={() => { }}
          // loading={submitLoading}
          />
          <Button
            buttonStyle={styles.cancel}
            title='Cancel'
            onPress={() => navigation.navigate('Home')}
            titleStyle={{ color: 'black' }}
            type="outline"
          />
        </View>
      </MainContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  centeredViewNew1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%'
  },
  modalViewNew1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    width: '70%',
    elevation: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  upper: {
    flexDirection: 'column',
    // justifyContent: 'center',
    width: '120%',
    marginLeft: '-10%',
    marginTop: '-30%',
    margin: 'auto',
    borderRadius: 200,
    zIndex: 1,
    backgroundColor: '#311E15'
  },
  mainContainer: {
    zIndex: -10,
    top: '10%'
  },
  tinyLogo: {
    width: '50%',
    height: '50%',
    marginLeft: '10%'
  },
  logo: {
    width: 66,
    height: 58,
  },
  container: {
    backgroundColor: '#4A2511',
    // 4C3228
    width: '85%',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#FAC7FF',
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: '7.5%',
  },
  inputContainer: {
    width: '92%',
    marginLeft: '4%'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  add: {
    width: '80%',
    backgroundColor: '#311E15',
    height: 50,
    borderRadius: 20,
    marginTop: '15%',
  },
  cancel: {
    color: '#000000',
    width: '80%',
    // backgroundColor: '#F3DACC',
    height: 50,
    borderRadius: 20,
    borderColor: '#F3DACC',
    borderWidth: 2,
    marginTop: '15%',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    borderColor: '#F3DACC',
    color: 'white',
    borderWidth: 1,
    padding: 10,
  },
  inputBoxC: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    padding: 10,
    fontSize: 14
  },
  inputBoxTe: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    borderColor: '#402243',
    color: 'red',
    borderWidth: 1,
    backgroundColor: '#FAC7FF',
  },
  inputBoxTi: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    borderColor: '#402243',
    color: 'green',
    borderWidth: 1,
    backgroundColor: '#FAC7FF'
  },
  thank: {
    backgroundColor: 'green',
    height: 50,
    width: 100,
    borderRadius: 20,
    padding: 15,
    zIndex: 5,
    fontSize: 18,
    alignSelf: 'center'
  },
  centeredViewNew: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalViewNew: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    width: '80%',
    height: '30%',
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    zIndex: -5
  },
});
