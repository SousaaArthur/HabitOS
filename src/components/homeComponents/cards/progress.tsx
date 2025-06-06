import { View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { StyleSheet } from 'react-native';

export function ProgressCard() {
  return (
    <LinearGradient colors={['#27ae60', '#58d68d']} end={{ x: 1, y: 1 }} style={styles.cardProgress}>
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
      <View style={{ width: '0%', height: '100%', backgroundColor: '#27ae60' }} />
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardProgress: {
    padding: 25,
    margin: 12,
    borderRadius: 10,
    gap: 10,
  },
  progressContainerText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    color: "#fafafa", // Cor roxa
    fontSize: 24,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    color: "#fafafa99",
    marginTop: 5,
  },
  progressBar: {
    height: 20,
    borderRadius: 50,
    backgroundColor: "#fafafa60",
    overflow: "hidden",
    marginTop: 10,
  },
})