import NavegacaoPilha from "./src/navegacao/NavegacaoPilha";
import NavegacaoAbas from "./src/navegacao/NavegacaoAbas";
import NavegacaoGaveta from "./src/navegacao/NavegacaoGaveta";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoGaveta />
    </NavigationContainer>    
  );
}
