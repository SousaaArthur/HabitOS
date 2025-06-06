import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from '../../../styles/default'; // Assuming you have a styles file for config
import { Button } from '../../../components/common/button';
import CardCreate from '../../../components/common/card';
import CustomTextInput from '../../../components/common/textInput';

function Config() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Configurações</Text> 
      </View>
      <ScrollView>
        <CardCreate icon='person-outline' title="Sua Identidade" gap={6}>
          <CustomTextInput label="Sua Identidade" placeholder="Digite seu nome"/>
          <Button label='Salvar Identidade' margin={7}></Button>
        </CardCreate>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Config;