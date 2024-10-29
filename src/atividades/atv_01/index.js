import { View,Text } from "react-native";
import styles from './styles';


export default function Exemplo1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Introdução React Native
            </Text>
            <Text style={styles.texto}>
             Voçê sabia que tu acabou de ler isso?
            </Text>
        </View>
    );
}
