import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, 
         Alert, ActivityIndicator, Platform } from 'react-native';

export default function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function buscarCEP(){
    if(cep.trim() === '' || cep.length < 8){
      if(Platform.OS === 'web'){
        alert('Por favor digite um CEP válido!');
      }else{
        //Exibe no IOS ou Android
        Alert.alert('Erro!', 'Por favor digite um CEP válido!');
      }      
      return;
    }
    //Limpa os dados a cada nova busca
    setCarregando(true);
    setEndereco(null);
    setErro(null);

    try{
      const resposta = await fetch('https://viacep.com.br/ws/'+ cep + '/json');
      //const resposta = await fetch('https://viacep.com.br/ws/RJ/Rio%20de%20Janeiro/' + cep  + '/json/');
      const data = await resposta.json();

      if(data.erro){
        //Endereço naõ encontrado
        setErro('CEP não encontrado.');
      }else{
        setEndereco(data);
        console.log(data);
      }
      console.log('Erro: ' + erro);
    }catch(error){
      //Captura qualuqer outro erro(conexao)
      setErro('Ocorreu um erro ao buscar o CEP');
    }finally{
      setCarregando(false);
    }
  }

  function exibeLoading(){
    if(carregando == true){
      return (<ActivityIndicator size={'large'} color={'red'}/>);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Busca CEP</Text>
        <TextInput 
          style={styles.input}
          value={cep}
          onChangeText={setCep}
          placeholder='Digite o CEP' 
          keyboardType='numeric'
          maxLength={8} />
        <Text style={styles.ajuda}>Apenas números, sem traços ou pontos.</Text>
        <Button title='Buscar' onPress={buscarCEP} disabled={carregando}/>
        
        {exibeLoading()}

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {endereco && (
          <View>
            <Text>CEP: {endereco.cep}</Text>
            <Text>Logradouro: {endereco.logradouro}</Text>
            <Text>Cidade: {endereco.localidade}</Text>
            <Text>Estado: {endereco.uf}</Text>
            <Text>Bairro: {endereco.bairro}</Text>
            <Text>Região: {endereco.regiao}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',  alignItems: 'center', justifyContent: 'center',
  },card: {
    backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%',
  }, titulo: {
    fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20,
  }, input: {
    height: 45, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, 
    paddingHorizontal: 10, marginBottom: 5,
  }, ajuda: {
    fontSize: 12, color: 'gray',  textAlign: 'center', marginBottom: 20,
  }, erro: {
    fontSize: 16, color: 'red', fontWeight: 'bold'
  }
});