import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

export default function TimeInput() {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_event: any, selectedTime?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const formattedTime = `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.timeButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.timeText}> <Text style={{ fontWeight: '400', color: '#b0b0b0' }}>Hora: </Text> {formattedTime}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  timeButton: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timeText: {
    color: '#000',
    fontSize: 16,
  },
});
