import React from 'react';
import { View } from 'react-native';
import { Button } from '../common/button';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function SwitchStats() {
  const [activePeriod, setActivePeriod] = React.useState('Semana');

  function handleButtonPress(label: string) {
    setActivePeriod(label);
  }

  const getButtonStyle = (label: string) => {
    const isActive = activePeriod === label;
    return {
      backgroundColor: isActive ? '#4CAF50' : 'transparent',
      borderColor: isActive ? '#4CAF50' : '#6665',
      borderWidth: isActive ? 0 : 2,
      color: isActive ? '#FFFFFF' : '#000',
    };
  }

  return (
    <View style={{ flexDirection: 'row', gap: 6, padding: 10 }}>
      <Button
        label="Semana"
        bgColor={getButtonStyle('Semana').backgroundColor}
        textColor={getButtonStyle('Semana').color}
        fontSize={16}
        borderWidth={2}
        borderColor={getButtonStyle('Semana').borderColor}
        gap={5}
        onPress={() => handleButtonPress('Semana')}
      />
      <Button
        label="Mês"
        bgColor={getButtonStyle('Mês').backgroundColor}
        textColor={getButtonStyle('Mês').color}
        borderWidth={2}
        borderColor={getButtonStyle('Mês').borderColor}
        fontSize={16}
        gap={5}
        onPress={() => handleButtonPress('Mês')}
      />
      <Button
        label="Ano"
        bgColor={getButtonStyle('Ano').backgroundColor}
        textColor={getButtonStyle('Ano').color}
        borderWidth={2}
        borderColor={getButtonStyle('Ano').borderColor}
        fontSize={16}
        gap={5}
        onPress={() => handleButtonPress('Ano')}
      />
    </View>
  );
}