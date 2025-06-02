import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const daysOfWeek = [
  { key: '0', label: 'Dom' },
  { key: '1', label: 'Seg' },
  { key: '2', label: 'Ter' },
  { key: '3', label: 'Qua' },
  { key: '4', label: 'Qui' },
  { key: '5', label: 'Sex' },
  { key: '6', label: 'Sáb' },
];

export default function WeekSelector() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (key: string) => {
    setSelectedDays((prev) =>
      prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key]
    );
  };

  const isSelected = (key: string) => selectedDays.includes(key);

  return (
    <View style={styles.container}>

      <FlatList
        data={daysOfWeek}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dayList}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              isSelected(item.key) && styles.dayButtonSelected,
            ]}
            onPress={() => toggleDay(item.key)}
          >
            <Text
              style={[
                styles.dayLabel,
                isSelected(item.key) && styles.dayLabelSelected,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  dayList: {
    gap: 5,
  },
  dayButton: {
    width: 50,
    height: 50, // Adicionado
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 6,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
  },
  dayButtonSelected: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
    borderWidth: 2,
  },
  dayLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  dayLabelSelected: {
    color: '#fff',
  },
  dayFull: {
    fontSize: 12,
    color: '#777',
  },
  dayFullSelected: {
    color: '#E0E0E0',
  },
});
