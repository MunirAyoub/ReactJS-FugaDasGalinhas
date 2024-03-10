import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import Comp1 from './components/Comp1';
import Estilo from './components/Estilo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iosContainer: {
    paddingTop: 20,
  },
  androidContainer: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default () => (
  <View
    style={[
      Estilo.viewSafeAndroid,
      styles.container,
      Platform.OS === 'ios' ? styles.iosContainer : styles.androidContainer,
      { backgroundColor: '#000020' },
    ]}>
    <StatusBar barStyle="white-content" />
    <Text
      style={[
        Estilo.txtTitulo,
        { color: '#FFFFFF', fontSize: 24, textAlign: 'center', padding: 5 },
      ]}>
      Prime Video
    </Text>
    <ScrollView>
      <SafeAreaView>
        <View style={Estilo.viewImage}>
          <Image
            style={Estilo.tamImage}
            source={require('./assets/fugadasgalinhas.png')}
          />
        </View>
      </SafeAreaView>
      <View>
        <Text
          style={[
            Estilo.txtTitulo,
            {
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: 'start',
              paddingTop: 5,
              paddingLeft: 30,
            },
          ]}>
          A Fuga das Galinhas
        </Text>
      </View>
      <View style={Estilo.buttonContainer}>
        <TouchableOpacity
          style={[
            Estilo.button,
            {
              backgroundColor: '#3498db',
              padding: 15,
              margin: 10,
              borderRadius: 5,
              alignItems: 'center',
            },
          ]}
          onPress={() => {
            console.log('Botão "Play Movie" pressionado');
          }}>
          <Text style={Estilo.buttonText}>Play Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Estilo.button,
            {
              backgroundColor: '#808080',
              padding: 15,
              margin: 10,
              borderRadius: 5,
              alignItems: 'center',
            },
          ]}
          onPress={() => {
            console.log('Botão "Download" pressionado');
          }}>
          <Text style={Estilo.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{ width: null, height: 100, marginTop: -5 }}
          source={require('./assets/i1.png')}
        />
        <Text style={{ color: '#FFFFFF', padding: 10, fontSize:20 }}>
           No galinheiro de uma fazenda inglesa dos anos 1950, galinhas cumprem
          sua função e vivem pacatamente sonhando com uma vida melhor. Uma
          delas, Ginger, sonha com a liberdade e planeja sair voando dali junto
          com suas companheiras.
        </Text>
        
        <Text style={{padding: 40}}></Text>

        <Text style={{ color: '#FFFFFF', fontSize: 15}}>-App clone feito por João Vitor e Munir Ayoub</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 10}}>-(Todos os direitos reservados a Prime)</Text>

      </View>
    </ScrollView>
    <Comp1 />
    <View>
        <Image
          style={{ width: null, height: 60 }}
          source={require('./assets/i3.png')}
        />
    </View>
  </View>
);
