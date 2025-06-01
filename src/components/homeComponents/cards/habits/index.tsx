import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function CardHabits({habit, typeHabit}: {
  habit?: string;
  typeHabit?: string;
}) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.shadow}>
        <View style={styles.cardContainer}>
          <View style={{flexDirection: "row", alignItems: "center", gap: 12}}>
            <View style={styles.checkbox}></View>
            <View>
              <Text style={{fontWeight: "bold", fontSize: 16}}>{habit}</Text>
              <Text>Tipo: {typeHabit}</Text>
            </View>
          </View>
          <View>
            <Ionicons name="create-outline" size={24}/>
          </View>
        </View>
      </View>
    </View>
  )
}
