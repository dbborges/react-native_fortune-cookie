import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet, 
         Image, 
         TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      phraseText: '',
      img: require('./src/cookie.png')
    };

    this.breakCookie = this.breakCookie.bind(this);

    this.phrases = [
      'Follow the good and learn with they',
      'The good sense worth more than many knowledge',
      'The laugh is the smaller distance between two persons',
      'Let go of worries and be happy.',
      'Do the obvius, think in the impossible and conquer the impossible.',
      'Bilieve in miracles, but don\'t depend of theirs. ',
      'The biggest barrier to sucess is the fear of failing'
    ];

  }

  breakCookie() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length)
    this.setState({
      phraseText: ' "' + this.phrases[randomNumber] + '" ',
      img: require('./src/brokenCookie.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <Image
        source={this.state.img}
          style={styles.img}/>

          <Text style={styles.phraseText}>{this.state.phraseText}</Text>

          <TouchableOpacity style={styles.button} onPress={this.breakCookie}>
            <View style={styles.btnArea}>
              <Text style={styles.btnText}>Break Cookie</Text>
            </View>
          </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  img: {
    width: 250,
    height: 250,
  },
  phraseText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;
