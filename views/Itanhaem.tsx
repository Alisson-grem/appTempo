import {View, Text, StyleSheet} from 'react-native';

export default function Itanhaem(){
    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Previsão do Tempo para Itanhaém</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:40
    },
    Texto:{
        fontSize:20,
    },
    
});