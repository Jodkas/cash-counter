import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputMoney from '../components/config/inputMoney';
import { CreateContext } from '../createContext';
import { setData } from '../localStorage/setAndGetFunctions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Config = ({ navigation }) => {
  const {
    bankMoney,
    setBankMoney,
    bankMoneyUSD,
    setBankMoneyUSD,
    currentMoney,
    setCurrentMoney,
  } = useContext(CreateContext);
  return (
    <View style={styles.container}>
      <InputMoney
        title={'Wallet'}
        currentMoney={`(current: $${currentMoney})`}
        placeholder="Change the money in the wallet"
        onChangeText={(text) => setCurrentMoney(text)}
        onEndEditing={() => setData('currentMoney', currentMoney)}
      />
      <InputMoney
        title="Bank in ARS"
        currentMoney={`(current: $${bankMoney})`}
        placeholder="Change the money in the bank"
        onChangeText={(text) => setBankMoney(text)}
        onEndEditing={() => setData('bankMoney', bankMoney)}
      />
      <InputMoney
        title="Bank in USD"
        currentMoney={`(current: $${bankMoneyUSD})`}
        placeholder="Change the money in the bank"
        onChangeText={(text) => setBankMoneyUSD(text)}
        onEndEditing={() => setData('bankMoneyUSD', bankMoneyUSD)}
      />
    </View>
  );
};
