import {Text, View, StyleSheet, Button} from 'react-native';

export default function TelaPrincipal({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Tela Principal</Text>
            <Button title='Configurações' 
                    onPress={() => navigation.navigate('Configurações')}/>
            <Button title='Detalhes' 
                    onPress={() => navigation.navigate('Detalhes')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }, texto: {
        fontSize: 20, marginBottom: 20, fontWeight: 'bold',
    }
});