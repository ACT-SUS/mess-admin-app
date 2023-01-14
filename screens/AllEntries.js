import React, {useEffect, useLayoutEffect, useState} from 'react'
import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
// import {SafeAreaView} from 'react-native-safe-area-context'
import CustomListItem from '../components/CustomListItem'
// import {db, auth} from '../firebase'
import {Text} from 'react-native-elements'
import {FontAwesome5, Ionicons} from '@expo/vector-icons'
import styled from 'styled-components/native';
import axios from 'axios'

const AllTransactions = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'All Entries',
    })
  }, [])
  // const [transactions, setTransactions] = useState([])
  // useEffect(() => {
  //   const unsubscribe = db
  //     .collection('expense')
  //     .orderBy('timestamp', 'desc')
  //     .onSnapshot((snapshot) =>
  //       setTransactions(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     )

  //   return unsubscribe
  // }, [])
  const [filter, setFilter] = useState([
    {id: '1', data: 'Saurabh Powar', rollno: '191060053', time: '14:23'}, 
    {id: '2', data: 'Saurabh Powar', rollno: '191060058', time: '12:40'}
  ])

  useEffect(() => {
        (async () => {
            const data = await axios.get('http://localhost:5000/api/entry/today')
            console.log(data.data.entries);
            setFilter(() => {
                return data.data.entries.map((entry,idx) => {
                    return {
                        'id':idx+1,
                        'data' :entry['name'],
                        'rollno':entry['id'],
                        'time':entry['time']
                    }
                })
            })
            // { id: '1', data: 'Saurabh Powar', rollno: '191060053', time: '14:23' },

        })()
    }, [])

  const MainContainer = styled.View`
    background-color: 'white';
    height: 100%;
    width: 100%;
    zIndex: -5;
  `;

  const UpperContainer = styled.View`
    background-color: #311E15;
    height: 20%;
    width: 100%;
    border-radius: 20;
    zIndex: 5;
  `;

  return (
    <MainContainer>
       <UpperContainer>
      </UpperContainer>
      <View 
      style={{flexDirection: 'row', marginLeft: '10%', marginTop: '-20%', zIndex: 5}}>
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="chevron-back" size={25} color="#F3DACC" />
        </TouchableOpacity>

        <Text style={{color: '#F3DACC', fontWeight: 'bold', fontSize: 24, flex:1, textAlign:'center', marginRight:'15%' }}>
          All Entries
        </Text>
      </View>
      {filter?.length > 0 ? (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {filter?.map((info) => (
              <View key={info.id}>
                <CustomListItem
                  info={info.data}
                  id={info.id}
                  rollno = {info.rollno}
                  time = {info.time}
                />
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      ) : (
        <View style={styles.containerNull}>
          <FontAwesome5 name='list-alt' size={24} color='#8B6C5B' />
          <Text h4 style={{color: '#8B6C5B'}}>
            No Transactions
          </Text>
        </View>
      )}
    </MainContainer>
  )
}

export default AllTransactions

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 0,
    marginTop: '10%',
    height: '100%',
    flex: 1,
    paddingTop: '5%'
  },
  containerNull: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
