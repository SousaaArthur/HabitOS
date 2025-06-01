import { View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

export function ProgressCard() {
  return (
    <LinearGradient colors={['#7C3AED', '#A855F7']} end={{ x: 1, y: 1 }} style={styles.cardProgress}>
    <View>
      <View style={styles.progressContainerText}>
      <Text style={styles.mainText}>Progresso de Hoje</Text>
      <Text style={styles.mainText}>0%</Text>
    </View>
    <View style={styles.progressContainerText}>
      <Text style={styles.subText}>0 de 1 hábitos concluídos</Text>
      <Text style={styles.subText}>XP: 20</Text>
    </View>
    </View>
    <View style={styles.progressBar}>
      <View style={{ width: '0%', height: '100%', backgroundColor: '#4F46E5' }} />
    </View>
    </LinearGradient>
  )
}