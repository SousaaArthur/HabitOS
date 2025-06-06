import { useState, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

interface SelectInputProps {
  children: ReactNode;
}

export default function SelectInput({ children }: SelectInputProps) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isFocused = selectedCategory !== null;

  return (
    <View style={[styles.container, isFocused ? styles.focused : styles.unfocused]}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        {children}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
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
  picker: {
    height: 50,
    color: '#333',
  },
  focused: {
    borderColor: '#27ae60',
  },
  unfocused: {
    borderColor: '#ccc',
  },
});
