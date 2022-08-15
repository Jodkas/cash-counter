import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  conteiner: {
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diviceConteiner: {
    flexDirection: 'row',
  },
  saleAndPurchaseConteiner: {
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
});

export default Divice = (props) => {
  const [diviceSale, setDiviceSale] = useState('...');
  const [divicePurchase, setDivicePurchase] = useState('...');

  useEffect(() => {
    fetch(`https://api-dolar-argentina.herokuapp.com/api/${props.divice}`)
      .then((res) => res.json())
      .then((res) => {
        setDiviceSale(parseInt(res.venta));
        setDivicePurchase(parseInt(res.compra));
      });
  }, ['']);

  return (
    <View style={style.conteiner}>
      <Text style={style.header}>{props.name}</Text>
      <View style={style.diviceConteiner}>
        <View style={style.saleAndPurchaseConteiner}>
          <Text>Compra</Text>
          <Text>{divicePurchase}</Text>
        </View>
        <View style={style.saleAndPurchaseConteiner}>
          <Text>Venta</Text>
          <Text>{diviceSale}</Text>
        </View>
      </View>
    </View>
  );
};
