import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  contenier: {},
  text: {
    textAlign: 'right',
    fontSize: 50,
  },
  header: {
    fontSize: 13,
    marginBottom: -10,
    color: 'grey',
    textAlign: 'right',
  },
});

export default CurrentMoney = (props) => {
  const [currentMoney, setCurrentMoney] = useState(0);
  return (
    <View style={styles.conteiner}>
      <Text style={styles.header}>WALLET</Text>
      <Text style={styles.text}>${currentMoney}</Text>
    </View>
  );
};
