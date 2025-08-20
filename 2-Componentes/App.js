import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu app</Text>

      <Text style={styles.texto}>Informe os seus dados para o login.</Text>

      <Image style={styles.imagem} source={{uri : 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg'}}/>

      <Image style={styles.imagem} source={require('./assets/creative.jpg')} />

      <TextInput style={styles.entrada} placeholder='Informe o seu e-mail'/>

      <Button color={'orange'} title='Enviar' onPress={() => alert('Enviado')}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  titulo : {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  }, texto: {
    fontSize: 20,
    color: '#555444',
    fontStyle: 'italic',
  }, imagem: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderRadius: 80,
  }, entrada: {
    fontSize: 22,
    borderWidth: 1,
    padding: 10,
  }
});
