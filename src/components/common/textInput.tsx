import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function CustomTextInput({ placeholder } : {
  placeholder?: string;
}) {

  const [ isFocused, setIsFocused ] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused, {}]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    height: 50,
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
  inputFocused: {
    borderColor: '#6200ee',
    borderWidth: 2,
  },
});
