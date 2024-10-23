import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Keyboard } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

function InsertPin({ navigation }) {
  const [pin, setPin] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const birthDatePin = '090204'; // Replace this with your birth date in DDMMYY format
  const inputRef = useRef(null);
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const [visibleMax, setVisibleMax] = React.useState(false);
  const hideDialogMax = () => setVisibleMax(false);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsFocused(false);
      inputRef.current.blur();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handlePinChange = (value) => {
    if (value.length <= 6) {
      setPin(value);

      // Validate the PIN once it reaches 6 digits
      if (value.length === 6) {
        if (value === birthDatePin) {
          setIsError(true);
          setAttempts((prev) => prev + 1);

          if (attempts + 1 >= 3) {
            setVisibleMax(true);
            setTimeout(() => {
              hideDialogMax();
              navigation.navigate('Success');
            }, 2000);
            // Logic for handling a failed transaction can go here
          } else {
            setVisible(true);
          }
        } else {
          setIsError(false);
          navigation.navigate('Success');
          // Logic for handling a successful PIN entry can go here
        }
        setPin('');
      }
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 50 }}>
        Masukkan PIN Anda
      </Text>
      <View style={styles.pinContainer}>
        {Array(6).fill('').map((_, index) => (
          <View key={index} style={[styles.circle, isError && { borderColor: 'red' }]}>
            {pin.length > index && (
              <View style={[styles.filledCircle, isError && { backgroundColor: 'red' }]} />
            )}
          </View>
        ))}
      </View>
      <TextInput
        id='pinInput'
        ref={inputRef}
        style={styles.hiddenInput}
        value={pin}
        onChangeText={handlePinChange}
        keyboardType="numeric"
        maxLength={6}
        onBlur={() => setIsFocused(false)}
      />
      <Text onPress={handleFocus} style={styles.inputFocusArea}>
        {isFocused ? '' : 'Klik di sini untuk memasukkan PIN'}
      </Text>
      <Portal>
        <Dialog visible={visibleMax}>
          <Dialog.Title>PIN Salah</Dialog.Title>
          <Dialog.Content>
            <Text>Anda telah mencapai batas kesalahan maksimal</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>PIN Salah</Dialog.Title>
          <Dialog.Content>
            <Text>Kesempatan tersisa: {3 - attempts}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
  inputFocusArea: {
    textAlign: 'center',
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default InsertPin;
