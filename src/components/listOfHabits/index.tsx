import { ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

import { CardHabits } from '../cardHabits';

export function ListOfHabits() {
  return (
    <View style={styles.mainContent}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={styles.mainText}>Hábitos de Hoje</Text>
        <Ionicons name="add-circle-outline" size={24} />
      </View>
      
      <ScrollView style={{ marginTop: 16 }} contentContainerStyle={{ paddingBottom: 24 }}>
        <View style={styles.habitList}>
          <CardHabits habit="Treinar" typeHabit="Saúde" />
          <CardHabits habit="Ler um livro" typeHabit="Conhecimento" />
          <CardHabits habit="Meditar" typeHabit="Saúde Mental" />
          <CardHabits habit="Estudar programação" typeHabit="Conhecimento" />
          <CardHabits habit="Caminhar ao ar livre" typeHabit="Saúde Física" />
        </View>
      </ScrollView>

    </View>
  );
}
