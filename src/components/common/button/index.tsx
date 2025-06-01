import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ComponentProps } from 'react';


type Props = TouchableOpacityProps & {
  label?: string;
  width?: number;
  height?: number;
  route?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: number;
  icon?: ComponentProps<typeof Ionicons>['name'];
}

export function Button({ label, width, height, route, icon, bgColor, textColor, fontSize, ...rest }: Props) {
  const router = useRouter();
  function handlePress() {
    if (route) router.push(route);
  }

  return (
    <TouchableOpacity style={[styles.main, { width: width, height: height, backgroundColor: bgColor || '#4F46E5' }]} activeOpacity={0.8} onPress={handlePress} {...rest}>
      <Ionicons name={icon || 'add'} size={24} color={textColor || "#fafafa"}/>
      <Text style={{color: textColor || "#fafafa", fontSize: fontSize || 16, fontWeight: "bold"}}>{label || "Botão"}</Text>
    </TouchableOpacity>
  );
}