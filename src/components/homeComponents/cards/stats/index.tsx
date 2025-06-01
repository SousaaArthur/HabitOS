import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export function CardStart({iconName, iconColor, cardText, cardNumber}:{
  iconName: any
  iconColor: string;
  cardText: string;
  cardNumber: number;
}) {
  return (
  <View style={styles.mainContent}>
    <View style={styles.shadow}>
      <View style={styles.cardContainer}>
        <Ionicons name={iconName} size={24} color={iconColor}/>
        <Text style={styles.cardTextNumber}>{cardNumber}</Text>
        <Text style={styles.cardText}>{cardText}</Text>
      </View>
    </View> 
  </View> 
  )
}