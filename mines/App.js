import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o mines</Text>
      <Text>Tamanho da grade:
        {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <Field />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
