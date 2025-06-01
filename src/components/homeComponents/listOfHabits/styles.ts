import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    margin: 12,
    padding: 10,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  habitList: {
    marginTop: 16,
    gap: 12,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    gap: 10,
  },
  habitText: {
    fontSize: 18,
    color: '#333',
  },
});
