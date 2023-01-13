import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Modal, Image, SafeAreaView, ScrollView } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import CustomListItem from '../components/CustomListItem'
import styled from 'styled-components/native';
// import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ route, navigation }) => {
    const [flagModal, setFlagModal] = useState(false);
    // // transactions
    // const [transactions, setTransactions] = useState([])
    // useEffect(() => {
    //   const unsubscribe = db
    //     .collection('expense')
    //     .orderBy('timestamp', 'desc')
    //     .onSnapshot(
    //       (snapshot) =>
    //         setTransactions(
    //           snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //           }))
    //         ) 
    //     )
    //   return unsubscribe
    // }, [])

    const [totalBalance, setTotalBalance] = useState(0)
    const [confirm, setConfirm] = useState(false)
    const [reset, setReset] = useState(false)

    const [filter, setFilter] = useState([
        { id: '1', data: 'Saurabh Powar', rollno: '191060053', time: '14:23' },
        { id: '2', data: 'Saurabh Powar', rollno: '191060058', time: '12:40' }
    ])

    const [date, setDate] = useState(null);

    let today = new Date();

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    useEffect(() => {
        let date = today.getDate() + ' ' + (months[today.getMonth() + 1]) + ' ' + today.getFullYear();
        setDate(date);
    }, []);

    const MainContainer = styled.View`
    background-color: white;
    height: 100%;
    width: 100%;
  `;

    const UpperContainer = styled.View`
    background-color: red;
    height: 30%;
    width: 100%;
    border-radius: 10;
  `;


    useEffect(() => {
        const curr = route?.params?.success ? true : false
        if (curr != flagModal) {
            setFlagModal(curr);
            setTimeout(() => {
                setFlagModal(false);
            }, 2000)
        }
    }, [route])

    return (
        <>
            {/* <View style={styles.container}> */}
            <StatusBar style='light' />
            <MainContainer>
                <UpperContainer style={styles.upper}>
                    <View style={styles.fullName}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', flex: 1 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: '2%', color: '#F3DACC' }}>Welcome 🙏️,</Text>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' }}>
                                    Mess Admin
                                </Text>
                            </View>
                            <Image
                                style={{
                                    resizeMode: 'contain',
                                    height: 120,
                                    width: 120,
                                    alignSelf: 'flex-end',
                                    flex: 1,
                                    marginRight: '10%',
                                    marginTop: '-6%'
                                }}
                                source={require('../assets/admin.png')}>
                            </Image>
                        </View>
                    </View>
                </UpperContainer>
                <View style={styles.card}>
                    <View style={styles.cardTop}>
                        <View style={{ flexDirection: 'row', marginBottom: '5%' }}>
                            <Ionicons name='calendar-outline' size={24} color='#311E15' />
                            <Text style={{ marginLeft: '5%', color: '#311E15', fontSize: 20, fontWeight: 'bold' }}>
                                {days[today.getDay()]}
                            </Text>
                            <Text style={{ marginLeft: '5%', color: '#311E15', fontSize: 20 }}>
                                {date}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#311E15', fontWeight: '700', fontSize: 18 }}>
                                Total Entries Today
                            </Text>
                            <Ionicons name='people' size={24} color='#311E15' style={{ marginLeft: '2%' }} />

                            {/* <Text style={{marginLeft: 5, color: '#000000', fontSize: 20 }}>
                  :
                </Text> */}
                        </View>
                        <Text h3 style={{ color: '#311E15' }}>
                            {totalBalance}
                        </Text>
                    </View>
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={flagModal}

                >
                    <View style={styles.centeredViewNew}>
                        <View style={styles.modalViewNew}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'red' }}>
                                ❌️  Scan Failed, Not Valid Member!
                            </Text>
                            {/* onPress={() => setShowModal(false)} */}
                        </View>
                    </View>
                </Modal>
                <View style={styles.recentTitle}>
                    <Text style={{ color: '#311E15', fontSize: 18, fontWeight: '500' }}>
                        {/* 🧑‍🏫️ */}
                        Recent Entries 🧑‍🤝‍🧑️:
                    </Text>
                </View>
                {filter?.length > 0 ? (
                    <SafeAreaView style={styles.containerScroll}>
                        <ScrollView>
                            {filter?.map((info) => (
                                <View key={info.id}>
                                    <CustomListItem
                                        info={info.data}
                                        id={info.id}
                                        rollno={info.rollno}
                                        time={info.time}
                                    />
                                </View>
                            ))}
                        </ScrollView>
                    </SafeAreaView>
                ) : (
                    <View style={styles.containerNull}>
                        <Ionicons name='people' size={24} color='#311E15' />
                        <Text h5 style={{ color: '#311E15' }}>
                            No Entries
                        </Text>
                    </View>
                )}
                {/* </View> */}
                <View style={styles.addButton}>
                    <TouchableOpacity
                        style={{ marginLeft: '-10%' }}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Home')}
                    >
                        {/* <Ionicons name='ios-home' size={30} color='#FFFFFF' /> */}
                        <Ionicons name='ios-home-outline' size={30} color='#FFFFFF' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginRight: '-10%' }}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('All')}
                    >
                        <Feather name='list' size={30} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'white', alignSelf: 'center', top: '85%', position: 'absolute' }}>
                    <TouchableOpacity
                        style={styles.plusButton}
                        onPress={() => navigation.navigate('QRScan')}
                        activeOpacity={0.5}
                    >
                        <MaterialCommunityIcons name="qrcode-scan" size={32} color="#FFFFFF" />
                        {/* <Ionicons name='md-qr-code-outline' size={32} color='#FFFFFF' /> */}
                    </TouchableOpacity>
                </View>
            </MainContainer>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    centeredViewNew: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    modalViewNew: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 10,
        width: '80%'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },

    fullName: {
        flex: 1,
        marginTop: '20%',
        marginLeft: '18%'
    },

    upper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '120%',
        marginLeft: '-10%',
        marginTop: '-5%',
        margin: 'auto',
        borderRadius: 100,
        backgroundColor: '#311E15'
    },

    card: {
        backgroundColor: '#F3DACC',
        width: '85%',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#FFFFFF',
        shadowOffset: { width: 10, height: 15 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 10,
        marginLeft: '7.5%',
        marginTop: '-15%'
    },

    cardTop: {
        marginBottom: 20,
        alignItems: 'center',
        margin: '4%'
    },

    cardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginLeft: '5%',
        marginBottom: '5%'
    },

    cardBottomSame: {
        flexDirection: 'row',
    },

    recentTitle: {
        marginLeft: '10%',
        marginTop: '8%',
    },

    recentTransactions: {
        backgroundColor: 'white',
        width: '100%'
    },

    seeAll: {
        fontWeight: 'bold',
        color: '#ECC2FF',
        fontSize: 14,
        marginLeft: '30%'
    },

    addButton: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        height: '8%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
        backgroundColor: '#311E15'
    },

    plusButton: {
        backgroundColor: '#4A2511',
        padding: 20,
        height: 75,
        width: 75,
        top: '12%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 50,
        marginBottom: 5
    },

    containerNull: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
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
    },

    no: {
        width: '80%',
        backgroundColor: 'green',
        height: 50,
        borderRadius: 20,
        marginTop: '15%',
    },

    yes: {
        width: '80%',
        backgroundColor: 'red',
        height: 50,
        borderRadius: 20,
        marginTop: '15%',
    },

    containerScroll: {
        backgroundColor: 'white',
        padding: 0,
        height: '100%',
        flex: 1
    }
})





{/* <Modal
animationType='slide'
transparent={true}
visible={reset}
onRequestClose={() => {
  alert('Modal has been closed.')
  setReset(false)
}}
>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Image
    style={{
      width: '40%',
      top: '-40%',
      resizeMode: 'contain'
    }}
    source={require('../assets/alert.png')}
  />
  <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center',top: '-80%', color: '#222222'}}>
    Are you sure you want to reset all the Transactions?
  </Text>
  <View style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-60%' ,marginBottom: '2%'}}>
    <Button
      buttonStyle={styles.yes}
      title='No'
      onPress={() => setReset(false)}
    />
    <Button
      buttonStyle={styles.no}
      title='Yes'
      color='#FFFFFF'
      // onPress={delAll}
    />
  </View>
</View>
</View>
</Modal> */}