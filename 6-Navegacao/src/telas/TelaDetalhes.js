import {Text, View, StyleSheet, } from 'react-native';
export default function TelaDetalhes(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Tela Detalhes</Text>            
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