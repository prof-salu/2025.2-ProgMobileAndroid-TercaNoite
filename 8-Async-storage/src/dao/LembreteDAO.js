//DAO --> Data Acess Object [CRUD]

import AsyncStorage from '@react-native-async-storage/async-storage';

//Nome do arquivo
const CHAVE_LEMBRETES = '@lembretes_app:lembretes';

export async function salvarTodos(lembretes){
    try{
        console.log('Sucesso!');
        const lembreteJson = JSON.stringify(lembretes);
        await AsyncStorage.setItem(CHAVE_LEMBRETES, lembreteJson);
        console.log('Sucesso!');
    }catch(error){
        console.log('Erro: Falha ao salvar os lembretes.');
    }
}

export async function obterTodos(){
    try{
        const lembretesSalvos = await AsyncStorage.getItem(CHAVE_LEMBRETES);
        return JSON.parse(lembretesSalvos);
    }catch(error){
        console.log('Erro: Falha ao carregar os lembretes.')
        return [];
    }
}