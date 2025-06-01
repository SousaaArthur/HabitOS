import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

import { CardHabits } from '../cards/habits';
import { NoneHabits } from '../noneHabits';

export function ListOfHabits() {
  type Habit = {
    habit: string;
    typeHabit: string;
  };

  const habits: Habit[] = [
    
  ];
  const hasHabits = habits.length > 0;

  return (
    <View style={styles.mainContent}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={styles.mainText}>Hábitos de Hoje</Text>
        <Ionicons name="add-circle-outline" size={24} />
      </View>

      <ScrollView style={{ marginTop: 16 }} contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.habitList}>
          { hasHabits ? (
            habits?.map((item, index) => (
              <CardHabits
              key={index}
              // habit={item.habit}
              // typeHabit={item.typeHabit}
              ></CardHabits>
            ))
          ) : (
            <NoneHabits></NoneHabits>
          )}
        </View>
      </ScrollView>

    </View>
  );
}
