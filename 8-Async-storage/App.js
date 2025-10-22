import { StyleSheet, Text, View, TextInput, Button,
         FlatList, SafeAreaView } from 'react-native';

import { useState, useEffect } from 'react';

import * as LembreteDAO from './src/dao/LembreteDAO';
import Lembrete from './src/componentes/Lembrete';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [dataCriacao, setDataCriacao] = useState('');
  const [editando, setEditando] = useState(null);


  //Sempre que ocorrer uma alteração na lista, envia a notificação para atualização
  useEffect(() => {
    //Carrega os dados do arquivo
    async function carregarDados(){
      const dados = await LembreteDAO.obterTodos();
      setLembretes(dados);//Atribui os dados carregados a lista
    }
    carregarDados();
  }, []);

  async function salvarLembrete(){
    if(titulo.trim() === '' || conteudo.trim() === ''){
      return;
    }

    if(editando){
      const lembreteAlterado = {
        ...editando,
        titulo : titulo,
        conteudo : conteudo,
      }
      const novaLista = lembretes.map(item => 
        (item.id === editando.id) ? lembreteAlterado : item
    );                                                                                                          
    }else{
      //Cria um novo Lembrete para gravar no banco
      const novoLembrete = {
        id : Date.now(),
        titulo : titulo,
        conteudo : conteudo,
        dataCriacao : new Date(Date.now()).toLocaleDateString('pt-BR'),
        finalizado : false,
      }
      //Adiciona o novo lembrete a lista
      let novaLista;
      novaLista = [...lembretes, novoLembrete];
      setLembretes(novaLista);
      //Grava a nova lista no arquivo
      await LembreteDAO.salvarTodos(novaLista); 
  }
    //Limpa os campos de entrada
    setTitulo('');
    setConteudo('');
    setDataCriacao('');
    setEditando(null);
  }

  async function apagarLembrete(id){
    const novaLista = lembretes.filter(item => item.id !== id);
    setLembretes(novaLista);
    await LembreteDAO.salvarTodos(novaLista);
  }

  function alterarLembrete(lembrete){
    setEditando(lembrete);
    setTitulo(lembrete.titulo);
    setConteudo(lembrete.conteudo);
    setDataCriacao(lembrete.dataCriacao);
  }

  async function finalizar(id){
    const lembrete = lembretes.find(item => item.id === id);

    if(!lembrete){
      return;
    }

    const lembreteAtualizado = {
      ...lembrete, finalizado : !lembrete.finalizado,
      dataFinalizacao : !lembrete.finalizado 
        ? new Date().toLocaleDateString('pt-BR')
        : null
    }

    const novaLista = lembretes.map(item => 
      (item.id === id) ? lembreteAtualizado : item
    );

    // Atualizar o estado
    setLembretes(novaLista);

    // Salvar no AsyncStorage
    await LembreteDAO.salvarTodos(novaLista);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Minhas tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput style={styles.entrada} placeholder='Título'
                   value={titulo} onChangeText={setTitulo}/>
        <TextInput style={styles.entrada} placeholder='Conteúdo'
                   value={conteudo} onChangeText={setConteudo} />
        <Button title='Gravar' onPress={salvarLembrete}/>
      </View>

      <FlatList 
        data={lembretes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Lembrete item={item} onFinalizar={finalizar} 
                    onApagar={apagarLembrete} onEditar={alterarLembrete}/>
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
