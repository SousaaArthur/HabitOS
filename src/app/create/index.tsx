import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/config';
import { Button } from '../../components/common/button';
import CustomTextInput from '../../components/common/textInput';
import SelectInput from '../../components/common/selectInput';
import { Picker } from '@react-native-picker/picker';
import WeekSelector from '../../components/common/weekSelector';
import TimeInput from '../../components/common/timeInput';


function CreateHabitScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 30 }}>Criar Novo Habito</Text> 
      </View>
      <View>
        <CustomTextInput placeholder='Nome do hábito' />
      </View>
      <View>
        <SelectInput>
          <Picker.Item label="Categoria" value="" />
          <Picker.Item label="Saúde" value="saude" />
          <Picker.Item label="Estudo" value="estudo" />
          <Picker.Item label="Trabalho" value="trabalho" />
          <Picker.Item label="Lazer" value="lazer" />
          <Picker.Item label="Financeiro" value="financeiro" />
          <Picker.Item label="Pessoal" value="pessoal" />
          <Picker.Item label="Outros" value="outros" />
        </SelectInput>
      </View>
      <View>
        <WeekSelector></WeekSelector>
      </View>
      <View>
        <TimeInput></TimeInput>
      </View>
    </View>
  );
}

export default CreateHabitScreen;