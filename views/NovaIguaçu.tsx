import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../components/Tempo';
import Api from '../components/Api';

export default function NovaIguaçu(){
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('https://api.hgbrasil.com/weather?key=b22ab5ba&woeid=441588')
        setDados(response.data.forecast);
    }

    useEffect(
        ()=>{buscaTempo()
        },[]);

    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Previsão do Tempo para Nova Iguaçu</Text>
            <FlatList
                data={dados}
                keyExtractor={(item)=>item.date}
                renderItem={({item})=> <Tempo date={item.date} 
                max={item.max} min={item.min} 
                description={item.description} 
                condition={item.condition} lua={item.moon_phase}
                />}
                style={styles.lista}
            />
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
    lista:{
        height:'70%',
        width:'100%'
    }
});