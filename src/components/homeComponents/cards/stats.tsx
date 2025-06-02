import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  mainContent: {
    margin: 12,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-around",
  },
  shadow: {
  borderRadius: 10,
  backgroundColor: "#fff",

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,

  elevation: 4,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 5,
    borderRadius: 10,
  },
  cardTextNumber: {
    fontSize: 24,
    fontWeight: "bold",
  }, 
  cardText: {
    fontSize: 16,
    color: "#959595",
  },
})