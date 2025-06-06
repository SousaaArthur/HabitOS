import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from '../../../styles/default'; // Assuming you have a styles file for config
import { Button } from '../../../components/common/button';
import CardCreate from '../../../components/common/card';
import CustomTextInput from '../../../components/common/textInput';
import SelectInput from '../../../components/common/selectInput';
import { Picker } from '@react-native-picker/picker';

function Config() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Configurações</Text> 
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <CardCreate icon='person' title="Sua Identidade" gap={6}>
          <CustomTextInput label="Quem é você?" placeholder="Digite seu nome"/>
          <Button label='Salvar Identidade' margin={7}></Button>
        </CardCreate>
        <CardCreate icon='color-palette' title="Tema do Aplicativo" gap={6}>
          <SelectInput>
            <Picker.Item label="Verde" value="green"/>
            <Picker.Item label="Roxo" value="purple"/>
            <Picker.Item label="Azul" value="blue"/>
            <Picker.Item label="Escuro" value="dark"/>
          </SelectInput>
        </CardCreate>
        <CardCreate icon='cloud-upload' title='Backup e Restauração' subtitle='Faça backup dos seus dados ou restaure de um backup existente' gap={6}>
          <Button icon='save-outline' label='Fazer Backup' bgColor='transparent' textColor='#000' borderWidth={2} borderColor='#000'/>
          <Button icon='download-outline' label='Restaurar Backup' bgColor='transparent' textColor='#000' borderWidth={2} borderColor='#000'/>
        </CardCreate>
        <CardCreate icon='information-circle' title='Sobre o HabitOS'>
          <Text style={styles.textColor}>Versão: 1.0.0</Text>
          <Text style={styles.textColor}>Inspirado no livro "Hábitos Atômicos" de James Clear</Text>
          <Text style={styles.textColor}>Desenvolvido para ajudar você a construir uma nova identidade através de pequenos hábitos consistentes.</Text>
        </CardCreate>
        <CardCreate icon='warning' title='Zona de Perigo' titleColor='#ef4444'>
          <Button icon='trash-outline' label='Resetar todos os dados' bgColor='#ef4444' margin={8}></Button>
        </CardCreate>
      </ScrollView>
    </SafeAreaView>
  );
}



export default Config;