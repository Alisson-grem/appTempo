import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>Seja bem Vindo</Text>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Itanhaem' as never)}
                >
                    <Text style={styles.textoBtn}>Itanhaém</Text>
                </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    Texto:{
        fontSize:30
    },
    btn:{
       backgroundColor:"#5599AA",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius:20
    },
    textoBtn:{
        color:"#FFF",
        fontSize:30,
        textAlign:'center'
    }
});