import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Button } from './button';

  const daysOfWeek = [
  { key: 'mon', label: 'Seg' },
  { key: 'tue', label: 'Ter' },
  { key: 'wed', label: 'Qua' },
  { key: 'thu', label: 'Qui' },
  { key: 'fri', label: 'Sex' },
  { key: 'sat', label: 'Sáb' },
  { key: 'sun', label: 'Dom' },
];

interface WeekSelectorProps {
  selectedDays: string[];
  onChange: (days: string[]) => void;
}

export default function WeekSelector({ selectedDays, onChange }: WeekSelectorProps) {
  const toggleDay = (key: string) => {
    const updatedDays = selectedDays.includes(key)
      ? selectedDays.filter((d) => d !== key)
      : [...selectedDays, key];

    onChange(updatedDays);
  };

  const isSelected = (key: string) => selectedDays.includes(key);

  function selectAllDays() {
    if (selectedDays.length === daysOfWeek.length) {
      onChange([]);
    } else {
      onChange(daysOfWeek.map((day) => day.key));
    }
  }
  
  return (
    <View style={styles.container}>

      <Button 
        label='Selecionar Todos' 
        bgColor={selectedDays.length === daysOfWeek.length ? '#27ae60' : '#fff'}
        borderWidth={2}
        borderColor={selectedDays.length === daysOfWeek.length ? '#229954' : '#ccc'}
        textColor={selectedDays.length === daysOfWeek.length ? '#fafafa' : '#000'}
        onPress={selectAllDays}/>

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
            activeOpacity={0.7}
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

      <Text style={{textAlign: 'center'}}>Nem um dia selecionado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 5,
    gap: 15,
  },
  dayList: {
    gap: 5,
  },
  dayButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 6,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  dayButtonSelected: {
    backgroundColor: '#27ae60',
    borderColor: '#229954',
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
