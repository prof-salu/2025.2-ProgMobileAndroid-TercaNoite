import {  StyleSheet, Text, View, Platform, Alert,
          SafeAreaView, TextInput, Button } from 'react-native';

import {useState} from 'react';

export default function App() {
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState('');

  function adicionar(){
    if(produto.trim() === ''){
      if(Platform.OS === 'web'){
        alert('O produto deve ser preenchido.');
      }else{
        Alert.alert('Erro!', 
                  'O produto deve ser preenchido');
      }
      setProduto('');
      setQuantidade(1);
      return;
    }

    if(Platform.OS === 'web'){
      alert(`Produto: ${produto}, Quantidade: ${quantidade}`);
    }else{
      Alert.alert('Sucesso!', 
                `Produto: ${produto}, Quantidade: ${quantidade}`)
    }
    
    setProduto('');
    setQuantidade(1);
  }

  function incrementar(){
    setQuantidade(quantidade + 1);
  }

  function decrementar(){
    setQuantidade(quantidade - 1);
  }

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carrinho}>
        <Text style={styles.titulo}>Carrinho de Compras</Text>
        <Text style={styles.label}>Produto</Text>
        <TextInput 
          style={styles.entrada} 
          placeholder='Ex.: Feijão'
          value={produto}
          onChangeText={setProduto}
          />
        <Text style={styles.label}>Quantidade</Text>
      </View>

      <View style={styles.botoes}>
        <Button title='-' color='red' onPress={decrementar}/>
        <Text style={styles.quantidade}>{quantidade}</Text>
        <Button title='+' color='blue' onPress={incrementar}/>
      </View>

      <View style={styles.adicionar}>

        <Button title='Adicionar' 
        color='purple' onPress={adicionar}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center',
    justifyContent: 'center',
  }, carrinho: {
    borderRadius: 15, padding: 25, width: '90%', 
  }, titulo: {
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', 
    marginBottom: 20,
  }, label: {
    fontSize: 16, color: '#333', marginBottom: 5,
  }, entrada: {
    borderColor: '#ccc', borderWidth: 1, borderRadius: 10,
    height: 45, padding: 10, fontSize: 16, marginBottom: 20
  }, botoes: {
    flexDirection: 'row', alignItems: 'center', 
    justifyContent: 'center', marginBottom: 30,
  }, quantidade: {
    fontSize: 24, fontWeight: 'bold', marginHorizontal: 20,
  }, adicionar: {
    marginTop: 10,
  }
});
