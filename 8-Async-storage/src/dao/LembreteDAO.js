//DAO --> Data Acess Object [CRUD]

import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE_LEMBRETES = '@lembretes_app:lembretes';

export const LembreteDAO = {
    async salvarTodos(lembretes){
        try{
            const lembreteJson = JSON.stringify(lembretes);
            await AsyncStorage.setItem(CHAVE_LEMBRETES, lembreteJson);
        }catch(error){
            console.log('Erro: Falha ao salvar os lembretes.');
        }
    },
    async obterTodos(){
        try{
            const lembretesSalvos = await AsyncStorage.getItem(CHAVE_LEMBRETES);
            return JSON.parse(lembretesSalvos);
        }catch(error){
            console.log('Erro: Falha ao carregar os lembretes.')
            return [];
        }
    }
}