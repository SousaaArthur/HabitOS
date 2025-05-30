import { View} from 'react-native';
import { styles } from './styles';

import { CardStart } from '../cardStat';


export function CardStreaks() {
  return (
    <View style={styles.mainContent}>
      <CardStart iconName="flame" iconColor="#FF8C00" cardText="Maior Streak" cardNumber={0} />
      <CardStart iconName="trophy" iconColor="#FFD700" cardText="Maior Streak" cardNumber={0} />
      <CardStart iconName="calendar" iconColor="#7B68EE" cardText="Maior Streak" cardNumber={0} />
    </View>
  )
}