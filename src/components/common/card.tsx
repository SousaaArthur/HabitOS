import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ReactNode, ComponentProps } from "react";


export default function CardCreate({ title, subtitle, icon, children, gap, titleColor, padding} : {
  title?: string;
  subtitle?: string;
  icon?: ComponentProps<typeof Ionicons>['name'];
  children?: ReactNode;
  gap?: number;
  titleColor?: string;
  padding?: number;
}) {
  return (
    <View style={[styles.container, { gap: gap || 0, padding: padding || 12 }]}>
      <View style={{ marginLeft: 8}}>
        <View style={{  gap: 8, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name={icon} size={24} color={titleColor || '#000'} style={{ display: icon ? 'flex' : 'none' }}/>
          <Text style={[styles.title, { marginBottom: 10, color: titleColor || '#000' }]}>{title}</Text>
        </View>
        <Text style={[styles.subtitle, { display: subtitle ? "flex" : "none" }]}>{subtitle}</Text>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});