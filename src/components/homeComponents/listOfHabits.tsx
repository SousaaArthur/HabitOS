import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import { CardHabits } from './cards/habits';
import { NoneHabits } from './noneHabits';
import { Button } from '../common/button';

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
        <Button
          route='/create'
          icon='add-circle-outline'
          bgColor='transparent'
          textColor='#000'
        ></Button>
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

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    margin: 12,
    padding: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  habitList: {
    marginTop: 16,
    gap: 12,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    gap: 10,
  },
  habitText: {
    fontSize: 18,
    color: '#333',
  },
});