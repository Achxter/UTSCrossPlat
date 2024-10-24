import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Keyboard } from 'react-native';
import { ActivityIndicator, Button, Dialog, Portal, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { currentStatus } from '../reducers/statusSlice';
import { addHistory } from '../reducers/historySlice';
import { pay } from '../reducers/saldoSlice';

interface HistoryItem {
  transactionID: string;
  number: string;
  merchant: string;
  nominal: number;
  status: boolean;
  date: string;
}

interface RootState {
  history: HistoryItem[];  // Adjust this to match your actual structure
}

function InsertPin({ navigation }) {
  const [pin, setPin] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const birthDatePin = '090204';
  const inputRef = useRef(null);
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const [visibleMax, setVisibleMax] = React.useState(false);
  const hideDialogMax = () => setVisibleMax(false);
  const [visibleLoading, setVisibleLoading] = useState(false)
  const showLoading = () => setVisibleLoading(true)
  const hideLoading = () => setVisibleLoading(false)
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.history);
  const ID = useSelector((state: { ID: { value: string } }) => state.ID.value);
  const merchant = useSelector((state: { merchant: { value: string } }) => state.merchant.value);
  const nominal = useSelector((state: { nominal: { value: number } }) => state.nominal.value);
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const time = now.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${date}, ${time}`;
  };

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

      if (value.length === 6) {
        if (value === birthDatePin) {
          setIsError(true);
          setAttempts((prev) => prev + 1);

          if (attempts + 1 >= 3) {
            setVisibleMax(true);
            dispatch(currentStatus(false));
            dispatch(addHistory({
              transactionID: 'ID' + String(history.length + 1).padStart(3, '0'),
              number: ID,
              merchant: merchant,
              nominal: nominal,
              status: false,
              date: getCurrentDateTime(),
            }));
            setTimeout(() => {
              hideDialogMax();
              navigation.navigate('Success');
            }, 2000);
          } else {
            setVisible(true);
          }
        } else {
          setIsError(false);
          showLoading();
          dispatch(currentStatus(true));
          dispatch(pay(nominal));
          dispatch(addHistory({
            transactionID: 'ID' + String(history.length + 1).padStart(3, '0'),
            number: ID,
            merchant: merchant,
            nominal: nominal,
            status: true,
            date: getCurrentDateTime(),
          }));
          setTimeout(() => {
            hideLoading();
            navigation.navigate('Success');
          }, 2000);
        }
        setPin('');
      }
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };
  const theme = useTheme();

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ color: theme.colors.onBackground, textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 50 }}>
        Masukkan PIN Anda
      </Text>
      <View style={styles.pinContainer}>
        {Array(6).fill('').map((_, index) => (
          <View key={index} style={[styles.circle, { borderColor: theme.colors.onBackground }, isError && { borderColor: 'red' }]}>
            {pin.length > index && (
              <View style={[styles.filledCircle, { backgroundColor: theme.colors.onBackground }, isError && { backgroundColor: 'red' }]} />
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
            <Text style={{ color: theme.colors.onBackground }}>Kesempatan tersisa: {3 - attempts}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <ActivityIndicator animating={visibleLoading} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
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
