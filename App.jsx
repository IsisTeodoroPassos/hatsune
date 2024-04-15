import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Foto from './assets/images.jpg';
import Foto2 from './assets/pompom.jpg';
import Foto3 from './assets/criador.jpg';

export default function App() {
  return (
  <View style={estilo.container}>
    <Text style={estilo.nome}>
      Hello Kitty
    </Text>
    <Image
        source={Foto}
        style={estilo.avatar}
      />
    <Text style={estilo.sobre}>
    Hello Kitty, também conhecida por seu nome completo Kitty White, é uma personagem criada pela empresa japonesa Sanrio. Apesar do bigode, das orelhas e do nome, Sanrio retrata Hello Kitty como uma jovem gijinka de um Bobtail Japonês com um laço vermelho e, notavelmente, sem boca.
    </Text>

<br />
<br />
<br />



    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Perguntas
      </Text>
    

      <scrollView style={estilo.corpoChat}>
      <View style={estilo.msg}>
        <Image source={Foto2}
        style={estilo.imgChat}
        />
        <View style={estilo.textChat}>
        <Text style={estilo.CorTexto}>Oi</Text>
        <Text style={estilo.CorTexto}>Como eu uso o python??? O-o</Text>
        <Text style={estilo.CorTexto}>Au au</Text></View>
      </View>

      <View style={estilo.msg2}>
      <View style={estilo.textChat2}>
        <Text style={estilo.CorTexto}>Senhor, este site é dedicado à hello kitty.</Text>
        <Text style={estilo.CorTexto}>Não podemos ajudá-lo nessa situacao :/</Text></View>
        <Image source={Foto3}
        style={estilo.imgChat}
        />
      </View>

      <View style={estilo.msg}>
        <Image source={Foto2}
        style={estilo.imgChat}
        />
        <View style={estilo.textChat}>
        <Text style={estilo.CorTexto}>Como usa. pythom</Text></View>
      </View>
      
      <View style={estilo.msg2}>
      <View style={estilo.textChat2}>

        <Text style={estilo.CorTexto}>Senhor, infelizmente teremos que bani-lo de acessar nosso site.</Text></View>
        <Image source={Foto3}
        style={estilo.imgChat}
        />
      </View>
      </scrollView>
     
    </View>
 
    <View>
    <Text style={estilo.nome}>
      ------------------ Usuário @pompom foi banido. ------------------
    </Text>
    </View>


</View>
  



  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: '#ffe1ec', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  avatar:{
    width:200,
    height:200,
    borderRadius:100,
    borderWidth: 5,
    borderTopColor: "#000",
    /// borderBottomColor:"#ff0",   
  },
  nome:{
    fontSize: 24,
  
  },
  sobre:{
    fontSize: 18,
    marginHorizontal: 25,
    textAlign:'justify',
    padding: 20,
    backgroundColor: "#55555538",
    width: 350,
    marginTop:30,
    borderRadius:10
  },corpoChat:{
    backgroundColor: '#fff',
    width:'100%'
  },
  image:{
    borderLeftWidth:29
  },

  container:{
    backgroundColor:'e333',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  textChat:{
    textAlign:'auto',
    padding:10,
    borderColor:'#000',
    borderWidth:2,
    width: 330,
    backgroundColor:'#444',
    color:'#f432',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  textChat2:{
    alignItems:'flex-end',
    textAlign: 'justify',
    padding:10,
    borderColor:'#000',
    borderWidth:2,
    width: 330,
    backgroundColor:'#444',
    color:'#f432',
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  titulo:{
    fontSize:20,
    backgroundColor:'#fff',
    color:'255,255,255'
  },
  imgChat:{
    width:60,
    height:60,
    borderRadius:30,
  marginHorizontal:10
  },

    msg:{
      marginVertical: 20,
      flexDirection:'row'
    },

  msg2:{
    marginVertical:20,
    flexDirection:'row'
  },
  CorTexto:{
    color:'#fff'
  }
});
