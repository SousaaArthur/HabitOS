import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from '../common/button';

export function NoneHabits() {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20, color: '#555' }}>Nenhum hábito encontrado</Text>
      <Button
        label='Criar novo hábito'
        route='/create'
        icon='add'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  }
})