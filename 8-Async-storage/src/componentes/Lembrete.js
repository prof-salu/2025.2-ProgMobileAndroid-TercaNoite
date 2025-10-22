import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default function Lembrete({item, onFinalizar, onApagar, onEditar}){
    return(
        <TouchableOpacity onPress={() => onEditar(item)}>
            <View style={[styles.itemLista]}>
                <View style={[styles.dados, item.finalizado && styles.itemFinalizado]}>
                    <Text style={styles.itemTitulo}>{item.titulo}</Text>
                    <Text style={styles.itemConteudo}>{item.conteudo}</Text>
                    <Text style={styles.itemData}>Criado em: {item.dataCriacao}</Text>
                </View>

                <View style={styles.botoes}>
                    <Button title={item.finalizado ? 'Reabrir' : 'Finalizar'} onPress={() => onFinalizar(item.id)}/>
                    <TouchableOpacity style={styles.botaoApagar} onPress={() => onApagar(item.id)}>
                        <Text style={styles.textoApagar}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemLista: {
        padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc',
        backgroundColor: '#fff', marginBottom: 10, borderRadius: 5,
        flexDirection: 'row', alignItems: 'center',
    }, itemTitulo: {
        fontSize: 20, fontWeight: 'bold',
    }, itemConteudo: {
        fontSize: 16,
    }, itemData: {
        fontSize: 12, color: 'gray', marginTop: 5,
    }, botoes:{
        marginLeft: 10, gap: 10, flex: 1, alignItems: 'center'
    }, botaoApagar: {
        backgroundColor: '#ff5c5c', padding: 10, borderRadius: 50, 
        justifyContent: 'center', alignItems: 'center', width: 40, height: 40,
    }, textoApagar: {
        color: 'white', fontWeight: 'bold',
    }, dados: {
        flex: 1,
    }, itemFinalizado: {
        backgroundColor: '#e0e0e0',
    }
})