import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Modal } from 'react-native';
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
        console.log(data.split(' ')[3]);
        // data?.split(' ')[2]?.length == 9 ? setSuccess(true) : setError(true);
        setSuccess(true)
        setqrData(data);
        setTimeout(() => { setSuccess(false) }, 3000);
        setTimeout(() => { setError(false); }, 5000);
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
            <Text style={{ alignSelf: 'center', color: '#311E15', fontSize: 18 }} color='#F3DACC'> Please Wait! </Text>
            <Text style={{ alignSelf: 'center', color: '#311E15', fontSize: 20, fontWeight: '500', marginBottom: '4%' }} color='#F3DACC'> Scanning the QR Code . . . </Text>
            <ActivityIndicator size="large" color="#8B6C5B" style={{ marginBottom: '8%' }} />
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{ height: '50%', width: '70%', left: '15%' }}
            />
            {success && navigation.navigate("AddDetails", {
                qrData: qrData,
                success: success
            })
            }
            {error && navigation.navigate("Home", {
                success: error
            })}

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