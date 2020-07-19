import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CHOICES = require ('./data.json');
const Button = props => (
    <TouchableOpacity
     style={styles.buttonStyle}
     onPress = { () => props.onPress(props.name)}
    >
              <Text style={styles.buttonText}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
              </Text>
            </TouchableOpacity>
  );
  
  const ChoiceCard = ({ player,choice: { uri, name}}) => {
    const title = name && name.charAt(0).toUpperCase() + name.slice(1);
  
    return (
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceDescription}>
          {player}
        </Text>
        <Image
          source={{ uri}}
          resizeMode="contain"
          style={styles.choiceImage}
        />
        <Text style={styles.choiceCardTitle}>
          {title}
        </Text>
      </View>
    )
  
  }
  
  const RandomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];
  
  const getRoundOutCome = userChoice => {
    const computerChoice = RandomComputerChoice().name;
    let result;
  
    if(userChoice === 'rock') {
      result = computerChoice ==='scissors' ? 'Victory!' : 'Defeat';
    }
    if(userChoice === 'paper') {
      result = computerChoice ==='rock' ? 'Victory!' : 'Defeat';
    }
    if(userChoice === 'scissors') {
      result = computerChoice ==='paper' ? 'Victory!' : 'Defeat';
    }
  
    if(userChoice === computerChoice) {
      result = 'Tie game!';
    }
  
    return [result, computerChoice];
  }

  export {CHOICES,Button, ChoiceCard, getRoundOutCome};