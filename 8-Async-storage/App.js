import { StyleSheet, Text, View, TextInput, Button,
         FlatList, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

import { LembreteDAO } from './src/dao/LembreteDAO';
import Lembrete from './src/componentes/Lembrete';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [lembretes, setLembretes] = useState([]);

  

  function finalizar(id){
    const lembrete = lembretes.find(item => item.id === id);

    if(!lembrete){
      return;
    }

    const lembreteAtualizado = {
      ...lembrete, finalizado : !lembrete,
      dataFinalizacao : !lembrete.finalizado 
        ? new Date().toLocaleDateString('pt-BR')
        : null
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Minhas tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput style={styles.entrada} placeholder='Título'
                   value={titulo} onChangeText={setTitulo}/>
        <TextInput style={styles.entrada} placeholder='Conteúdo'
                   value={conteudo} onChangeText={setConteudo} />
        <Button title='Gravar' />
      </View>

      <FlatList 
        data={lembretes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Lembrete item={item} onFinalizar={finalizar}/>
        )} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: 40, marginHorizontal: 20,
  }, titulo: {
    fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20,
  }, containerInput: {
    marginBottom: 20, gap: 5,
  }, entrada: {
    height: 45, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, 
    borderRadius: 5, 
  }
});
