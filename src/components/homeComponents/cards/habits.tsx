import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    gap: 10,
  },
  shadow: {
    borderRadius: 5,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 4,
  },
  cardContainer: {
    padding: 10,
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    height: 18,
    width: 18,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  }
})
