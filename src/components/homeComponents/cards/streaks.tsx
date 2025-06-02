import { View} from 'react-native';
import { StyleSheet } from 'react-native';

import { CardStart } from './stats';


export function CardStreaks() {
  return (
    <View style={styles.mainContent}>
      <CardStart iconName="flame" iconColor="#FF8C00" cardText="Maior Streak" cardNumber={0} />
      <CardStart iconName="trophy" iconColor="#FFD700" cardText="Maior Streak" cardNumber={0} />
      <CardStart iconName="calendar" iconColor="#7B68EE" cardText="Maior Streak" cardNumber={0} />
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
})