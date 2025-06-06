import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { styles } from '../../styles/default';
import { Button } from '../../components/common/button';
import CustomTextInput from '../../components/common/textInput';
import SelectInput from '../../components/common/selectInput';
import { Picker } from '@react-native-picker/picker';
import WeekSelector from '../../components/common/weekSelector';
import TimeInput from '../../components/common/timeInput';
import CardCreate from '../../components/common/card';


function CreateHabitScreen() {
  return (
    <KeyboardAvoidingView 
    style={styles.main}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} 
    >
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Criar Novo Habito</Text> 
      </View>
      <ScrollView>

      <CardCreate title="Nome do hábito">
        <CustomTextInput placeholder='Ex: Caminhar de manhã' />
      </CardCreate>
      <CardCreate title="Categoria do hábito" subtitle="Selecione uma categoria para o hábito">
        <SelectInput>
          <Picker.Item label="Categoria" value="" enabled={false} />
          <Picker.Item label="Saúde" value="saude" />
          <Picker.Item label="Estudo" value="estudo" />
          <Picker.Item label="Trabalho" value="trabalho" />
          <Picker.Item label="Lazer" value="lazer" />
          <Picker.Item label="Financeiro" value="financeiro" />
          <Picker.Item label="Pessoal" value="pessoal" />
          <Picker.Item label="Outros" value="outros" />
        </SelectInput>
      </CardCreate>
      <CardCreate title='Dias da semana' subtitle='Selecione os dias da semana'>
        <WeekSelector></WeekSelector>
      </CardCreate>
      <CardCreate title='Gatilho (Opcional)' subtitle='Conecte seu novo hábito a uma ação existente'>
        <CustomTextInput placeholder='Depois de [Ação atual], farei [Novo hábito]' />
      </CardCreate>
      <CardCreate title='Lembrete (Opcional)' subtitle='Selecione o horário do hábito'>
        <CustomTextInput placeholder='Descrição do lembrete'></CustomTextInput>
        <TimeInput></TimeInput>
      </CardCreate>
      </ScrollView>
        <Button label='Criar Hábito' icon='add' margin={10}></Button>
    </KeyboardAvoidingView>
  );
}

export default CreateHabitScreen;