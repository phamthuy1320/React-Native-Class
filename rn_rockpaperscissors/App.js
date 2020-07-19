import React from 'react';
import { Text, View ,
TouchableOpacity,Image} from 'react-native';

import styles from './assets/Css';
import {CHOICES,Button, ChoiceCard, getRoundOutCome} from './assets/component';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gamePrompt: 'Choose your weapon',
      userChoice: {},
      computerChoice: {}
    }
  }

  getResultColor = () => {
    if (this.state.gamePrompt === 'Victory!') return 'green';
    if (this.state.gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  onPress = playerChoice => {
    const [result,compChoice] = getRoundOutCome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name ===playerChoice);
    const newComputerChoice = CHOICES.find(choice =>choice.name === compChoice);

    this.setState({
      gamePrompt:result,
      userChoice: newUserChoice,
      computerChoice: newComputerChoice
    })
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 35, color: this.getResultColor()}}>{this.state.gamePrompt}</Text>
        <View style= {styles.choicesContainer}>
          <ChoiceCard player= 'Player' choice = {this.state.userChoice}/>
          <Text style={{color: '#250902'}}>VS</Text>
          <ChoiceCard player= 'Computer' choice = {this.state.computerChoice}/>
        </View>
          
        <View style={styles.buttonContainer}>
          {
            CHOICES.map(choice => {
              return <Button key={choice.name} name={choice.name} onPress= {this.onPress}/>
            })
          }
        </View>
      </View>
    );
  }
  
}


