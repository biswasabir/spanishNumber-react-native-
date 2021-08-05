import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),  
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]

const App = () => {

  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("Unable to play Sound");
      }
    });
    setTimeout(() => {
    soundVar.play();
  }, 10)
    

    soundVar.release();
  }
  return (
    <ScrollView styles={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity  acity key={sound}
            onPress={()=> {playsound(sound)} }
          style={styles.box}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
} 

export default App;

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
    box: {
      height: 110,
      alignItems: "center",
      justifyContent: "center",
      width: "46%",
      maginVertical: 6,
      backgroundColor: "#0f4cf5",
      borderRadius: 5,

      shadowColor: "#393e46",
      elevation: 5,
      shadowRadius: 4,
    },
    text: {
      fontSize: 50,
      color:"#ff4301"
    }
  }
})
