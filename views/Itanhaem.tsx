import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Tempo from '../components/Tempo';
import Api from '../components/Api';

export default function Itanhaem(){
    const [dados, setDados] = useState<any[]>([]);

    async function buscaTempo(){
        const response = await Api.get('https://api.hgbrasil.com/weather?array_limit=3&fields=only_results,temp,forecast,max,min,date,condition,moon_phase&key=1ab2802d&city_name=Itanhaem,SP')
        setDados(response.data.forecast);
    }

    useEffect(
        ()=>{
            buscaTempo()
        },[]);

    return(
        <View style={styles.bloco}>
            <Text style={styles.Texto}>Previsão do Tempo para Itanhaém</Text>
            <FlatList
                data={dados}
                keyExtractor={(item)=>item.date}
                renderItem={({item})=> <Tempo 
                date={item.date} 
                max={item.max} min={item.min} 
                description={item.description} 
                condition={item.condition} 
                luas={item.moon_phase}
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