import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';


type Props = TouchableOpacityProps & {
  label?: string;
  width?: number;
  height?: number;
  route?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  gap?: number;
  borderColor?: string;
  borderWidth?: number;
  margin?: number;
  replaceRoute?: boolean;
  icon?: ComponentProps<typeof Ionicons>['name'];
  opacity?: number;
}

export function Button({ label, width, height, route, icon, bgColor, textColor, fontSize, gap, borderColor, borderWidth, margin, replaceRoute, opacity, ...rest }: Props) {
  const router = useRouter();
  function handlePress() {
    if (route) replaceRoute ? router.replace(route) : router.push(route);
  }

  return (
    <TouchableOpacity 
    style={[
      styles.main, { 
        width: width, 
        height: height, 
        backgroundColor: bgColor || '#27ae60', 
        gap: gap || 10, 
        borderColor: borderColor || 'transparent', 
        borderWidth: borderWidth || 0, 
        margin: margin || 0 
      }
    ]} activeOpacity={opacity || 0.8} onPress={handlePress} {...rest}>
      <Ionicons name={icon || 'add'} size={24} color={textColor || "#fafafa"} style={{ display: icon ? 'flex' : 'none' }}/>
      <Text style={{color: textColor || "#fafafa", fontSize: fontSize || 16, fontWeight: "bold", display: label ? 'flex' : 'none'}}>{label}</Text>
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
    borderWidth: 1,
  },
});