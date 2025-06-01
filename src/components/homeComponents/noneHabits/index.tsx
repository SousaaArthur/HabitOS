import { View, Text } from 'react-native';
import { styles } from './styles';
import { Button } from '../../common/button';

export function NoneHabits() {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 20, color: '#555' }}>Nenhum hábito encontrado</Text>
      <Button
        label='Criar novo hábito'
        route='/create'
      />
    </View>
  );
}