import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaConfiguracoes from "../telas/TelaConfiguracao";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaPrincipal from "../telas/TelaPrincipal";

//Inicializando o Tab
const Tab = createBottomTabNavigator();

export default function NavegacaoAbas(){
    return(
        <Tab.Navigator initialRouteName="Inicial">
            <Tab.Screen name='Inicial' component={TelaPrincipal}/>
            <Tab.Screen name='Detalhes' component={TelaDetalhes} />
            <Tab.Screen name='Configurações' component={TelaConfiguracoes} />
        </Tab.Navigator>
    )
}