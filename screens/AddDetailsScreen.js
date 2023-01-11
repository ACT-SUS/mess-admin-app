import React, {useEffect, useState} from 'react'
import { StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput, Image, Keyboard, Modal } from 'react-native';
import styled from 'styled-components/native';
import {Feather, Ionicons} from '@expo/vector-icons'
import {Text, Button} from 'react-native-elements'
import CounterInput from "react-native-counter-input";
import { Avatar } from 'react-native-paper';

export default function Details({ route, navigation }) {
  const { qrData } = route.params;
  const MainContainer = styled.View`
  background-color: black;
  height: 100%;
  width: 100%;
  top: -5%;
  zIndex: -5;
`;

const UpperContainer = styled.View`
  background-color: #F9D7FF;
  height: 30%;
  width: 100%;
  border-radius: 10;
`;
const [isKeyboardVisible, setKeyboardVisible] = useState(false);
const [guests, setGuests] = useState(0);

  return (
    // <View >
    //     <View styles={styles.mainContainer}>
    //         <Text>Hello {JSON.stringify(qrData).split(' ')[0]}</Text>
    //         {/* <Image
    //         style={styles.tinyLogo}
    //         // source={require('../assets/male.png')}
    //     /> */}
    //         <Text>QR Data: {JSON.stringify(qrData)}</Text>
    //         {/* <Button title='Scan'/> */}
    //     </View>
    // </View>
    <>
      <UpperContainer style={styles.upper}>
      </UpperContainer>
      <MainContainer></MainContainer>
      <View 
        style={isKeyboardVisible ? {flexDirection: 'row', zIndex: 5, marginLeft: '10%', marginTop: '-180%'} : {flexDirection: 'row', zIndex: 5, marginLeft: '10%', marginTop: '-255%'}}>
      <TouchableOpacity
          style={{marginTop: '15%'}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="chevron-back" size={25} color="black" />
        </TouchableOpacity>
        
        <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 18, marginLeft: '22.5%', marginTop: '15%' }}>
          Daily Entry
        </Text>
      </View>
      <View style={{flex: 1, alignSelf: 'center',marginTop: '5%', maxHeight: 140}}>
        <Avatar.Image size={120} source={require('../assets/male.png')} />
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar style='dark' />
        <View style={styles.inputContainer}>
        <Text
          style={{
            color: '#FAC7FF',
            fontSize: 12,
            marginLeft: '5%',
            marginTop: '5%',
          }}
        >
          NAME
        </Text>
        <Text
            style={styles.inputBox}
          >{qrData.split(' ')[0] + ' ' +qrData.split(' ')[1]}
        </Text>
        <Text
          style={{
            color: '#FAC7FF',
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
              color: '#FAC7FF',
              fontSize: 12,
              marginLeft: '5%',
              marginTop: '2%',
            }}
          >
            NO. OF GUESTS (if any)
          </Text>
          <CounterInput
            style={{marginTop: '5%', marginLeft: '25%'}}
            horizontal={true}
            increaseButtonBackgroundColor={'#222222'}
            decreaseButtonBackgroundColor={'#222222'}
            min={0}
            onChange={(counter) => {
              setGuests(counter);
            }}
          />
          <Text
          style={{
            color: '#FAC7FF',
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
      <View style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-2%' ,marginBottom: '2%'}}>
        <Button
          buttonStyle={styles.add}
          title='Add'
          onPress={() => {}}
          // loading={submitLoading}
        />
        <Button
          buttonStyle={styles.cancel}
          title='Cancel'
          color='#FAC7FF'
          onPress={() => navigation.navigate('Home')}
        />
      </View>


    </>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      marginTop: 100
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
      backgroundColor: '#402243',
      width: '85%',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#FAC7FF',
      shadowOffset: {width: 10, height: 15},
      shadowOpacity: 0.20,
      shadowRadius: 2,
      elevation: 5,
      marginLeft: '7.5%'
    },
    upper: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '120%',
      marginLeft: '-10%',
      marginTop: '-15%', 
      margin: 'auto',
      borderRadius: 150,
      zIndex: -1
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
      backgroundColor: '#402243',
      height: 50,
      borderRadius: 20,
      marginTop: '15%',
    },
    cancel: {
      width: '80%',
      backgroundColor: '#000000',
      height: 50,
      borderRadius: 20,
      borderColor: '#FAC7FF',
      borderWidth: 1,
      marginTop: '15%'
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderRadius: 8,
      borderColor: 'white',
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