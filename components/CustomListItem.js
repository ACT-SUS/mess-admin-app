import React from 'react'
import {StyleSheet, View} from 'react-native'
import {ListItem, Text, Divider} from 'react-native-elements'

const CustomListItem = ({info, id, rollno, time}) => {
  return (
    <>
      <View>
        <ListItem containerStyle={styles.container}>
          <ListItem.Content>
            <ListItem.Title
              style={{fontWeight: 'bold', fontSize: 18, color: '#311E15'}}
            >
              {info}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: '#222222'}}>
              {rollno}
            </ListItem.Subtitle>
          </ListItem.Content>
          <View> 
            <Text style={styles.right}>
              {time}
            </Text>
          </View>
        </ListItem>
        <Divider style={{backgroundColor: 'lightgrey'}} />
      </View>
    </>
  )
}

export default CustomListItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white", 
    borderRadius: 20, 
    width: '90%', 
    marginLeft: '5%', 
    marginBottom: '-2%'
  },
  right: {
    fontWeight: 'bold',
    color: '#311E15',
  },
})
