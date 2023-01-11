import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {ListItem, Text, Divider} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons'
import ModalActions from './ModalActions'

const CustomListItem = ({info, navigation, id, rollno}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <View>
        <ListItem onPress={() => setModalVisible(true)} containerStyle={{backgroundColor:"white", borderRadius: 20, width: '90%', marginLeft: '5%', marginBottom: '-2%'}}>
          <ListItem.Content>
            <ListItem.Title
              style={{fontWeight: 'bold', textTransform: 'capitalize', color: 'black'}}
            >
              {info}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: '#222222'}}>
              {rollno}
            </ListItem.Subtitle>
          </ListItem.Content>
          <View> 
            <Text style={styles.right}>
              2PM
            </Text>
          </View>
        </ListItem>
        {/* <Divider style={{backgroundColor: 'lightgrey'}} /> */}
      </View>
      {/* <ModalActions
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
        id={id}
      /> */}
    </>
  )
}

export default CustomListItem

const styles = StyleSheet.create({
  left: {
    backgroundColor: '#533461',
    borderRadius: 8,
    padding: 10,
  },

  income: {
    backgroundColor: '#61ACB8',
    borderRadius: 8,
    padding: 10,
  },
  right: {
    fontWeight: 'bold',
    color: 'red',
  },
  rightIncome: {
    fontWeight: 'bold',
    color: 'green',
  },
})
