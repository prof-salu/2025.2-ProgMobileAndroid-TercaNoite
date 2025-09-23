import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaConfiguracoes from "../telas/TelaConfiguracao";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaPrincipal from "../telas/TelaPrincipal";

//Inicializando o Tab
const Drawer = createDrawerNavigator();

export default function NavegacaoGaveta(){
    return(
        <Drawer.Navigator initialRouteName="Inicial">
            <Drawer.Screen name='Inicial' component={TelaPrincipal}/>
            <Drawer.Screen name='Detalhes' component={TelaDetalhes} />
            <Drawer.Screen name='Configurações' component={TelaConfiguracoes} />
        </Drawer.Navigator>
    )
}