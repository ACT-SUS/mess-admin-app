import React, { useState, useEffect, Suspense } from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function QRScanner() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [qrData, setqrData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(data);
    data?.split(' ')[2]?.length == 9 ? setSuccess(true) : setError(true);
    setqrData(data);
    setTimeout(() => {setSuccess(false)}, 3000);
    setTimeout(() => {setError(false);}, 3000);
    console.log(error);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{marginTop: '25%', alignSelf: 'center', color: 'green', fontSize: 18}} color='black'> Scanning the QR Code . . . </Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{height: '70%', width: '75%', flex: 1, left: '12.5%', marginTop: '-20%'}}
      />
      
      <Modal
        animationType='slide'
        transparent={true}
        visible={success}
      >
      <View style={styles.centeredViewNew}>
        <View style={styles.modalViewNew}>
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'green'}}>
          ✅️  Scan Success, Valid Member! 
          </Text>
          {/* onPress={() => setShowModal(false)} */}
        </View>
      </View>
      </Modal>
      <Modal
        animationType='slide'
        transparent={true}
        visible={error}
        
      >
      <View style={styles.centeredViewNew}>
        <View style={styles.modalViewNew}>
          <Text style={{fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'red'}}>
          ❌️  Scan Failed, Not Valid Member! 
          </Text>
          {/* onPress={() => setShowModal(false)} */}
        </View>
      </View>
      </Modal>

      {success && navigation.navigate("AddDetails", {
            qrData: qrData
          })}
      {error && navigation.goBack()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
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
});