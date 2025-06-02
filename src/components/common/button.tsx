import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';


type Props = TouchableOpacityProps & {
  label: string;
  width?: number;
  height?: number;
  route?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  gap?: number;
  icon?: ComponentProps<typeof Ionicons>['name'];
}

export function Button({ label, width, height, route, icon, bgColor, textColor, fontSize, gap, ...rest }: Props) {
  const router = useRouter();
  function handlePress() {
    if (route) router.push(route);
  }

  return (
    <TouchableOpacity style={[styles.main, { width: width, height: height, backgroundColor: bgColor || '#4F46E5', gap: gap || 10 }]} activeOpacity={0.8} onPress={handlePress} {...rest}>
      <Ionicons name={icon || 'add'} size={24} color={textColor || "#fafafa"}/>
      <Text style={{color: textColor || "#fafafa", fontSize: fontSize || 16, fontWeight: "bold"}}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});