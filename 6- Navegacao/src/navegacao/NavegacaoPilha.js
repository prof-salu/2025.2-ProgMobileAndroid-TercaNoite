import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaConfiguracoes from "../telas/TelaConfiguracao";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaPrincipal from "../telas/TelaPrincipal";

//Inicializando o Stack
const Stack = createNativeStackNavigator();

export default function NavegacaoPilha(){
    return(
        <Stack.Navigator initialRouteName="Inicial">
            <Stack.Screen name='Inicial' component={TelaPrincipal}/>
            <Stack.Screen name='Detalhes' component={TelaDetalhes} />
            <Stack.Screen name='Configurações' component={TelaConfiguracoes} />
        </Stack.Navigator>
    )
}